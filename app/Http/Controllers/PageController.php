<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    /**
     * Display the NetSec Academy main application.
     */
    public function index()
    {
        return view('layouts.app');
    }
}
