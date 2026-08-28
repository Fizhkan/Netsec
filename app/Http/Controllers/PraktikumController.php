<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class PraktikumController extends Controller
{
    /**
     * Download a praktikum modul or laprak docx file.
     */
    public function download(string $filename): BinaryFileResponse
    {
        // Sanitize filename to prevent directory traversal
        $cleanFilename = basename($filename);
        $filePath = public_path('praktikum/' . $cleanFilename);

        if (!file_exists($filePath)) {
            abort(404, 'File praktikum tidak ditemukan.');
        }

        return response()->download($filePath, $cleanFilename, [
            'Content-Type' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ]);
    }
}
