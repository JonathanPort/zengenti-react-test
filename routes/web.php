<?php

use App\Http\Controllers\AppController;
use Illuminate\Support\Facades\Route;

Route::get('/{path?}', [AppController::class, 'renderApp'])
    ->where('path', '.*');
