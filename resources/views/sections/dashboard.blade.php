<!-- ========== DASHBOARD ========== -->
<section class="page-section active" id="section-dashboard">
  <!-- Hero Cyber Banner -->
  <div class="hero-banner">
    <div class="hero-content">
      <div class="hero-badge">
        <span class="live-ping"></span>
        <span class="hero-badge-text">PENS Network & Security Operations Lab</span>
      </div>
      <h1 class="hero-title">Platform Belajar Jaringan & Keamanan Siber Interaktif</h1>
      <p class="hero-desc">
        Kuasai fundamental arsitektur jaringan komputer, protokol TCP/IP, simulasi topologi real-time, kriptografi modern, administrasi server Linux, DevOps, hingga 8 modul praktikum Cisco Packet Tracer.
      </p>
      <div class="hero-actions">
        <button class="btn btn-primary btn-lg" onclick="navigate('learn')">📚 Mulai Belajar Sekarang</button>
        <button class="btn btn-ghost btn-lg" onclick="navigate('praktikum')">🔬 Buka Modul Praktikum</button>
        <button class="btn btn-ghost btn-lg" onclick="navigate('topology')">🕸️ Simulasi Topologi</button>
      </div>
    </div>
    <div class="hero-decoration">
      <div class="shield-graphic">
        <div class="shield-ring ring-1"></div>
        <div class="shield-ring ring-2"></div>
        <div class="shield-icon">🛡️</div>
      </div>
    </div>
  </div>

  <!-- Key Statistics Grid -->
  <div class="stats-grid">
    <div class="stat-card blue">
      <div class="stat-icon-wrap blue">📡</div>
      <div class="stat-meta">
        <div class="stat-value">18</div>
        <div class="stat-label">Modul Pembelajaran Lengkap</div>
      </div>
    </div>
    <div class="stat-card purple">
      <div class="stat-icon-wrap purple">🎯</div>
      <div class="stat-meta">
        <div class="stat-value">20</div>
        <div class="stat-label">Bank Soal Quiz Interaktif</div>
      </div>
    </div>
    <div class="stat-card green">
      <div class="stat-icon-wrap green">🔬</div>
      <div class="stat-meta">
        <div class="stat-value">8</div>
        <div class="stat-label">Modul Praktikum Packet Tracer</div>
      </div>
    </div>
    <div class="stat-card yellow">
      <div class="stat-icon-wrap yellow">⚔️</div>
      <div class="stat-meta">
        <div class="stat-value">7</div>
        <div class="stat-label">Vektor Serangan & Lab Defensif</div>
      </div>
    </div>
  </div>

  <div class="section-header">
    <div class="section-title">⚡ Modul Pembelajaran Unggulan</div>
    <div class="section-subtitle">Pilih materi yang ingin Anda pelajari hari ini untuk meningkatkan kemampuan jaringan & keamanan</div>
  </div>

  <div class="modules-grid" id="dashboard-recent"></div>

  <hr class="divider">

  <div class="two-col">
    <div class="card" style="padding:28px">
      <h3 style="margin-bottom:16px;font-size:18px;display:flex;align-items:center;gap:8px">
        <span>🗺️</span> Peta Belajar Jaringan & Keamanan
      </h3>
      <div style="display:flex;flex-direction:column;gap:10px" id="peta-belajar-list"></div>
    </div>
    <div class="card" style="padding:28px">
      <h3 style="margin-bottom:16px;font-size:18px;display:flex;align-items:center;gap:8px">
        <span>💡</span> Tips Efektif Belajar & Lab
      </h3>
      <div style="display:flex;flex-direction:column;gap:12px">
        <div class="info-box info"><span class="info-icon">📖</span><div>Mulai dari <strong>Model OSI & TCP/IP</strong> — ini adalah fondasi komunikasi data di seluruh jaringan dunia.</div></div>
        <div class="info-box success"><span class="info-icon">🧪</span><div>Gunakan <strong>Lab Kriptografi & Topologi</strong> untuk melihat langsung proses enkripsi dan aliran paket.</div></div>
        <div class="info-box warning"><span class="info-icon">🎯</span><div>Uji pemahaman Anda melalui <strong>Quiz Interaktif 20 Soal</strong> dengan penjelasan mendalam tiap butir soal.</div></div>
        <div class="info-box danger"><span class="info-icon">🔬</span><div>Kerjakan <strong>8 Modul Praktikum Cisco</strong> untuk persiapan sertifikasi CCNA dan tugas kuliah jaringan.</div></div>
      </div>
      <hr class="divider">
      <h4 style="margin-bottom:12px;color:var(--text-secondary)">📊 Statistik Sesi Belajar</h4>
      <div style="display:flex;flex-direction:column;gap:8px;font-size:14px">
        <div style="display:flex;justify-content:space-between"><span style="color:var(--text-secondary)">Modul Selesai Dibaca</span><span id="stat-modules" style="font-weight:700;color:var(--accent-primary)">0 / 18</span></div>
        <div style="display:flex;justify-content:space-between"><span style="color:var(--text-secondary)">Skor Quiz Terbaik</span><span id="stat-quiz" style="font-weight:700;color:var(--accent-green)">—</span></div>
      </div>
    </div>
  </div>
</section>
