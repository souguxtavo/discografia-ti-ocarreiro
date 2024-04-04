<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AlbumController;
use App\Http\Controllers\FaixaController;

//Route::get('/album', [AlbumController::class, 'index']);
//Route::get('/album/{id}', [AlbumController::class, 'show']);
//Route::put('/album/{id}', [AlbumController::class, 'update']);
//Route::post('/album', [AlbumController::class, 'store']);
//Route::delete('/album/{id}', [AlbumController::class, 'destroy']);

//Route::get('/faixa', [FaixaController::class, 'index']);
//Route::get('/faixa/{id}', [FaixaController::class, 'show']);
//Route::put('/faixa/{id}', [FaixaController::class, 'update']);
//Route::post('/faixa', [FaixaController::class, 'store']);
//Route::delete('/faixa/{id}', [FaixaController::class, 'destroy']);

Route::apiResources([
    'album' => AlbumController::class,
    'faixa' => FaixaController::class,
    'register' => Auth\RegisteredUserController::class,
    'login' => Auth\AuthenticatedSessionController::class,
]);

Route::get('/faixas/album/{nome}', [FaixaController::class, 'getFaixasByAlbumNome']);


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
