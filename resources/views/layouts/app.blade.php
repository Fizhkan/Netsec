<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NetSec Academy — Platform Belajar Jaringan & Keamanan | PENS</title>
  <meta name="description" content="Platform belajar jaringan dan keamanan siber interaktif dari PENS. Pelajari OSI model, TCP/IP, protokol, topologi, enkripsi, serangan siber, DevOps, Linux, dan lab praktikum Cisco Packet Tracer.">
  <meta name="keywords" content="jaringan komputer, keamanan jaringan, cisco packet tracer, PENS, netSec, OSI model, TCP/IP, subnetting, VLAN, DevOps, Laravel">
  <meta name="author" content="PENS - Politeknik Elektronika Negeri Surabaya">
  <meta property="og:title" content="NetSec Academy — Belajar Jaringan & Keamanan Jaringan">
  <meta property="og:description" content="Platform belajar jaringan interaktif dari PENS berbasis Laravel. Modul lengkap + praktikum Cisco Packet Tracer.">
  <meta property="og:type" content="website">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛡️</text></svg>">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="{{ asset('css/style.css') }}?v=5">
</head>
<body>
  <div class="bg-animated">
    <div class="glow-orb orb-1"></div>
    <div class="glow-orb orb-2"></div>
    <div class="glow-orb orb-3"></div>
    <div class="grid-overlay"></div>
  </div>

  <div class="app-layout">
    <!-- Sidebar -->
    @include('partials.sidebar')

    <!-- Main Content -->
    <main class="main-content">
      <!-- Topbar -->
      @include('partials.topbar')

      <!-- Page Sections -->
      @include('sections.dashboard')
      @include('sections.learn')
      @include('sections.topology')
      @include('sections.security')
      @include('sections.quiz')
      @include('sections.cheatsheet')
      @include('sections.praktikum')
    </main>
  </div>

  <!-- Global Modals (Root Level) -->
  <div id="praktikum-modal" class="modal-overlay">
    <div class="modal modal-lg" onclick="event.stopPropagation()">
      <div class="modal-header">
        <div class="modal-title-wrap">
          <div class="modal-badge-pill" id="prak-modal-badge">Modul Praktikum</div>
          <h2 class="modal-title" id="prak-modal-title">Judul Modul</h2>
        </div>
        <button class="modal-close-btn" onclick="closePraktikumModal()" title="Tutup Modal (Esc)">✕</button>
      </div>
      <div class="modal-body" id="prak-modal-body">
        <!-- Content injected dynamically -->
      </div>
    </div>
  </div>

  <div id="security-modal" class="modal-overlay">
    <div class="modal" onclick="event.stopPropagation()">
      <div class="modal-header">
        <h2 class="modal-title" id="sec-modal-title">Detail Serangan</h2>
        <button class="modal-close-btn" onclick="document.getElementById('security-modal').classList.remove('open')" title="Tutup">✕</button>
      </div>
      <div class="modal-body" id="sec-modal-body"></div>
    </div>
  </div>

  <script src="{{ asset('js/modules.js') }}?v=5"></script>
  <script src="{{ asset('js/network-viz.js') }}?v=5"></script>
  <script src="{{ asset('js/quiz.js') }}?v=5"></script>
  <script src="{{ asset('js/app.js') }}?v=5"></script>
</body>
</html>
