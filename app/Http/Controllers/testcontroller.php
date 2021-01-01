<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class testcontroller extends Controller
{
    public function controllerMethod(){
           return view('welcome');
         // return response()->json({
            //  'msg' => 'we should return only json'
          //});
    }
    public function test(){
        return 'it is working';
    }
}
