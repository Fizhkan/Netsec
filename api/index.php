<?php

use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// 1. Inisialisasi folder writable di /tmp
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

$app = require_once __DIR__ . '/../bootstrap/app.php';

// 2. Set storage path
$app->useStoragePath('/tmp/storage');

// 3. Inject config saat aplikasi booting
$app->booting(function () use ($app) {
    $config = $app->make('config');
    
    $config->set('app.debug', true);
    $config->set('view.compiled', '/tmp/storage/framework/views');
    $config->set('logging.default', 'stderr');
    $config->set('cache.default', 'array');
    $config->set('session.driver', 'cookie');
    $config->set('queue.default', 'sync');
});

$app->handleRequest(Request::capture());