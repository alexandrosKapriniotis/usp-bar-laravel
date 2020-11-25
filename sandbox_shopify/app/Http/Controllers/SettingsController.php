<?php

namespace App\Http\Controllers;

use App\Models\Settings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Osiset\BasicShopifyAPI\BasicShopifyAPI;
use Osiset\BasicShopifyAPI\Options;
use Osiset\BasicShopifyAPI\Session;

class SettingsController extends Controller
{
    public function index()
    {
        $settings = Settings::paginate(15);

        return view('settings.index', [
            'settings' => $settings
        ]);
    }

    public function create(){
        return view('settings.create');
    }

    public function store(){
        Settings::create($this->validateArticle());

        return redirect(route('settings'));
    }

    public function edit(Settings $setting){
        return view('settings.edit',['setting' => $setting]);
    }

    public function update(Settings $setting){

        $settings_post = request()->post();

        foreach ($settings_post as $key => $value){
            if ($key !== 'MAX_FILE_SIZE' && $key !== '_token' && $key !== '_method' && $key !== 'first_image' && $key !== 'second_image' && $key !== 'third_image' && $key !== ' fourth_image'){
                $setting->{$key} = $value;
            }
        }
        $setting->save();
        return redirect(route('settings',$setting));
    }
    public function uploadImage(Request $request){
        $data = $request->all();

        $shop = Auth::user();
        $activeTheme = self::getActiveTheme();
        $params = array(
            'asset' => array(
                'key' => 'assets/'.$data['image_title'],
                'attachment' => $data['image_src'],
            )
        );
        $assetApi = $shop->api()->rest('PUT', "/admin/api/2020-10/themes/$activeTheme/assets.json",$params)['body']['asset'];

        return response()->json(['success'=>'Ajax request submitted successfully','data' => $assetApi['public_url']]);
    }

    public function getActiveTheme(){
        $shop = Auth::user();
        $themesApi = $shop->api()->rest('GET', '/admin/api/2020-10/themes.json')['body'];

        foreach ($themesApi['themes'] as $theme){
            if ($theme['role'] === 'main'){
                return $theme['id'];
            }
        }
        return false;
    }

    public function seoTest(){
        $shop = Auth::user();
        $product = $shop->api()->rest('GET', '/admin/api/2020-10/products/6076176695480.json')['body']['product'];
//        $product_metafields = $shop->api()->rest('GET', '/admin/api/2020-10/products/6076176695480/metafields.json')['body']['metafields'];
        $productTitleMetafield = $shop->api()->rest('GET', '/admin/api/2020-10/products/6076176695480/metafields.json',['key' =>'title_tag']);
        $productDescriptionMetafield = $shop->api()->rest('GET', '/admin/api/2020-10/products/6076176695480/metafields.json',['key' => 'description_tag']);

        if (isset($productTitleMetafield['body']['metafields'],$productDescriptionMetafield['body']['metafields'])){
            $productTitleMetafield = $productTitleMetafield['body']['metafields'][0];
            $productDescriptionMetafield = $productDescriptionMetafield['body']['metafields'][0];
        }

        $product_link = $shop->name.'/products/'.$product->handle;
        return view('seo.index',['product' => $product,'shop_name' => $shop->name,'product_link' => $product_link,'title_tag' => $productTitleMetafield,'description_tag' => $productDescriptionMetafield]);
    }

    protected function validateSetting(){
        return request()->validate([

        ]);
    }

    public function updateSeoProduct() {
        $product_post = request()->post();
        $shop = Auth::user();
        $params = array(
            'product' => array(
                'id' => 632910392,
                'title' => $product_post['product-title'],
                'body_html' => $product_post['product-description']
            )
        );
        $product = $shop->api()->rest('PUT', "/admin/api/2020-10/products/6076176695480.json",$params)['body']['product'];
        $product_link = $shop->name.'/products/'.$product->handle;
        $productTitleMetafield = $shop->api()->rest('GET', '/admin/api/2020-10/products/6076176695480/metafields.json',['key' =>'title_tag']);
        $productDescriptionMetafield = $shop->api()->rest('GET', '/admin/api/2020-10/products/6076176695480/metafields.json',['key' => 'description_tag']);

        if (isset($productTitleMetafield['body']['metafields'],$productDescriptionMetafield['body']['metafields'])){
            $productTitleMetafield = $productTitleMetafield['body']['metafields'][0];
            $productDescriptionMetafield = $productDescriptionMetafield['body']['metafields'][0];
        }
        return view('seo.index',['product' => $product,'shop_name' => $shop->name,'product_link' => $product_link,'title_tag' => $productTitleMetafield,'description_tag' => $productDescriptionMetafield]);
    }

    public function updateSeoFields(Request $request){
        $data = $request->all();
        $shop = Auth::user();
        $descriptionParams = array(
            'metafield' => array(
                'id' => 16799668338872,
                "value" => $data['seo_description'],
                "value_type" => "string",
            )
        );
        $titleParams = array(
            'metafield' => array(
                'id' => 16799675252920,
                "value" => $data['seo_title'],
                "value_type" => "string",
            )
        );
        $slugParams = array(
            'product' => array(
                'id' => 6076176695480,
                "handle" => $data['seo_slug'],
            )
        );
        $descriptionMetafield = $shop->api()->rest('PUT', "/admin/api/2020-10/metafields/16799668338872.json",$descriptionParams)['body']['metafield'];
        $titleMetafield = $shop->api()->rest('PUT', "/admin/api/2020-10/metafields/16799675252920.json",$titleParams)['body']['metafield'];
        $productSlug = $shop->api()->rest('PUT', "/admin/api/2020-10/products/6076176695480.json",$slugParams)['body']['product'];

        return response()->json(['success'=>'Ajax request submitted successfully','descriptionMetafield' => $descriptionMetafield,'titleMetafield' => $titleMetafield]);
    }
}
