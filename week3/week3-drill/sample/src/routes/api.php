<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('todos', [TodoController::class, 'create']);
Route::get('todos', [TodoController::class, 'fetchAll']);
Route::get('todos/{todoId}', [TodoController::class, 'fetch']);
Route::put('todos/{todoId}', [TodoController::class, 'update']);
Route::delete('todos/{todoId}', [TodoController::class, 'delete']);
