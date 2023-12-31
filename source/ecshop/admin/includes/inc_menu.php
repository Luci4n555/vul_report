<?php

/**
 * ECSHOP 管理中心菜单数组
 * ============================================================================
 * * 版权所有 2005-2023 商派软件有限公司，并保留所有权利。
 * 网站地址: http://www.ecshop.com；
 * ----------------------------------------------------------------------------
 * 这不是一个自由软件！您只能在不用于商业目的的前提下对程序代码进行修改和
 * 使用；不允许对程序代码以任何形式任何目的的再发布。
 * ============================================================================
 * $Author: liubo $
 * $Id: inc_menu.php 17217 2011-01-19 06:29:08Z liubo $
 */

if (!defined('IN_ECS')) {
    die('Hacking attempt');
}

$modules['01_certificate_manage']['certificate'] = 'certificate.php?act=list_edit'; //授权，绑定矩阵
$modules['01_certificate_manage']['service_market'] = 'service_market.php'; //服务市场
$modules['01_certificate_manage']['sms_resource'] = 'sms_resource.php'; //短信平台
//$modules['01_certificate_manage']['logistic_tracking'] = 'logistic_tracking.php'; //云起物流

$modules['02_cat_and_goods']['01_goods_list'] = 'goods.php?act=list'; // 商品列表
$modules['02_cat_and_goods']['02_goods_add'] = 'goods.php?act=add'; // 添加商品
$modules['02_cat_and_goods']['03_category_list'] = 'category.php?act=list';
$modules['02_cat_and_goods']['05_comment_manage'] = 'comment_manage.php?act=list';
$modules['02_cat_and_goods']['06_goods_brand_list'] = 'brand.php?act=list';
$modules['02_cat_and_goods']['08_goods_type'] = 'goods_type.php?act=manage';
$modules['02_cat_and_goods']['11_goods_trash'] = 'goods.php?act=trash'; // 商品回收站
$modules['02_cat_and_goods']['12_batch_pic'] = 'picture_batch.php';
$modules['02_cat_and_goods']['13_batch_add'] = 'goods_batch.php?act=add'; // 商品批量上传
$modules['02_cat_and_goods']['14_goods_export'] = 'goods_export.php?act=goods_export';
$modules['02_cat_and_goods']['15_batch_edit'] = 'goods_batch.php?act=select'; // 商品批量修改
$modules['02_cat_and_goods']['16_goods_script'] = 'gen_goods_script.php?act=setup';
$modules['02_cat_and_goods']['17_tag_manage'] = 'tag_manage.php?act=list';
$modules['02_cat_and_goods']['50_virtual_card_list'] = 'goods.php?act=list&extension_code=virtual_card';
$modules['02_cat_and_goods']['51_virtual_card_add'] = 'goods.php?act=add&extension_code=virtual_card';
$modules['02_cat_and_goods']['52_virtual_card_change'] = 'virtual_card.php?act=change';
$modules['02_cat_and_goods']['goods_auto'] = 'goods_auto.php?act=list';
$modules['02_cat_and_goods']['user_hitCounts'] = 'user_hitCounts.php?act=list';

//$modules['03_promotion']['02_snatch_list']          = 'snatch.php?act=list';
$modules['03_promotion']['04_bonustype_list'] = 'bonus.php?act=list';
$modules['03_promotion']['06_pack_list'] = 'pack.php?act=list';
$modules['03_promotion']['07_card_list'] = 'card.php?act=list';
$modules['03_promotion']['08_group_buy'] = 'group_buy.php?act=list';
$modules['03_promotion']['09_topic'] = 'topic.php?act=list';
$modules['03_promotion']['10_auction'] = 'auction.php?act=list';
$modules['03_promotion']['12_favourable'] = 'favourable.php?act=list';
$modules['03_promotion']['13_wholesale'] = 'wholesale.php?act=list';
$modules['03_promotion']['14_package_list'] = 'package.php?act=list';
//$modules['03_promotion']['ebao_commend']            = 'ebao_commend.php?act=list';
$modules['03_promotion']['15_exchange_goods'] = 'exchange_goods.php?act=list';

$modules['04_order']['02_order_list'] = 'order.php?act=list';
$modules['04_order']['03_order_query'] = 'order.php?act=order_query';
$modules['04_order']['04_merge_order'] = 'order.php?act=merge';
$modules['04_order']['05_edit_order_print'] = 'order.php?act=templates';
$modules['04_order']['06_undispose_booking'] = 'goods_booking.php?act=list_all';
//$modules['04_order']['07_repay_application']        = 'repay.php?act=list_all';
$modules['04_order']['08_add_order'] = 'order.php?act=add';
$modules['04_order']['09_delivery_order'] = 'order.php?act=delivery_list';
$modules['04_order']['10_back_order'] = 'order.php?act=back_list';
//$modules['04_order']['11_return_order'] = 'order.php?act=return_list';
$modules['04_order']['12_time_order'] = 'order_time.php?act=time_list';
$modules['04_order']['13_order_delivery'] = 'delivery_method.php?act=delivery_method';

$modules['05_banner']['ad_position'] = 'ad_position.php?act=list';
$modules['05_banner']['ad_list'] = 'ads.php?act=list';

$modules['06_stats']['flow_stats'] = 'flow_stats.php?act=view';
$modules['06_stats']['searchengine_stats'] = 'searchengine_stats.php?act=view';
$modules['06_stats']['z_clicks_stats'] = 'adsense.php?act=list';
$modules['06_stats']['report_guest'] = 'guest_stats.php?act=list';
$modules['06_stats']['report_order'] = 'order_stats.php?act=list';
$modules['06_stats']['report_sell'] = 'sale_general.php?act=list';
$modules['06_stats']['sale_list'] = 'sale_list.php?act=list';
$modules['06_stats']['sell_stats'] = 'sale_order.php?act=goods_num';
$modules['06_stats']['report_users'] = 'users_order.php?act=order_num';
$modules['06_stats']['visit_buy_per'] = 'visit_sold.php?act=list';

$modules['07_content']['03_article_list'] = 'article.php?act=list';
$modules['07_content']['02_articlecat_list'] = 'articlecat.php?act=list';
$modules['07_content']['vote_list'] = 'vote.php?act=list';
$modules['07_content']['article_auto'] = 'article_auto.php?act=list';
//$modules['07_content']['shop_help']                 = 'shophelp.php?act=list_cat';
//$modules['07_content']['shop_info']                 = 'shopinfo.php?act=list';

$modules['08_members']['03_users_list'] = 'users.php?act=list';
$modules['08_members']['04_users_add'] = 'users.php?act=add';
$modules['08_members']['05_user_rank_list'] = 'user_rank.php?act=list';
//$modules['08_members']['06_list_integrate'] = 'integrate.php?act=list';
$modules['08_members']['08_unreply_msg'] = 'user_msg.php?act=list_all';
$modules['08_members']['09_user_account'] = 'user_account.php?act=list';
$modules['08_members']['11_user_cancellation'] = 'cancellation.php?act=list';// APP账号注销
$modules['08_members']['12_user_cancellation_log'] = 'cancellation_log.php?act=list';// APP账号注销日志
$modules['08_members']['10_user_account_manage'] = 'user_account_manage.php?act=list';

$modules['10_priv_admin']['admin_logs'] = 'admin_logs.php?act=list';
$modules['10_priv_admin']['admin_list'] = 'privilege.php?act=list';
$modules['10_priv_admin']['admin_role'] = 'role.php?act=list';
$modules['10_priv_admin']['agency_list'] = 'agency.php?act=list';
$modules['10_priv_admin']['suppliers_list'] = 'suppliers.php?act=list'; // 供货商

$modules['11_system']['01_shop_config'] = 'shop_config.php?act=list_edit';
// $modules['11_system']['shop_authorized']             = 'license.php?act=list_edit';
$modules['11_system']['02_payment_list'] = 'payment.php?act=list';
$modules['11_system']['03_shipping_list'] = 'shipping.php?act=list';
$modules['11_system']['04_mail_settings'] = 'shop_config.php?act=mail_settings';
$modules['11_system']['05_area_list'] = 'area_manage.php?act=list';
//$modules['11_system']['06_plugins']                 = 'plugins.php?act=list';
$modules['11_system']['07_cron_schcron'] = 'cron.php?act=list';
//$modules['11_system']['08_friendlink_list'] = 'friend_link.php?act=list';
$modules['11_system']['sitemap'] = 'sitemap.php';
$modules['11_system']['check_file_priv'] = 'check_file_priv.php?act=check';
$modules['11_system']['captcha_manage'] = 'captcha_manage.php?act=main';
$modules['11_system']['ucenter_setup'] = 'integrate.php?act=setup&code=ucenter';
//$modules['11_system']['flashplay']                  = 'flashplay.php?act=list';
$modules['11_system']['navigator'] = 'navigator.php?act=list';
$modules['11_system']['file_check'] = 'filecheck.php';
//$modules['11_system']['fckfile_manage']             = 'fckfile_manage.php?act=list';
$modules['11_system']['021_reg_fields'] = 'reg_fields.php?act=list';
$modules['11_system']['logistics'] = 'mobile_setting.php?act=logistics'; //

$modules['12_template']['02_template_select'] = 'template.php?act=list';
$modules['12_template']['03_template_setup'] = 'template.php?act=setup';
$modules['12_template']['04_template_library'] = 'template.php?act=library';
$modules['12_template']['05_edit_languages'] = 'edit_languages.php?act=list';
$modules['12_template']['06_template_backup'] = 'template.php?act=backup_setting';
$modules['12_template']['mail_template_manage'] = 'mail_template.php?act=list';

$modules['13_backup']['02_db_manage'] = 'database.php?act=backup';
$modules['13_backup']['03_db_optimize'] = 'database.php?act=optimize';
//$modules['13_backup']['04_sql_query'] = 'sql.php?act=main';
//$modules['13_backup']['05_synchronous']             = 'integrate.php?act=sync';
//$modules['13_backup']['convert'] = 'convert.php?act=main';
$modules['13_backup']['clear'] = 'database.php?act=clear';

//$modules['14_sms']['02_sms_my_info']                = 'sms.php?act=display_my_info';
$modules['14_sms']['03_sms_send'] = 'sms.php?act=display_send_ui';
$modules['14_sms']['04_sms_sign'] = 'sms.php?act=sms_sign';
//$modules['14_sms']['04_sms_charge']                 = 'sms.php?act=display_charge_ui';
//$modules['14_sms']['05_sms_send_history']           = 'sms.php?act=display_send_history_ui';
$modules['14_sms']['07_sms_send_vcode'] = 'sms.php?act=sms_send_vcode';

//$modules['14_sms']['08_sms_send_vcode'] = 'sms.php?act=sms_set_vcode';
//$modules['14_sms']['06_sms_charge_history']         = 'sms.php?act=display_charge_history_ui';

$modules['15_rec']['affiliate'] = 'affiliate.php?act=list';
$modules['15_rec']['affiliate_ck'] = 'affiliate_ck.php?act=list';
$modules['15_rec']['user_recommend'] = 'user_recommend.php?act=list';
$modules['15_rec']['my_subordinates'] = 'my_subordinates.php?act=list';//关闭移动端我的下级

$modules['16_email_manage']['email_list'] = 'email_list.php?act=list';
$modules['16_email_manage']['magazine_list'] = 'magazine_list.php?act=list';
$modules['16_email_manage']['attention_list'] = 'attention_list.php?act=list';
$modules['16_email_manage']['view_sendlist'] = 'view_sendlist.php?act=list';

$modules['18_lead_manage']['banner_mobile'] = 'mobile_setting.php?act=list'; //移动端banner设置
//$modules['18_lead_manage']['lead']        = 'lead.php?act=list';//H5店铺二维码
//$modules['18_lead_manage']['leancloud']        = 'leancloud.php?act=list';//云推送管理
//$modules['18_lead_manage']['mobile_setting'] = 'ecmobile_setting.php?act=list'; //移动版应用配置
//$modules['18_lead_manage']['h5_setting']        = 'h5_setting.php?act=list';//移动版应用配置
//$modules['18_lead_manage']['wxa_setting']        = 'wxa_setting.php?act=list';//小程序应用配置
$modules['18_lead_manage']['end_time'] = 'mobile_setting.php?act=end_time'; //app截单设置
$modules['18_lead_manage']['prompt_image'] = 'mobile_setting.php?act=prompt_image'; //提示页
$modules['18_lead_manage']['keywords'] = 'mobile_setting.php?act=keywords'; //热门关键词搜索
$modules['18_lead_manage']['logo_setting'] = 'mobile_setting.php?act=logo_setting'; //首页logo设置
$modules['18_lead_manage']['login_image'] = 'mobile_setting.php?act=login_image'; //首页外logo设置
$modules['18_lead_manage']['kefu'] = 'mobile_setting.php?act=kefu'; //客服联系方式
$modules['18_lead_manage']['download'] = 'mobile_setting.php?act=download'; //app下载地址
$modules['18_lead_manage']['privacy_rights'] = 'mobile_setting.php?act=privacy_rights'; //小程序隐私权限
$modules['18_lead_manage']['default_image'] = 'mobile_setting.php?act=default_image'; //客服联系方式

//$modules['18_lead_manage']['mobile_img']        = 'mobile_setting.php?act=img_setting';//app图片设置

$modules['18_lead_manage']['pay_dispose'] = 'mobile_setting.php?act=pay_dispose'; //热门关键词搜索
$modules['18_lead_manage']['app_update'] = 'mobile_setting.php?act=app_update'; //app更新

$modules['18_lead_manage']['copyright_modify'] = 'mobile_setting.php?act=copyright_modify'; //版權設置
//$modules['18_lead_manage']['logistics'] = 'mobile_setting.php?act=logistics'; //

$modules['18_lead_manage']['index_imgae'] = 'mobile_setting.php?act=index_imgae'; //物流配置
$modules['18_lead_manage']['live_settings'] = 'live_settings.php?act=index'; //直播配置
$modules['18_lead_manage']['apple_login'] = 'live_settings.php?act=apple_login'; //苹果登录
