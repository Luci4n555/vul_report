<?php

namespace App\Lib;

use App\Jwt\JWT;

use App\Lib\Auth as Auth;
use App\Model\Token;
use App\Model\User as UserModel;
use App\Model\Address as AddressModel;

use PhalApi\Exception;


class User
{
    protected $user_model;
    protected $address_model;

    public function __construct()
    {
        $this->user_model = new UserModel();
        $this->address_model = new AddressModel();
        $this->token_model = new Token();
        Auth::check_user();
    }

    public function getAddressList($user_id)
    {
        $data = $this->address_model->getUserAddress($user_id);
        return $data;
    }

    public function defaultAddress($user_id)
    {
        $data = $this->address_model->getUserDefaultAddress($user_id);
        return $data;
    }

    public function deleteAddress($user_id, $address_id)
    {
        Auth::check_user_address($user_id, $address_id);
        $data = $this->address_model->deleteUserAddress($address_id);
        return $data;
    }

    public function saveAddress($save_data)
    {
        return $this->address_model->saveAddress($save_data);
    }

    public function check_mobile_register($mobile_phone)
    {
        if ($mobile_phone == '') {
            $this->msg = '请填写手机号';
            return false;
        }
        $di = \PhalApi\DI()->notorm->users;
        $user_data = $di->where('mobile_phone', $mobile_phone)->fetchOne();
        if ($user_data) {
            $this->msg = '手机号已存在';
            return false;
        }
        return true;
    }

    public function appleAccountLogin($openid = '', $code = '', $token = '')
    {
        session_start();
        $openid = $_SESSION['opneid'];
        if (!$openid) {
            $_SESSION['opneid'] = session_id();
            $openid = $_SESSION['opneid'];
        }

        $token = '12345';

        if (empty($openid) || empty($token)) {
            throw new Exception('参数错误');
        }

        // 对参数进行验证
        //$verifyRes = $this->appleJwtVerify($token);

        //if(isset($verifyRes['jwtStatus']) && $verifyRes['jwtStatus'] == 'failed') {
        // 失败
        //throw new Exception('验证失败');
        //}
        // 判断是否注册
        $accRes = $this->user_model->appleOpenidExist($openid);
        if ($accRes) {
            // 登录账号
            $sessid = $this->token_model->set_sess($accRes);
            return array('res' => true, 'user_id' => $accRes['user_id'], 'sess_id' => $sessid, "nickname" => $accRes['user_name']);
        }
        // 进行注册操作
        $status = $this->user_model->appleReg($openid);

        if ($status) {
            $user_data = $this->user_model->appleOpenidExist($openid);
            $sessid = $this->token_model->set_sess($user_data);
            return array('res' => true, 'user_id' => $user_data['user_id'], 'sess_id' => $sessid, "nickname" => $user_data['user_name']);
        }
        throw new Exception('注册失败!');
    }

    private function appleJwtVerify($identityToken = '')
    {
        //获取Apple公钥访问地址：https://appleid.apple.com/auth/keys
        //得到Apple公钥：

        //通过Apple公钥在线(https://8gwifi.org/jwkconvertfunctions.jsp)得到用于解密的pem公钥字符串
        $publickKey = "-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiGaLqP6y+SJCCBq5Hv6p
GDbG/SQ11MNjH7rWHcCFYz4hGwHC4lcSurTlV8u3avoVNM8jXevG1Iu1SY11qInq
UvjJur++hghr1b56OPJu6H1iKulSxGjEIyDP6c5BdE1uwprYyr4IO9th8fOwCPyg
jLFrh44XEGbDIFeImwvBAGOhmMB2AD1n1KviyNsH0bEB7phQtiLk+ILjv1bORSRl
8AK677+1T8isGfHKXGZ/ZGtStDe7Lu0Ihp8zoUt59kx2o9uWpROkzF56ypresiIl
4WprClRCjz8x6cPZXU2qNWhu71TQvUFwvIvbkE1oYaJMb0jcOTmBRZA2QuYw+zHL
wQIDAQAB
-----END PUBLIC KEY-----";//pem公钥 【也可以通过将RSA公钥modulus（N）和exponent（E）转换为PEM文件】
        $decoded = JWT::decode($identityToken, $publickKey, array('RS256'));

        return $decoded;
    }

    public function appcancellation($user_id,$user_name)
    {
        $di = \PhalApi\DI()->notorm->users;
        $user_data = $di->where('user_id', $user_id)->fetchOne();

        $bi = \PhalApi\DI()->notorm->order_info;
        $order_data = $bi->where('user_id', $user_id)->fetchAll();

        foreach ($order_data as $key => $val) {
            if (($val['order_status'] == '2' && $val['shipping_status'] == '0' && $val['pay_status'] == '0') || ($val['order_status'] == '0' && $val['shipping_status'] == '0' && $val['pay_status'] == '0') || ($val['order_status'] == '5' && $val['shipping_status'] == '2' && $val['pay_status'] == '2')) {
                $order_status[] = 0;
            } else {
                $order_status[] = 1;
            }
        }
        if (in_array('1', $order_status)) {
            $mon_status['order_status'] = 1;
            return $mon_status;
        }
        if ($user_data['user_money'] > 0) {
            $mon_status['order_status'] = 2;
            return $mon_status;
        }
        $data['user_id'] = $user_id;
        $data['user_name'] = $user_name;
        $data['status'] = 0;
        $data['add_time'] = time();

        $ci = \PhalApi\DI()->notorm->cancellation;
        $cancellation_data = $ci->where('user_id', $user_id)->fetchOne();

        if (!empty($cancellation_data)) {
            if ($cancellation_data['status'] == '0') {
                $cat['status'] = 1;
                return $cat;
            }
            $rs = $ci->where('user_id', $user_id)->update($data);
        } else {
            $rs = $ci->insert($data);
        }

        \PhalApi\DI()->mailer->send($user_data['email'], '账号注销申请');

        return $rs;
    }

    public function appcancellation_sta($user_id)
    {
        $ci = \PhalApi\DI()->notorm->cancellation;
        $data['user_id'] = $user_id;
        $data['status'] = 2;

        $ci->where('user_id', $user_id)->where('status', '0')->update($data);

        $di = \PhalApi\DI()->notorm->users;
        $user_data = $di->where('user_id', $user_id)->fetchOne();

        $ci_log = \PhalApi\DI()->notorm->cancellation_log;
        $demo['admin_name'] = '';
        $demo['user_name'] = $user_data['user_name'];
        $demo['status'] = 4;
        $demo['add_time'] = time();
        $ci_log->insert($demo);

        return true;
    }
}
