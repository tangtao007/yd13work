<?php
use yii\helpers\Html;
?>
<p>创建book</p>
<ul>
    <li><label>名称：</label><?= Html::encode($model->name)?></li>
    <li><label>类别：</label><?=Html::encode($model->category)?></li>
</ul>