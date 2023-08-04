<?php

/**
 * ECSHOP Bonus type/Bonus management program
 * ============================================================================
 * All right reserved (C) 2005-2023 ShopeX Software Co., Ltd
 * Web site: http://www.ecshop.com
 * ----------------------------------------------------------------------------
 * This is a free/open source software；it means that you can modify, use and
 * republish the program code, on the premise of that your behavior is not for
 * commercial purposes.
 * ============================================================================
 * $Author: liubo $
 * $Id: bonus.php 17217 2011-01-19 06:29:08Z liubo $
*/
/* Bonus type feild information */
$_LANG['bonus_type'] = 'Coupon Type';
$_LANG['bonus_list'] = 'Coupon List';
$_LANG['type_name'] = 'Name';
$_LANG['type_money'] = 'Coupon face value';
$_LANG['min_goods_amount'] = 'Minimum orders amount';
$_LANG['notice_min_goods_amount'] = 'This coupon can only be used for orders with a total goods amount of this number';
$_LANG['min_amount'] = 'Min limit';
$_LANG['max_amount'] = 'Max limit';
$_LANG['send_startdate'] = 'Start date of distribution';
$_LANG['send_enddate'] = 'End date of distribution';

$_LANG['use_startdate'] = 'Start date used';
$_LANG['use_enddate'] = 'End date used';
$_LANG['send_count'] = 'Provide quantity';
$_LANG['use_count'] = 'Use quantity';
$_LANG['send_method'] = 'Coupon Type';
$_LANG['send_type'] = 'Type';
$_LANG['param'] = 'Parameter';
$_LANG['no_use'] = 'No used';
$_LANG['yuan'] = 'yuan';
$_LANG['user_list'] = 'Member list';
$_LANG['type_name_empty'] = 'Coupon type name can\'t be blank!';
$_LANG['type_money_empty'] = 'Coupon face value can\'t be blank!';
$_LANG['min_amount_empty'] = 'Min limit of order of Coupon type can\'t be blank!';
$_LANG['max_amount_empty'] = 'Max limit of order of Coupon type can\'t be blank!';
$_LANG['send_count_empty'] = 'Quantity of Coupon type can\'t be blank!';

$_LANG['send_by'][SEND_BY_USER] = 'By user';
$_LANG['send_by'][SEND_BY_GOODS] = 'By goods';
$_LANG['send_by'][SEND_BY_ORDER] = 'By order amount';
$_LANG['send_by'][SEND_BY_PRINT] = 'Offline distribution';
$_LANG['report_form'] = 'Report';
$_LANG['send'] = 'Send';
$_LANG['bonus_excel_file'] = 'Offline Coupon information list ';

$_LANG['goods_cat'] = 'Category';
$_LANG['goods_brand'] = 'Brand';
$_LANG['goods_key'] = 'Keywords';
$_LANG['all_goods'] = 'Optional product';
$_LANG['send_bouns_goods'] = 'Goods for which this type of coupon is issued';
$_LANG['remove_bouns'] = 'Remove coupon';
$_LANG['all_remove_bouns'] = 'All remove';
$_LANG['goods_already_bouns'] = 'The goods has provided for other coupon type!';
$_LANG['send_user_empty']='You have not selected a member to receive coupon, please return!';
$_LANG['batch_drop_success'] = ' %d coupon has be deleted.';
$_LANG['sendbonus_count'] = 'Total provide %d coupon.';
$_LANG['send_bouns_error'] ='Send out member coupon inaccurate, please try it again!';
$_LANG['no_select_bonus'] = 'You have not selected any coupon to delete.';
$_LANG['bonustype_edit'] = 'Edit coupon type';
$_LANG['bonustype_view'] = 'View details';
$_LANG['drop_bonus'] = 'Delete';
$_LANG['send_bonus'] = 'Provide';
$_LANG['continus_add'] = 'Continue add coupon type.';
$_LANG['back_list'] = 'Return to coupon type list.';
$_LANG['continue_add'] = 'Continue to add coupon.';
$_LANG['back_bonus_list'] = 'Return to coupon list';
$_LANG['validated_email'] = 'Only to authenticated users through the mail issuance of red packets';

/* Prompting message */
$_LANG['attradd_succed'] = 'Operation successfully!';
$_LANG['js_languages']['type_name_empty'] = 'Please enter coupon type name!';
$_LANG['js_languages']['type_money_empty'] = 'Please enter coupon face value!';
$_LANG['js_languages']['order_money_empty'] = 'Please enter order money!';
$_LANG['js_languages']['type_money_isnumber'] = 'Type money must be number format!';
$_LANG['js_languages']['order_money_isnumber'] = 'Order money must be number format!';
$_LANG['js_languages']['bonus_sn_empty'] = 'Please enter coupon NO.!';
$_LANG['js_languages']['bonus_sn_number'] = 'Coupon\'s NO. must be a figure!';
$_LANG['send_count_error'] = 'The provide coupon quantiyt must be an integer!';
$_LANG['js_languages']['bonus_sum_empty'] = 'Please enter coupon quantity you want to provide!';
$_LANG['js_languages']['bonus_sum_number'] = 'Provide coupon quantity must be an integer!';
$_LANG['js_languages']['bonus_type_empty'] = 'Please select coupon face value!';
$_LANG['js_languages']['user_rank_empty'] = 'Please specify a membership level!';
$_LANG['js_languages']['user_name_empty'] = 'Please select a member at least!';
$_LANG['js_languages']['invalid_min_amount'] = 'Please enter a minimum level of orders (the figure is greater than 0)';
$_LANG['js_languages']['send_start_lt_end'] = 'Coupon release date can not be greater than the beginning date of the end';
$_LANG['js_languages']['use_start_lt_end'] = 'Coupon use date can not be greater than the beginning date of the end';

$_LANG['order_money_notic'] = 'As long as the amount of the value of orders will be issued red packets to the user';
$_LANG['type_money_notic'] = 'Amount that can be offset for this type of coupon';
$_LANG['send_startdate_notic'] = 'This type of coupon can only be issued when the current time is between the start date and the end date.';
$_LANG['use_startdate_notic'] = 'This type of coupon can only be used if the current time is between the start date and the end date';
$_LANG['type_name_exist'] = 'The type name already exists.';
$_LANG['type_money_error'] = 'The money must be a figure and can\'t less than 0!';
$_LANG['bonus_sn_notic'] = 'TIP: coupon NO. is composed of 6 bits serial number seed and 4 bits stochastic numbers.';
$_LANG['creat_bonus'] = 'Created';
$_LANG['creat_bonus_num'] = 'Coupon NO.';
$_LANG['bonus_sn_error'] = 'Coupon NO. must be a figure!';
$_LANG['send_user_notice'] = 'Please enter username when you provide coupon for user , many usres were divided by (,) <br /> such as:liry, wjz, zwj';

/* Bonus information field */
$_LANG['bonus_id'] = 'ID';
$_LANG['bonus_type_id'] = 'Coupon face value';
$_LANG['send_bonus_count'] = 'Coupon quantity';
$_LANG['start_bonus_sn'] = 'Start NO.';
$_LANG['bonus_sn'] = 'Coupon NO.';
$_LANG['user_id'] = 'User';
$_LANG['used_time'] = 'Time';
$_LANG['order_id'] = 'Order NO.';
$_LANG['send_mail'] = 'Send mail';
$_LANG['emailed'] = 'Email notice';
$_LANG['mail_status'][BONUS_NOT_MAIL] = 'Not send';
$_LANG['mail_status'][BONUS_MAIL_FAIL] = 'Send mail has failed.';
$_LANG['mail_status'][BONUS_MAIL_SUCCEED] = 'Send mail has successfully.';

$_LANG['sendtouser'] = 'Issue coupons to designated users';
$_LANG['senduserrank'] = 'Issue coupons by membership level';
$_LANG['userrank'] = 'Membership level';
$_LANG['select_rank'] = 'All users...';
$_LANG['keywords'] ='Keywords: ';
$_LANG['userlist'] ='User list: ';
$_LANG['search_users'] ='Search user';
$_LANG['confirm_send_bonus'] ='Submit';
$_LANG['bonus_not_exist'] = 'The coupon is nonexistent.';
$_LANG['success_send_mail'] = 'Send %d mails successfully.';
$_LANG['send_continue'] = 'Continue to send coupon.';
$_LANG['send_to_user'] = 'Disseminate the red envelope to the following users.';
?>