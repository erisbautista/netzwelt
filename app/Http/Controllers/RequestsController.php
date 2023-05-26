<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redis;

class RequestsController extends Controller
{
    private $oRequest;

    public function __construct(Request $oRequest)
    {
        $this->oRequest = $oRequest;
    }

    public function getTerritories()
    {
        $oTerritories = Http::get('https://netzwelt-devtest.azurewebsites.net/Territories/All');
        return response()->json(json_decode($oTerritories->body()));
    }

    public function login()
    {
        $oSignIn = HTTP::post('https://netzwelt-devtest.azurewebsites.net/Account/SignIn', $this->oRequest->all());
        if ($oSignIn->status() === 200) {
            Redis::set('user', $oSignIn->body());
        }
        return response()->json([
            'data' => json_decode($oSignIn->body()),
            'status' => $oSignIn->status()
        ]);
    }

    public function checkUser()
    {
        $oUser = json_decode(Redis::get('user'));
        return response()->json(!empty($oUser));
    }
}
