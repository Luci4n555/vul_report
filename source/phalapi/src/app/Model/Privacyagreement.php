<?php


namespace App\Model;


use PhalApi\Model\NotORMModel as NotORM;

class Privacyagreement extends NotORM
{
    public function Privacyagreement()
    {
        $sql = 'SELECT val FROM ecs_app_config' . " WHERE `k` = " . "'privacy_rights'";
        $privacy_rights = $this->getORM()->queryRow($sql);

        $sql = 'SELECT val FROM ecs_app_config' . " WHERE `k` = " . "'user_policy'";
        $user_agreement = $this->getORM()->queryRow($sql);

        $data['privacy_rights'] = $privacy_rights['val'];
        $data['user_policy'] = $user_agreement['val'];
        $data['privacy_rights'] = str_replace('&ldquo;','"',$data['privacy_rights']);
        $data['user_policy'] = str_replace('&ldquo;','"',$data['user_policy']);

        return $data;
    }
}
