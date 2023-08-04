<?php

namespace App\Api;

use App\Model\Privacyagreement as Privacyd;
use PhalApi\Api;

/**
 * 隐私政策和用户协议相关接口服务
 * @package App\Api
 */
class Privacy extends Api
{
    protected $model;

    public function __construct()
    {
        $this->model = new Privacyd();
    }

    public function getRules()
    {
        return array(
            "getPrivacyagreement" => array(),
        );
    }

    /**
     * 购物车列表
     * @desc 购物车列表
     * @return array
     */
    public function getPrivacyagreement()
    {
        $data = $this->model->Privacyagreement();
        return $data;
    }

}
