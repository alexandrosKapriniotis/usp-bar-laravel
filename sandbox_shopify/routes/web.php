<?php

use App\Http\Controllers\SettingsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->middleware(['auth.shopify','billable'])->name('home');

Route::get('/seo-test', [SettingsController::class,'seoTest'])->name('seo-test');
Route::get('/settings', [SettingsController::class,'index'])->name('settings');
Route::post('/settings', [SettingsController::class,'store']);

Route::post('/settings/create', [SettingsController::class,'create']);
Route::get('/settings/{setting}', [SettingsController::class,'edit'])->name('settings.edit');
Route::put('/settings/{setting}', [SettingsController::class,'update']);

Route::post('/settings/upload-asset',[SettingsController::class,'uploadImage']);
Route::post('/settings/update-product',[SettingsController::class,'updateSeoProduct']);
Route::post('/settings/update-seo-fields',[SettingsController::class,'updateSeoFields']);
