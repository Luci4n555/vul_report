<?php
/**
 * 请在下面放置任何您需要的应用配置
 *
 * @license     http://www.phalapi.net/license GPL 协议
 * @link        http://www.phalapi.net/
 * @author dogstar <chanzonghuang@gmail.com> 2017-07-13
 */

return array(

    /**
     * 应用接口层的统一参数
     */
    'apiCommonRules' => array(
//        'app_key' => array('name' => 'app_key', 'require' => true, 'default' => 'wolf100000001', 'desc' => 'key'),
        //        'format' => array('name' => 'format', 'require' => true, 'default' => 'JSON', 'desc' => 'JSON'),
        //        'api_version' => array('name' => 'api_version', 'require' => true, 'default' => '2.0', 'desc' => '版本'),
        //        'timestamp' => array('name' => 'timestamp', 'require' => true, 'desc' => '时间'),
        //        'req_source' => array('name' => 'req_source', 'require' => true, 'default' => 'app', 'desc' => '类型'),
        //        'sign' => array('name' => 'sign', 'require' => true, 'desc' => '加密sign'),
    ),

    /**
     * 接口服务白名单，格式：接口服务类名.接口服务方法名
     *
     * 示例：
     * - *.*         通配，全部接口服务，慎用！
     * - Site.*      Api_Default接口类的全部方法
     * - *.Index     全部接口类的Index方法
     * - Site.Index  指定某个接口服务，即Api_Default::Index()
     */
    'service_whitelist' => array(
        'Site.Index',
    ),

    'host_url' => 'https://ecshop.test2.shopex123.com/',//网站的域名，请修改为自己实际域名
    'host_url_res' => 'https://ecshop.test2.shopex123.com/',//网站的域名，请修改为自己实际域名

    'default_category_img' => 'https://imgt1.oss-cn-shanghai.aliyuncs.com/tools/default_category.png',
    'default_category_banner' => 'https://imgt1.oss-cn-shanghai.aliyuncs.com/tools/default_category_banner.jpg',
    'default_article_img' => 'https://imgt1.oss-cn-shanghai.aliyuncs.com/tools/default_category_banner.jpg',
    'default_category_goodsImage' => 'https://imgt1.oss-cn-shanghai.aliyuncs.com/tools/default_category_banner.jpg',//默认商品图片

    'PHPMailer' => array(
        'email' => array(
            'host' => '',//发送邮件服务器地址(SMTP)，例如smtp.qq.com
            'port' => 465,//服务器端口，与安全协议有关，如果协议是ssl，则端口必须是465
            'Secure' => 'ssl',//安全协议,ssl或tls
            'username' => '',//发送邮件帐号
            'password' => '',//邮件的账号密码，或者第三方授权码
            'from' => '',//网站的域名，必须与上方保持一致
            'fromName' => '',//发送邮件帐号
            'sign' => '
            <br/><br/>尊敬的 ecshop用户：
            <br/><br/>您好！
            <br/><br/>您的账号已经申请注销申请，账号已经进入冷冻期，将在15天后删除，如有疑问请联系网站客服人员。
            <br/><br/>本邮件由系统自动发出，请勿回复，谢谢。',//APP账号注销时的发送内容
        ),
    ),
);
