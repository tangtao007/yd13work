<?php
namespace backend\controllers;

use Yii;
use yii\web\Controller;
use yii\data\Pagination;
use backend\models\Book;

/**
 * Site controller
 */
class BookController extends Controller
{
    public function actionIndex()
    {
        $query = Book::find();

        $pagination = new Pagination([
            'defaultPageSize' => 5,
            'totalCount' => $query->count(),
        ]);

        $countries = $query->orderBy('name')
            ->offset($pagination->offset)
            ->limit($pagination->limit)
            ->all();

        return $this->render('index', [
            'countries' => $countries,
            'pagination' => $pagination,
        ]);
    }
}
