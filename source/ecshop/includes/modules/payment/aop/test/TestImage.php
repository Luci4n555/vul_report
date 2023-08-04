<?php
/**
 * Alipay.com Inc.
 * Copyright (c) 2004-2014 All Rights Reserved.
 */



include('../AlipayMobilePublicMultiMediaClient.php');


header("Content-type: text/html; charset=gbk");

/**
 *
 * @author wangYuanWai
 * @version $Id: Test.hp, v 0.1 Aug 6, 2014 4:20:17 PM yikai.hu Exp $
 */
class TestImage{
//window.open('https://mapi.alipay.com/gateway.do?_input_charset=utf-8&extend_param=isv%5Esh22&logistics_fee=
//0&logistics_payment=BUYER_PAY_AFTER_RECEIVE&logistics_type
//=EXPRESS&notify_url=http%3A%2F%2Fecshop.me%2Frespond.php%3Fcode%3Dalipay&out_trade_no=20220606462711053&partner
//=2088121518249663&payment_type=1&price=345.00&quantity=1&return_url=http%3A%2F%2Fecshop.me%2Frespond.php%
//3Fcode%3Dalipay&seller_email=shopextest%40shopex.cn&service=create_direct_pay_by_user&subject=20220606
//46271&sign=5de069cebd18de8fa955cadc97af1e80&sign_type=MD5')

	public $partner_public_key  = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwmn2dS3yaZEUH7FgquIcxsCQAdFS0tmycAms7sqcyGyOZcKZs5rZs7CCxzCcu4qhuaxgQTMWr76IbwtAKiIaLZ1CLu5cQydil8s";
	public $alipay_public_key   = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIgHnOn7LLILlKETd6BFRJ0GqgS2Y3mn1wMQmyh9zEyWlz5p1zrahRahbXAfCfSqshSNfqOmAQzSHRVjCqjsAw1jyqrXaPdKBmr90DIpIxmIyKXv4GGAkPyJ/6FTFY99uhpiq0qadD/uSzQsefWo0aTvP/65zi3eof7TcZ32oWpwIDAQAB";
		//公用变量
	public $serverUrl = 'http://publicexprod.d5336aqcn.alipay.net/chat/multimedia.do';//'http://publicexprod.d5336aqcn.alipay.net/chat/multimedia.do';//'http://i.com/works/photo-sdk/_data/1.jpg';//"http://i.com/works/photo-sdk/_data/publicexprod.php";//"http://publicexprod.d5336aqcn.alipay.net/chat/multimedia.do";
	public $appId = "2021001191692264";

	public $partner_private_key = 'MIIEowIBAAKCAQEAjV22yhqmTjACgEB8PEdpIckOzdhm+HN4A/v6DzRnasTQiZjEid0Ob+Z/Oa1P5D0vjbdgeAg8fjHUEuUI2oAyF87vYt271c+teLMmXLLka6d81qw1unsFNvuWq5E6I+3kVTkT+Jj/QEmkKKu6hhlr9DXLaKILMAiAYnTeHop0n7g0pBRYEuxlCwWws8buhpX7fIjmfkZWnMK6YWlKer13t6dq0hYdNVjCEVzFdDlGaBXxzU2AKieuDo2fYwGxKrYsc2EZ96TuVsay//KewwcH2lekO0d6cutaHoF4EJYGI8ozswPj0GbjTzn3sqP3oLcosFIbU9vbTDyCgOfbzcgFVQIDAQABAoIBAFIU+P6urKO3gqw/RSOm/ydL29mv7lISkbwWgeJ0NhwrfT53wp6eCTT2LCcsN7g5wrPRpyTq+1z2x8HU1OgyCWQDlsHcJ6WFOZ9cvkiS4siTbowjX+sQZT3ApYKnB5A3IB5PzwXIqGUGnVe0JtCYUDNzTNFLTZ2tQgZo/1PSZtcZuxCacfnZ4CSI71o9acjcJPYLlnhKg9bNmfkmTvGifBu2zsIFV5lHw3pRruei4d85AeBcpdJMqcCgOMIoGnJdQ+JZHjdXJ27MtgpC7uFSR7iplDAEBFaoEtbVMhC915ts8KccQngRON2kiuOnc0VNndolLKiYZ5tHs0r1iNn6sAECgYEA0fVlEaB2hjEfW5d1C/ByGX9PS398ljyeaG1LFahSGX7nbpeZ9QwfZ8FWNlu0cz08qj1kaCvWKOWCCePtRMRoZ9ndkm3z98JKdejuUsVPmXfUWYFjhQbOX2HAYGmsBRdDURZyBLFAlaoPR26gcnkcCFQoSiz3GiQAgvRbezEgiVUCgYEArF2webqBe24Vv5QF6yDmthB2PJAPmg9/MjcRWXryM5ajkLfUkKJgXDdGMwBeYzHhN59QGLvax7hJVubN/w/TAO1pczRS9IkB3gLLUi9zmRIodynqLCcDQBPvZ6fGm8yC7c5F2qcGtHLJ7j6TX7fSwTVb84tTz1/ZJB8sqsdZjAECgYAJ/tTA8hKycMQ9aAh6eQf1jsoHnhogTOJ9tjZM4aaG8DO0YCNENz+HgPzJubPtiIzKzgFptCyN5d86+U7iZzdROl4CCpoCwY0p79zos9wGQl4ppK9INfq9L7oo3N8DnwflZFwpPQcGGQKBNBMPYBSlkNwaK+nXpL8hfOCeDMivwQKBgQCaDDHI2VMXyU9OpTCU8BbB6PyDLA2FlwwLCQRMgIEuchdFI8aqbTTJtezbcBzrcozidVPUhzAFB0Mkk6rPpojib0yrVbw+KKSukri8fwRFbeEUfzV2uHdDMY3pih0K6UCq4Iu120k2xNCMSQjVpyiI3PONOpxw3iznB6WYDAqQAQKBgECX7MM7tGEeC2bUvlGkAQPB1/vWPcFcVD3bculGMVuOO/vRWCN7nQGIeMP38NBYB1/TbCfhcQpmNivzN08+MRJLE2F6oThUI5XE4rclLJ660Igtj/uv4Cb1eHp7IAtmut4qwspjXmKesL4CDauBRKwQlSBZd1UWM4r2PHge5tTD';

	public $format = "json";
	public $charset = "GBK";



	function __construct(){

	}

	public function load() {
		$alipayClient = new AlipayMobilePublicMultiMediaClient(
			$this -> serverUrl,
			$this -> appId,
			$this -> partner_private_key,
			$this -> format,
			$this -> charset
		);
		$response = null;
		$outputStream = null;
		$request = $alipayClient -> getContents() ;

		var_dump($request);die;
		//200
		//echo( '状态码：'. $request -> getCode() .', ');
		//echo '<hr /><br /><br /><br />';

		$fileType = $request -> getType();
		//echo( '类型：'. $fileType .', ');
		if( $fileType == 'text/plain'){
			//出错，返回 json
			echo $request -> getBody();

		}else{

			$type = $request -> getFileSuffix( $fileType );

			//echo $this -> getParams();
			//exit();

			//返回 文件流
			header("Content-type: ". $fileType ); //类型


			header("Accept-Ranges: bytes");//告诉客户端浏览器返回的文件大小是按照字节进行计算的
			header("Accept-Length: ". $request -> getContentLength() );//文件大小
			header("Content-Length: ". $request -> getContentLength() );//文件大小
			header('Content-Disposition: attachment; filename="'. time() .'.'. $type .'"'); //文件名
			echo $request -> getBody() ;
			exit ( ) ;
		}

		//echo( '内容： , '. $request -> getContentLength()  );

		//echo '<hr /><br /><br /><br />';
		//echo  '参数：<pre>';

		//echo ($request -> getParams());

		//echo '</pre>' ;
	}
}





//  测试
$test1 = new TestImage();
$test1 -> load();
