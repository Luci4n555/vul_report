<?php

/**
 * ECSHOP 删除购物车商品
 * ============================================================================
 * * 版权所有 2005-2023 商派软件有限公司，并保留所有权利。
 * 网站地址: http://www.ecshop.com；
 * ----------------------------------------------------------------------------
 * 这不是一个自由软件！您只能在不用于商业目的的前提下对程序代码进行修改和
 * 使用；不允许对程序代码以任何形式任何目的的再发布。
 * ============================================================================
 * $Author: liubo $
 * $Id: cycle_image.php 17217 2011-01-19 06:29:08Z liubo $
*/

define('IN_ECS', true);

require(dirname(__FILE__) . '/includes/init.php');
require(ROOT_PATH . 'includes/cls_json.php');

$result = array('error' => 0, 'message' => '', 'content' => '', 'goods_id' => '');

$json  = new JSON;

if(intval($_POST['id']))

{

$sql = 'DELETE FROM '.$GLOBALS['ecs']->table('cart')." WHERE rec_id=".intval($_POST['id']);

$GLOBALS['db']->query($sql);

}

$sql = 'SELECT c.*,g.goods_name,g.goods_thumb,g.goods_id,c.goods_number,c.goods_price' .

                         ' FROM ' . $GLOBALS['ecs']->table('cart') ." AS c ".

                         " LEFT JOIN ".$GLOBALS['ecs']->table('goods')." AS g ON g.goods_id=c.goods_id ".

                         " WHERE session_id = '" . SESS_ID . "' AND rec_type = '" . CART_GENERAL_GOODS . "' OR rec_type = '" . CART_REPURCHASE . "'";

$row = $GLOBALS['db']->GetAll($sql);

$arr = array();

foreach($row AS $k=>$v)

{

                $arr[$k]['goods_thumb']  =get_image_path($v['goods_id'], $v['goods_thumb'], true);

                $arr[$k]['short_name']   = $GLOBALS['_CFG']['goods_name_length'] > 0 ?

                sub_str($v['goods_name'], $GLOBALS['_CFG']['goods_name_length']) : $v['goods_name'];

                $arr[$k]['url']          = build_uri('goods', array('gid' => $v['goods_id']), $v['goods_name']);

                $arr[$k]['goods_number'] = $v['goods_number'];

                $arr[$k]['goods_name']   = $v['goods_name'];

                $arr[$k]['goods_price']  = price_format($v['goods_price']);

                $arr[$k]['rec_id']       = $v['rec_id'];

}

$sql = 'SELECT SUM(goods_number) AS number, SUM(goods_price * goods_number) AS amount' .

                         ' FROM ' . $GLOBALS['ecs']->table('cart') .

                         " WHERE session_id = '" . SESS_ID . "' AND rec_type = '" . CART_GENERAL_GOODS . "' OR rec_type = '" . CART_REPURCHASE . "'";

$row = $GLOBALS['db']->GetRow($sql);



if ($row)

{

                $number = intval($row['number']);

                $amount = floatval($row['amount']);

}

else

{

                $number = 0;

                $amount = 0;

}

$smarty->assign('str',sprintf($GLOBALS['_LANG']['cart_info'], $number, price_format($amount, false)));
$smarty->assign('goods',$arr);
$smarty->assign('goods_number',$number);
$smarty->assign('order_amount',$amount);
$result['content']= $GLOBALS['smarty']->fetch('library/cart.lbi');
echo $json->encode($result);
