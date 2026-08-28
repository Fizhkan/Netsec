<!-- ========== TOPOLOGY ========== -->
<section class="page-section" id="section-topology">
  <div class="section-header">
    <div class="section-title">🕸️ Visualisasi Topologi Jaringan</div>
    <div class="section-subtitle">Klik tombol untuk mensimulasikan pengiriman paket data secara real-time antar perangkat.</div>
  </div>

  <div class="card" style="padding:24px;margin-bottom:24px">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <h3>Network Topology — Real-time Simulation</h3>
      <div style="display:flex;gap:8px">
        <button class="btn btn-primary" onclick="networkViz && networkViz.sendPacket('pc1','server1')">📤 Kirim Paket LAN</button>
        <button class="btn btn-ghost" onclick="networkViz && networkViz.sendPacket('pc2','internet')">🌐 Akses Internet</button>
      </div>
    </div>
    <canvas id="networkCanvas"></canvas>
    <div style="display:flex;gap:20px;margin-top:16px;flex-wrap:wrap">
      <div style="display:flex;gap:8px;align-items:center;font-size:12px;color:var(--text-secondary)"><div style="width:10px;height:10px;border-radius:50%;background:#4f8ef7"></div>Internet / Cloud</div>
      <div style="display:flex;gap:8px;align-items:center;font-size:12px;color:var(--text-secondary)"><div style="width:10px;height:10px;border-radius:50%;background:#7c3aed"></div>Router</div>
      <div style="display:flex;gap:8px;align-items:center;font-size:12px;color:var(--text-secondary)"><div style="width:10px;height:10px;border-radius:50%;background:#ef4444"></div>Firewall</div>
      <div style="display:flex;gap:8px;align-items:center;font-size:12px;color:var(--text-secondary)"><div style="width:10px;height:10px;border-radius:50%;background:#10b981"></div>Switch</div>
      <div style="display:flex;gap:8px;align-items:center;font-size:12px;color:var(--text-secondary)"><div style="width:10px;height:10px;border-radius:50%;background:#f59e0b"></div>Server</div>
    </div>
  </div>

  <div class="section-header">
    <div class="section-title" style="font-size:20px">🔌 Perangkat & Komponen Jaringan</div>
  </div>
  <div class="modules-grid" id="devices-grid"></div>
</section>
