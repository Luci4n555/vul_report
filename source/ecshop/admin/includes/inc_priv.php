<?php

/**
 * ECSHOP 权限对照表
 * ============================================================================
 * * 版权所有 2005-2023 商派软件有限公司，并保留所有权利。
 * 网站地址: http://www.ecshop.com；
 * ----------------------------------------------------------------------------
 * 这不是一个自由软件！您只能在不用于商业目的的前提下对程序代码进行修改和
 * 使用；不允许对程序代码以任何形式任何目的的再发布。
 * ============================================================================
 * $Author: sunxiaodong $
 * $Id: inc_priv.php 15503 2008-12-24 09:22:45Z sunxiaodong $
 */

if (!defined('IN_ECS')) {
    die('Hacking attempt');
}

//商品管理权限
$purview['01_goods_list'] = array('goods_manage', 'remove_back');
$purview['02_goods_add'] = 'goods_manage';
$purview['03_category_list'] = array('cat_manage', 'cat_drop');
$purview['user_hitCounts']='user_hitCounts';
 //分类添加、分类转移和删除
$purview['05_comment_manage'] = 'comment_priv';
$purview['06_goods_brand_list'] = 'brand_manage';
$purview['08_goods_type'] = 'attr_manage'; //商品属性
$purview['11_goods_trash'] = array('goods_manage', 'remove_back');
$purview['12_batch_pic'] = 'picture_batch';
$purview['13_batch_add'] = 'goods_batch';
$purview['14_goods_export'] = 'goods_export';
$purview['15_batch_edit'] = 'goods_batch';
$purview['16_goods_script'] = 'gen_goods_script';
$purview['17_tag_manage'] = 'tag_manage';
$purview['50_virtual_card_list'] = 'virualcard';
$purview['51_virtual_card_add'] = 'virualcard';
$purview['52_virtual_card_change'] = 'virualcard';
$purview['goods_auto'] = 'goods_auto';

//促销管理权限
$purview['02_snatch_list'] = 'snatch_manage';
$purview['04_bonustype_list'] = 'bonus_manage';
$purview['06_pack_list'] = 'pack';
$purview['07_card_list'] = 'card_manage';
$purview['08_group_buy'] = 'group_by';
$purview['09_topic'] = 'topic_manage';
$purview['10_auction'] = 'auction';
$purview['12_favourable'] = 'favourable';
$purview['13_wholesale'] = 'whole_sale';
$purview['14_package_list'] = 'package_manage';
//  $purview['02_snatch_list']       = 'gift_manage';  //赠品管理
$purview['15_exchange_goods'] = 'exchange_goods'; //赠品管理

//文章管理权限
$purview['02_articlecat_list'] = 'article_cat';
$purview['03_article_list'] = 'article_manage';
$purview['article_auto'] = 'article_auto';
$purview['vote_list'] = 'vote_priv';

//会员管理权限
$purview['03_users_list'] = 'users_manage';
$purview['04_users_add'] = 'users_manage';
$purview['05_user_rank_list'] = 'user_rank';
$purview['09_user_account'] = 'surplus_manage';
//$purview['06_list_integrate'] = 'integrate_users';
$purview['08_unreply_msg'] = 'feedback_priv';
$purview['10_user_account_manage'] = 'account_manage';
$purview['11_user_cancellation'] = 'user_cancel';
$purview['12_user_cancellation_log'] = 'user_cancel_log';

//权限管理
$purview['admin_logs'] = array('logs_manage', 'logs_drop');
$purview['admin_list'] = array('admin_manage', 'admin_drop', 'allot_priv');
$purview['agency_list'] = 'agency_manage';
$purview['suppliers_list'] = 'suppliers_manage'; // 供货商
$purview['admin_role'] = 'role_manage';

//商店设置权限
$purview['01_shop_config'] = 'shop_config';
// $purview['shop_authorized']       = 'shop_authorized';
$purview['shp_webcollect'] = 'webcollect_manage';
$purview['02_payment_list'] = 'payment';
$purview['03_shipping_list'] = array('ship_manage', 'shiparea_manage');
$purview['04_mail_settings'] = 'shop_config';
$purview['05_area_list'] = 'area_manage';
$purview['07_cron_schcron'] = 'cron';
$purview['08_friendlink_list'] = 'friendlink';
$purview['sitemap'] = 'sitemap';
$purview['check_file_priv'] = 'file_priv';
$purview['captcha_manage'] = 'shop_config';
$purview['file_check'] = 'file_check';
$purview['navigator'] = 'navigator';
$purview['flashplay'] = 'flash_manage';
$purview['ucenter_setup'] = 'integrate_users';
$purview['021_reg_fields'] = 'reg_fields';

//广告管理
$purview['z_clicks_stats'] = 'ad_manage';
$purview['ad_position'] = 'ad_manage';
$purview['ad_list'] = 'ad_manage';

//订单管理权限
$purview['02_order_list'] = 'order_view';
$purview['03_order_query'] = 'order_view';
$purview['04_merge_order'] = 'order_os_edit';
$purview['05_edit_order_print'] = 'order_os_edit';
$purview['06_undispose_booking'] = 'booking';
$purview['08_add_order'] = 'order_edit';
$purview['09_delivery_order'] = 'delivery_view';
$purview['10_back_order'] = 'back_view';
$purview['12_time_order'] = 'time_list';
$purview['13_order_delivery'] ='delivery_method';

//报表统计权限
$purview['flow_stats'] = 'client_flow_stats';
$purview['report_guest'] = 'client_flow_stats';
$purview['report_users'] = 'client_flow_stats';
$purview['visit_buy_per'] = 'client_flow_stats';
$purview['searchengine_stats'] = 'client_flow_stats';
$purview['report_order'] = 'sale_order_stats';
$purview['report_sell'] = 'sale_order_stats';
$purview['sale_list'] = 'sale_order_stats';
$purview['sell_stats'] = 'sale_order_stats';

//模板管理
$purview['02_template_select'] = 'template_select';
$purview['03_template_setup'] = 'template_setup';
$purview['04_template_library'] = 'library_manage';
$purview['05_edit_languages'] = 'lang_edit';
$purview['06_template_backup'] = 'backup_setting';
$purview['mail_template_manage'] = 'mail_template';

//数据库管理
$purview['02_db_manage'] = array('db_backup', 'db_renew');
$purview['03_db_optimize'] = 'db_optimize';
$purview['04_sql_query'] = 'sql_query';
$purview['convert'] = 'convert';
$purview['clear'] = 'clear';

//短信管理
$purview['14_sms'] = 'sms_manage';
$purview['02_sms_my_info'] = 'my_info';
$purview['03_sms_send'] = 'sms_send';
$purview['04_sms_charge'] = 'sms_charge';
$purview['05_sms_send_history'] = 'send_history';
$purview['06_sms_charge_history'] = 'charge_history';
$purview['04_sms_sign'] = 'sms_sign';
$purview['07_sms_send_vcode'] = 'sms_send_vcode';
$purview['08_sms_send_vcode'] ='sms_set_vcode';

//推荐管理
$purview['affiliate'] = 'affiliate';
$purview['affiliate_ck'] = 'affiliate_ck';
$purview['user_recommend'] ='user_recommend';
$purview['my_subordinates'] ='my_subordinates';

//邮件群发管理
$purview['attention_list'] = 'attention_list';
$purview['email_list'] = 'email_list';
$purview['magazine_list'] = 'magazine_list';
$purview['view_sendlist'] = 'view_sendlist';

// 云服务中心
$purview['01_certificate_manage'] = 'certificate_manage';
$purview['certificate'] = 'certificate';
$purview['service_market'] = 'service_market';
$purview['sms_resource'] = 'sms_resource';
$purview['logistic_tracking'] = 'logistic_tracking';

// 移动端管理
$purview['18_lead_manage'] = 'lead_manage';
$purview['banner_mobile'] = 'banner_mobile';
$purview['lead'] = 'lead';
$purview['mobile_setting'] = 'mobile_setting';
$purview['h5_setting'] = 'h5_setting';
$purview['wxa_setting'] = 'wxa_setting';
$purview['leancloud'] = 'leancloud';
$purview['keywords'] = 'keywords';
$purview['app_update'] = 'app_update'; //app更新权限
$purview['copyright_modify'] = 'copyright_modify'; //版本设置权限
$purview['download'] = 'download'; //App下载地址设置权限
$purview['privacy_rights'] = 'privacy_rights'; //小程序隐私权限设置
$purview['default_image'] = 'default_image'; //默认图片设置 权限
$purview['index_imgae'] = 'index_imgae'; //首页设置权限
$purview['logistics'] = 'logistics'; //物流配置设置权限
$purview['kefu'] = 'kefu';
$purview['login_image'] = 'login_image'; //其他页logo设置权限
$purview['logo_setting'] = 'logo_setting'; //首页logo设置权限
$purview['pay_dispose'] = 'pay_dispose'; //支付配置设置权限
$purview['end_time'] = 'end_time';//APP截单设置
$purview['prompt_image'] = 'prompt_image';// App提示页设置权限
$purview['live_settings'] = 'live_settings';// 直播设置
$purview['apple_login'] = 'apple_login';// 苹果登录

