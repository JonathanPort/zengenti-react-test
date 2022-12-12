<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class AppController extends BaseController
{

    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    public function renderApp(Request $request)
    {

        return view('app');

    }


}
