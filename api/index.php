<?php

use Dotenv\Dotenv;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// 1. Siapkan direktori storage dinamis di /tmp
$dirs = [
    '/tmp/storage/framework/views',
    '/tmp/storage/framework/cache',
    '/tmp/storage/framework/cache/data',
    '/tmp/storage/framework/sessions',
    '/tmp/storage/logs',
    '/tmp/bootstrap/cache',
];

foreach ($dirs as $dir) {
    if (!is_dir($dir)) {
        mkdir($dir, 0777, true);
    }
}

require __DIR__ . '/../vendor/autoload.php';

// 2. Load Dotenv dari environment serverless
if (file_exists(__DIR__ . '/../.env')) {
    Dotenv::createImmutable(__DIR__ . '/../')->safeLoad();
}

$app = require_once __DIR__ . '/../bootstrap/app.php';

// 3. Set Storage Path
$app->useStoragePath('/tmp/storage');

// 4. Force default configs agar Driver Manager tidak null
config([
    'app.debug' => env('APP_DEBUG', true),
    'logging.default' => env('LOG_CHANNEL', 'stderr'),
    'cache.default' => env('CACHE_STORE', 'array'),
    'session.driver' => env('SESSION_DRIVER', 'cookie'),
    'view.compiled' => '/tmp/storage/framework/views',
]);

$app->handleRequest(Request::capture());