<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/album', [AlbumController::class, 'store']);

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
