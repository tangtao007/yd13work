<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \common\models\LoginForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;

$this->title = '新增图书';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="site-book">
    <h1><?= Html::encode($this->title) ?></h1>

    <div class="row">
        <div class="col-lg-5">
            <?php $form = ActiveForm::begin(['id' => 'book-form']); ?>
                <?= $form-> field($model,'name')->label('名称')?>
                <?= $form-> field($model,'category')->label('类别')?>
                <div class="from-group">
                    <?= Html::submitButton('Submit',['class'=> 'btn btn-primary'])?>
                </div>
            <?php ActiveForm::end(); ?>
        </div>
    </div>
</div>
