<?php

// Buat folder storage dinamis di /tmp untuk environment serverless
$storagePaths = [
    '/tmp/storage/framework/views',
    '/tmp/storage/framework/cache',
    '/tmp/storage/framework/sessions',
    '/tmp/storage/logs',
];

foreach ($storagePaths as $path) {
    if (!is_dir($path)) {
        mkdir($path, 0777, true);
    }
}

// Forward request ke public/index.php
require __DIR__ . '/../public/index.php';