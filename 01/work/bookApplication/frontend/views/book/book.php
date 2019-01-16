<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
?>
<?php $form = ActiveForm::begin();?>
<?php $form-> field($model,'name')?>
<?php $form-> field($model,'email')?>
<?php $form-> field($model,'category')?>
<div class="from-group">
    <?= Html::submitButton('Submit',['class'=> 'btn btn-primary'])?>
</div>
<?php ActiveForm::end(); ?>
