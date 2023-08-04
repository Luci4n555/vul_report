<?php

/**
 * ECSHOP 支付宝插件
 * ============================================================================
 * * 版权所有 2005-2023 商派软件有限公司，并保留所有权利。
 * 网站地址: http://www.ecshop.com；
 * ----------------------------------------------------------------------------
 * 这不是一个自由软件！您只能在不用于商业目的的前提下对程序代码进行修改和
 * 使用；不允许对程序代码以任何形式任何目的的再发布。
 * ============================================================================
 * $Author: douqinghua $
 * $Id: alipay.php 17217 2011-01-19 06:29:08Z douqinghua $
 */
require(ROOT_PATH . 'includes/safety.php');
if (!defined('IN_ECS')) {
    die('Hacking attempt');
}
$payment_lang = ROOT_PATH . 'languages/' . $GLOBALS['_CFG']['lang'] . '/payment/alipay.php';

if (file_exists($payment_lang)) {
    global $_LANG;

    include_once($payment_lang);
}

/* 模块的基本信息 */
if (isset($set_modules) && $set_modules == TRUE) {
    $i = isset($modules) ? count($modules) : 0;

    /* 代码 */
    $modules[$i]['code'] = basename(__FILE__, '.php');

    /* 描述对应的语言项 */
    $modules[$i]['desc'] = 'alipay_desc';

    /* 是否支持货到付款 */
    $modules[$i]['is_cod'] = '0';

    /* 是否支持在线支付 */
    $modules[$i]['is_online'] = '1';

    /* 作者 */
    $modules[$i]['author'] = 'ECSHOP TEAM';

    /* 网址 */
    $modules[$i]['website'] = 'http://www.alipay.com';

    /* 版本号 */
    $modules[$i]['version'] = '1.0.2';

    /* 配置信息 */
    $modules[$i]['config'] = array(
        array('name' => 'alipay_account', 'type' => 'text', 'value' => ''),
        array('name' => 'alipay_key', 'type' => 'text', 'value' => ''),
        array('name' => 'alipay_partner', 'type' => 'text', 'value' => ''),
        array('name' => 'alipay_pay_method', 'type' => 'select', 'value' => '')
    );

    return;
}

/**
 * 类
 */
class alipay
{
    function __construct()
    {
        $this->alipay();
    }

    /**
     * 构造函数
     *
     * @access  public
     * @param
     *
     * @return void
     */
    function alipay()
    {
    }

    /**
     * 生成支付代码
     * @param array $order 订单信息
     * @param array $payment 支付方式信息
     */
    function get_code($order, $payment)
    {
//        if (!defined('EC_CHARSET'))
//        {
//            $charset = 'utf-8';
//        }
//        else
//        {
//            $charset = EC_CHARSET;
//        }
//
//        $real_method = $payment['alipay_pay_method'];
//
//        switch ($real_method){
//            /*        case '0':
//                        $service = 'trade_create_by_buyer';
//                        break;
//                    case '1':
//                        $service = 'create_partner_trade_by_buyer';
//                        break;
//                        */
//            case '2':
//                $service = 'create_direct_pay_by_user';
//                break;
//        }
//
//        $extend_param = 'isv^sh22';
//
//        $parameter = array(
//            'extend_param'      => $extend_param,
//            'service'           => $service,
//            'partner'           => $payment['alipay_partner'],
//            //'partner'           => ALIPAY_ID,
//            '_input_charset'    => $charset,
//            'notify_url'        => return_url(basename(__FILE__, '.php')),
//            'return_url'        => return_url(basename(__FILE__, '.php')),
//            /* 业务参数 */
//            'subject'           => $order['order_sn'],
//            'out_trade_no'      => $order['order_sn'] . $order['log_id'],
//            'price'             => $order['order_amount'],
//            'quantity'          => 1,
//            'payment_type'      => 1,
//            /* 物流参数 */
//            'logistics_type'    => 'EXPRESS',
//            'logistics_fee'     => 0,
//            'logistics_payment' => 'BUYER_PAY_AFTER_RECEIVE',
//            /* 买卖双方信息 */
//            'seller_email'      => $payment['alipay_account']
//        );
//
//        ksort($parameter);
//        reset($parameter);
//
//        $param = '';
//        $sign  = '';
//
//        foreach ($parameter AS $key => $val)
//        {
//            $param .= "$key=" .urlencode($val). "&";
//            $sign  .= "$key=$val&";
//        }
//
//        $param = substr($param, 0, -1);
//        $sign = substr($sign, 0, -1) . $payment['alipay_key'];
//        //$sign  = substr($sign, 0, -1). ALIPAY_AUTH;

        $zselect = "SELECT * FROM " . $GLOBALS['ecs']->table('payment') .
            " WHERE pay_code = 'alipay'";
        $zquery = $GLOBALS['db']->getRow($zselect);
        $zresult = unserialize($zquery['pay_config']);
        require(ROOT_PATH . 'includes/modules/payment/aop/AopClient.php');
        require(ROOT_PATH . 'includes/modules/payment/aop/request/AlipayTradePagePayRequest.php');
        $aop = new AopClient ();
        $aop->gatewayUrl = 'https://openapi.alipay.com/gateway.do';
        $aop->appId = $zresult[0]['value'];
        $aop->rsaPrivateKey = $zresult[1]['value'];
        $aop->alipayrsaPublicKey = $zresult[2]['value'];
        $aop->apiVersion = '1.0';
        $aop->signType = 'RSA2';
        $aop->postCharset = 'UTF-8';
        $aop->format = 'json';
        $object = new stdClass();
        $object->out_trade_no = $order['order_sn'] . $order['log_id'];
        $object->total_amount = $order['order_amount'];
        $object->subject = $order['order_sn'];
        $object->product_code = 'FAST_INSTANT_TRADE_PAY';
        $json = json_encode($object);
        $request = new AlipayTradePagePayRequest();
        $request->setNotifyUrl(return_url(basename(__FILE__, '.php')));
        $request->setReturnUrl(return_url(basename(__FILE__, '.php')));
        $request->setBizContent($json);
        $result = $aop->pageExecute($request);
        $responseNode = str_replace(".", "_", $request->getApiMethodName()) . "_response";
        $resultCode = $result->$responseNode->code;

        return $result;

//        if (!empty($resultCode) && $resultCode == 10000) {
//            echo "成功";
//        } else {
//            echo "失败";
//        }
//
//        $pay_str = <<<html
//<form name="submit_form" method="post" action="https://openapi.alipay.com/gateway.do?charset=UTF-8&method=alipay.trade.page.pay&sign=RwuXDskhr/XE4d+utVPFPqRRzAqDesM/AF3dtmCyXz+xgTUV0SYYmhiaezkoi9cM0qiwbPtGmjkKT1t85ih0DyCuK+QGrh+Edy60mhgfoQO6OPvpStz1zu5aCQzXGy2RIz332qSoi99yul/zWAnYaRLoMQ/j14S1qe/rsmZ/a6IhWfqP+M2Y25mQmW0ZQQKtIZ5xrnVk0kTDYERRPEF6n/E1X2sSqdc18qJI3kbkkBWxB7kZomfilfQlQfjZmisqZuFRu2SY89Dy+T8TQ14MWta3s8OYglPMP7frBoVdi2UcJgGdWBdgYg83OK/UGK1FPbxG90oYcG6pelSK2rYPMw==&notify_url=http%3A%2F%2F114.55.81.185%2Fopendevtools%2Fnotify%2Fdo%2Fbf70dcb4-13c9-4458-a547-3a5a1e8ead04&version=1.0&app_id=2014100900013222&sign_type=RSA2&timestamp=2021-02-02+14%3A11%3A40&alipay_sdk=alipay-sdk-java-dynamicVersionNo&format=json">
//<input type="submit" value="提交" style="display:none" >
//</form>
//<script>document.forms[0].submit();</script>
//html;
//
//        $button = '<div style="text-align:center"><input type="button" onclick="window.open(\'https://openapi.alipay.com/gateway.do?charset=UTF-8&method=alipay.trade.page.pay&sign=RwuXDskhr%2FXE4d%2ButVPFPqRRzAqDesM%2FAF3dtmCyXz%2BxgTUV0SYYmhiaezkoi9cM0qiwbPtGmjkKT1t85ih0DyCuK%2BQGrh%2BEdy60mhgfoQO6OPvpStz1zu5aCQzXGy2RIz332qSoi99yul%2FzWAnYaRLoMQ%2Fj14S1qe%2FrsmZ%2Fa6IhWfqP%2BM2Y25mQmW0ZQQKtIZ5xrnVk0kTDYERRPEF6n%2FE1X2sSqdc18qJI3kbkkBWxB7kZomfilfQlQfjZmisqZuFRu2SY89Dy%2BT8TQ14MWta3s8OYglPMP7frBoVdi2UcJgGdWBdgYg83OK%2FUGK1FPbxG90oYcG6pelSK2rYPMw%3D%3&notify_url=http://ecshop.me/respond.php?code=alipay&version=1.0&app_id=2014100900013222&sign_type=RSA&timestamp=2021-02-02+14%3A11%3A40&alipay_sdk=alipay-sdk-java-dynamicVersionNo&format=json\')" value="' .$GLOBALS['_LANG']['pay_button']. '" /></div>';
//        //$button = '<div style="text-align:center"><input type="button" onclick="window.open(\'https://mapi.alipay.com/gateway.do?'.$param. '&sign='.md5($sign).'&sign_type=MD5\')" value="' .$GLOBALS['_LANG']['pay_button']. '" /></div>';
//
//        return $pay_str;
    }

    /**
     * 响应操作
     */
    function respond()
    {
        file_put_contents('wechatPay1.log', $_POST, FILE_APPEND); // 记录转换为数组的数据  便于查看相应的参数
        if (!empty($_POST)) {
            foreach ($_POST as $key => $data) {
                $_GET[$key] = $data;
            }
        }
        $payment = get_payment($_GET['code']);
        $seller_email = rawurldecode($_GET['seller_email']);
        $order_sn = str_replace($_GET['subject'], '', $_GET['out_trade_no']);
        $order_sn = trim(addslashes($order_sn));

        /* 检查数字签名是否正确 */
//        ksort($_GET);
//        reset($_GET);

//        $sign = '';
//        foreach ($_GET AS $key=>$val)
//        {
//            if ($key != 'sign' && $key != 'sign_type' && $key != 'code')
//            {
//                $sign .= "$key=$val&";
//            }
//        }

//        $sign = substr($sign, 0, -1) . $payment['alipay_key'];
//        //$sign = substr($sign, 0, -1) . ALIPAY_AUTH;
//        if (md5($sign) != $_GET['sign'])
//        {
//            file_put_contents('wechatPay.log', 111, FILE_APPEND); // 记录转换为数组的数据  便于查看相应的参数
//            return false;
//        }

        if (empty($_GET)) {//判断POST来的数组是否为空
            return false;
        } else {
            //生成签名结果
            $zselect = "SELECT * FROM " . $GLOBALS['ecs']->table('payment') .
                " WHERE pay_code = 'alipay'";
            $zquery = $GLOBALS['db']->getRow($zselect);
            $zresult = unserialize($zquery['pay_config']);
            require(ROOT_PATH . '/includes/modules/payment/pagepay/service/AlipayTradeService.php');
            $config = array(
                //应用ID,您的APPID。
                'app_id' => $zresult[0]['value'],
                //商户私钥
                'merchant_private_key' => $zresult[1]['value'],
                //编码格式
                'charset' => "UTF-8",

                //签名方式
                'sign_type' => "RSA2",

                //支付宝网关
                'gatewayUrl' => "https://openapi.alipay.com/gateway.do",

                'alipay_public_key' => $zresult[2]['value'],

            );
            $arr = $_GET;
            unset($arr['code']);
            $alipaySevice = new AlipayTradeService($config);

            $result = $alipaySevice->check($arr);

            if (!$result) {
                return false;
            }
        }

        /* 检查支付的金额是否相符 -支付宝接口更新后，此功能不再兼容*/
//        if (!check_money($order_sn, $_GET['total_fee'])) {
//            return false;
//        }
            if ($_GET['trade_status'] == 'WAIT_SELLER_SEND_GOODS') {
                /* 改变订单状态 */
                order_paid($order_sn, 2);

                return true;
            } elseif ($_GET['trade_status'] == 'TRADE_FINISHED') {
                /* 改变订单状态 */
                order_paid($order_sn);

                return true;
            } elseif ($_GET['trade_status'] == 'TRADE_SUCCESS') {
                /* 改变订单状态 */
                order_paid($order_sn, 2);
                return true;
            } else {
                return true;
            }
        }
}
