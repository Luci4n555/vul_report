<?php

/**
 * ECSHOP APP账号注销申请
 * ============================================================================
 * * 版权所有 2005-2023 商派软件有限公司，并保留所有权利。
 * 网站地址: http://www.ecshop.com；
 * ----------------------------------------------------------------------------
 * 这不是一个自由软件！您只能在不用于商业目的的前提下对程序代码进行修改和
 * 使用；不允许对程序代码以任何形式任何目的的再发布。
 * ============================================================================
 * $Author: dang $
 * $Id: user_account.php 17217 2022-03-21 06:29:08Z dang $
 */

define('IN_ECS', true);

require(dirname(__FILE__) . '/includes/init.php');

/* act操作项的初始化 */
if (empty($_REQUEST['act'])) {
    $_REQUEST['act'] = 'list';
} else {
    $_REQUEST['act'] = trim($_REQUEST['act']);
}

/*------------------------------------------------------ */
//-- 会员余额记录列表
/*------------------------------------------------------ */
if ($_REQUEST['act'] == 'list') {
    /* 权限判断 */
//    admin_priv('surplus_manage');

    /* 指定会员的ID为查询条件 */
    $user_id = !empty($_REQUEST['id']) ? intval($_REQUEST['id']) : 0;

    /* 获得支付方式列表 */
    $payment = array();
    $sql = "SELECT pay_id, pay_name FROM " . $ecs->table('payment') .
        " WHERE enabled = 1 AND pay_code != 'cod' ORDER BY pay_id";
    $res = $db->query($sql);

    while ($row = $db->fetchRow($res)) {
        $payment[$row['pay_name']] = $row['pay_name'];
    }

    /* 模板赋值 */
    if (isset($_REQUEST['process_type'])) {
        $smarty->assign('process_type_' . intval($_REQUEST['process_type']), 'selected="selected"');
    }
    if (isset($_REQUEST['is_paid'])) {
        $smarty->assign('is_paid_' . intval($_REQUEST['is_paid']), 'selected="selected"');
    }
    $smarty->assign('ur_here', $_LANG['11_user_cancellation']);
    $smarty->assign('id', $user_id);
    $smarty->assign('payment_list', $payment);
//    $smarty->assign('action_link', array('text' => $_LANG['surplus_add'], 'href' => 'user_account.php?act=add'));

    $list = account_list();

    foreach ($list['list'] as $key => $value) {
        $list['list'][$key]['x_user_name'] = substr_cut($list['list'][$key]['user_name']);
        $list['list'][$key]['add_time'] = date('Y-m-d H:i:s', $list['list'][$key]['add_time']);
    }

    $smarty->assign('list', $list['list']);
    $smarty->assign('filter', $list['filter']);
    $smarty->assign('record_count', $list['record_count']);
    $smarty->assign('page_count', $list['page_count']);
    $smarty->assign('full_page', 1);

    assign_query_info();
    $smarty->display('user_cancellation.htm');
}
/*------------------------------------------------------ */
//-- 通过
/*------------------------------------------------------ */
elseif ($_REQUEST['act'] == 'adopt') {
    $id = @intval($_REQUEST['id']);
    $sql = 'SELECT user_id FROM ' . $GLOBALS['ecs']->table('cancellation') . "WHERE id = '$id'";
    $user_id = $GLOBALS['db']->getOne($sql);

    $sql = "UPDATE " . $GLOBALS['ecs']->table('cancellation') . " SET " . "status  = '1' WHERE id = '$id'";
    $GLOBALS['db']->query($sql);

//    $sql = "DELETE FROM " . $ecs->table('users') . " WHERE user_id = '$user_id'";
//    $db->getOne($sql);

    $round = "账号注销" . randomkeys(8);
    $sql = "UPDATE " . $GLOBALS['ecs']->table('users') . " SET user_name = '$round' WHERE user_id = '$user_id'";
    $GLOBALS['db']->query($sql);


    $sql = "DELETE FROM " . $GLOBALS['ecs']->table('comment') . " WHERE user_id = '$user_id'";
    $GLOBALS['db']->query($sql);


    $admin_name = $_SESSION['admin_name'];
    $sql = 'SELECT user_name FROM ' . $GLOBALS['ecs']->table('cancellation') . "WHERE id = '$id'";
    $user_name = $GLOBALS['db']->getOne($sql);
    $time = time();
    $sql = "INSERT INTO " . $GLOBALS['ecs']->table('cancellation_log') . " SET admin_name = '$admin_name', user_name = '$user_name', status = '1', add_time = '$time'";
    $GLOBALS['db']->query($sql);

    $url = 'cancellation.php?act=list';
    ecs_header("Location: $url\n");
}
/*------------------------------------------------------ */
//-- 撤回
/*------------------------------------------------------ */
elseif ($_REQUEST['act'] == 'revoke') {
    $id = @intval($_REQUEST['id']);
    $sql = "UPDATE " . $GLOBALS['ecs']->table('cancellation') . " SET " . "status  = '2' WHERE id = '$id'";
    $GLOBALS['db']->query($sql);

    $admin_name = $_SESSION['admin_name'];
    $sql = 'SELECT user_name FROM ' . $GLOBALS['ecs']->table('cancellation') . "WHERE id = '$id'";
    $user_name = $db->getOne($sql);
    $time = time();

    $sql = "INSERT INTO " . $ecs->table('cancellation_log') . " SET admin_name = '$admin_name', user_name = '$user_name', status = '2', add_time = '$time'";
    $db->query($sql);

    $url = 'cancellation.php?act=list';
    ecs_header("Location: $url\n");
}
/*------------------------------------------------------ */
//-- ajax帐户信息列表
/*------------------------------------------------------ */
elseif ($_REQUEST['act'] == 'query') {
    $list = account_list();

    foreach ($list['list'] as $key => $value) {
        $list['list'][$key]['x_user_name'] = substr_cut($list['list'][$key]['user_name']);
        $list['list'][$key]['add_time'] = date('Y-m-d H:i:s', $list['list'][$key]['add_time']);
    }

    $smarty->assign('list', $list['list']);
    $smarty->assign('filter', $list['filter']);
    $smarty->assign('record_count', $list['record_count']);
    $smarty->assign('page_count', $list['page_count']);

    $sort_flag = sort_flag($list['filter']);
    $smarty->assign($sort_flag['tag'], $sort_flag['img']);

    make_json_result($smarty->fetch('user_cancellation.htm'), '', array('filter' => $list['filter'], 'page_count' => $list['page_count']));
}
/*------------------------------------------------------ */
//-- ajax删除一条信息
/*------------------------------------------------------ */
elseif ($_REQUEST['act'] == 'remove') {
    /* 检查权限 */
    check_authz_json('surplus_manage');
    $id = @intval($_REQUEST['id']);
    $admin_name = $_SESSION['admin_name'];
    $sql = 'SELECT user_name FROM ' . $GLOBALS['ecs']->table('cancellation') . "WHERE id = '$id'";
    $user_name = $db->getOne($sql);
    $time = time();
    $sql = "INSERT INTO " . $ecs->table('cancellation_log') . " SET admin_name = '$admin_name', user_name = '$user_name', status = '3', add_time = '$time'";
    $db->query($sql);
    $sql = "DELETE FROM " . $ecs->table('cancellation') . " WHERE id = '$id'";
    if ($db->query($sql, 'SILENT')) {
        $url = 'cancellation.php?act=query&' . str_replace('act=remove', '', $_SERVER['QUERY_STRING']);
        ecs_header("Location: $url\n");
        exit;
    } else {
        make_json_error($db->error());
    }
}

/**
 *
 *
 * @access  public
 * @param
 *
 * @return void
 */
function account_list()
{
    $result = get_filter();
    if ($result === false) {
        /* 过滤列表 */
        $filter['user_id'] = !empty($_REQUEST['user_id']) ? intval($_REQUEST['user_id']) : 0;
        $filter['keywords'] = empty($_REQUEST['keywords']) ? '' : trim($_REQUEST['keywords']);
        if (isset($_REQUEST['is_ajax']) && $_REQUEST['is_ajax'] == 1) {
            $filter['keywords'] = json_str_iconv($filter['keywords']);
        }

        $where = " WHERE 1 ";

        if ($filter['keywords']) {
            $where .= " AND user_name LIKE '%" . mysql_like_quote($filter['keywords']) . "%'";
        }

        $sql = "SELECT COUNT(*) FROM " . $GLOBALS['ecs']->table('cancellation') . " AS ua" . $where;

        $filter['record_count'] = $GLOBALS['db']->getOne($sql);

        /* 分页大小 */
        $filter = page_and_size($filter);

        /* 查询数据 */
        $sql = 'SELECT * FROM ' .
            $GLOBALS['ecs']->table('cancellation') .
            $where . "ORDER BY id DESC" . " LIMIT " . $filter['start'] . ", " . $filter['page_size'];

        $filter['keywords'] = stripslashes($filter['keywords']);
        set_filter($filter, $sql);
    } else {
        $sql = $result['sql'];
        $filter = $result['filter'];
    }

    $list = $GLOBALS['db']->getAll($sql);
    foreach ($list as $key => $value) {
        $list[$key]['surplus_amount'] = price_format(abs($value['amount']), false);
        $list[$key]['add_date'] = local_date($GLOBALS['_CFG']['time_format'], $value['add_time']);
        $list[$key]['process_type_name'] = $GLOBALS['_LANG']['surplus_type_' . $value['process_type']];
    }
    $arr = array('list' => $list, 'filter' => $filter, 'page_count' => $filter['page_count'], 'record_count' => $filter['record_count']);

    return $arr;
}

function substr_cut($user_name)
{
    $strlen = mb_strlen($user_name, 'utf-8');
    $firstStr = mb_substr($user_name, 0, 1, 'utf-8');

    if ($strlen < 2) {
        return $user_name;
    } else {
        return $strlen == 2 ? $firstStr . str_repeat('*', mb_strlen($user_name, 'utf-8') - 1) : $firstStr . str_repeat("*", $strlen - 2) . "*";
    }
}

function randomkeys($length)
{
    $pattern = '1234567890abcdefghijklmnopqrstuvwxyz 
    ABCDEFGHIJKLOMNOPQRSTUVWXYZ';
    for ($i = 0; $i < $length; $i++) {
        $key .= $pattern{mt_rand(0, 35)}; //生成php随机数
    }
    return $key;
}


?>
