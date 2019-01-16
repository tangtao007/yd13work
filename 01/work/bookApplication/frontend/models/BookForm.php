<?php

namespace frontend\models;

use Yii;
use yii\base\Model;

/**
 * ContactForm is the model behind the contact form.
 */
class BookForm extends Model
{
    public $name;
    public $email;
    public $subject;
    public $category;
    public $verifyCode;


    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            // name, email, subject and body are required
            [['name', 'category'], 'required'],
            // email has to be a valid email address
            ['category', 'trim'],
        ];
    }
}

