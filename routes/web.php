<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AlbumController;
use App\Http\Controllers\FaixaController;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

require __DIR__.'/auth.php';

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/album', [AlbumController::class, 'index']);
    Route::post('/album', [AlbumController::class, 'store']); 
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/faixa', [FaixaController::class, 'index']);
    Route::post('/faixa', [FaixaController::class, 'store']);
});


