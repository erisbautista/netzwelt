<?php

use App\Http\Controllers\RequestsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('territories', [RequestsController::class, 'getTerritories']);
Route::post('login', [RequestsController::class, 'login']);
Route::get('/check-user', [RequestsController::class, 'checkUser']);