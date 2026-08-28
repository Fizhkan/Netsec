// ===================== APP STATE =====================
let currentSection = 'dashboard';
let userProgress = { quizBest: 0, modulesViewed: new Set(), streak: 1 };
let networkViz = null;

// ===================== NAVIGATION =====================
function navigate(section) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const target = document.getElementById(`section-${section}`);
  if (target) target.classList.add('active', 'fade-in');
  const navItem = document.querySelector(`[data-nav="${section}"]`);
  if (navItem) navItem.classList.add('active');
  currentSection = section;

  // Update topbar
  const titles = {
    dashboard: { t: '🏠 Dashboard', s: 'Selamat datang! Mulai belajar jaringan hari ini.' },
    learn: { t: '📚 Materi Belajar', s: 'Pilih topik yang ingin kamu pelajari.' },
    topology: { t: '🕸️ Topologi Jaringan', s: 'Visualisasi interaktif topologi jaringan.' },
    security: { t: '🔐 Keamanan Jaringan', s: 'Pelajari serangan dan pertahanan jaringan.' },
    quiz: { t: '🎯 Quiz', s: 'Uji pengetahuanmu dengan 20 soal jaringan & keamanan.' },
    cheatsheet: { t: '📋 Cheat Sheet', s: 'Referensi cepat protokol dan port penting.' },
    praktikum: { t: '🔬 Modul Praktikum', s: '8 modul praktikum Cisco Packet Tracer — download template laporan.' },
  };
  const info = titles[section] || titles.dashboard;
  const el = document.querySelector('.topbar-title');
  const el2 = document.querySelector('.topbar-subtitle');
  if (el) el.textContent = info.t;
  if (el2) el2.textContent = info.s;

  if (section === 'topology' && networkViz) {
    setTimeout(() => networkViz.resize(), 100);
  }
  if (section === 'quiz') {
    renderQuiz();
  }
  if (section === 'learn') {
    renderLearnHome();
  }
  if (section === 'praktikum') {
    renderPraktikum();
  }
}

window.navigate = navigate;

// ===================== PROGRESS =====================
function updateProgress(quizScore) {
  if (quizScore > userProgress.quizBest) userProgress.quizBest = quizScore;
  const total = Math.min(100, Math.round((userProgress.modulesViewed.size / 18) * 60 + (userProgress.quizBest / 100) * 40));
  document.querySelectorAll('.progress-bar-fill').forEach(el => el.style.width = total + '%');
  document.querySelectorAll('.progress-pct').forEach(el => el.textContent = total + '%');
}

window.updateProgress = updateProgress;

// ===================== LEARN PAGE =====================
function renderLearnHome() {
  const container = document.getElementById('learn-main');
  if (!container) return;
  // Show module grid only when no lesson is active
  const grid = document.getElementById('learn-module-grid');
  const lesson = document.getElementById('learn-lesson-view');
  if (grid) grid.style.display = 'grid';
  if (lesson) lesson.style.display = 'none';
}

function openLesson(id) {
  const grid = document.getElementById('learn-module-grid');
  const lessonView = document.getElementById('learn-lesson-view');
  if (grid) grid.style.display = 'none';
  if (lessonView) { lessonView.style.display = 'block'; lessonView.classList.add('fade-in'); }

  userProgress.modulesViewed.add(id);
  updateProgress(userProgress.quizBest);

  const content = document.getElementById('lesson-content');
  if (!content) return;
  content.innerHTML = getLessonContent(id);

  // Init OSI layer toggles
  document.querySelectorAll('.osi-layer').forEach(el => {
    el.addEventListener('click', () => el.classList.toggle('expanded'));
  });

  // Init packet demo
  const startBtn = document.getElementById('packet-start');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      document.querySelectorAll('.packet-dot').forEach(d => d.classList.add('moving'));
      startBtn.textContent = '⏹ Stop';
      startBtn.onclick = () => {
        document.querySelectorAll('.packet-dot').forEach(d => d.classList.remove('moving'));
        startBtn.textContent = '▶ Animasikan';
        startBtn.onclick = null;
        startBtn.addEventListener('click', () => {
          document.querySelectorAll('.packet-dot').forEach(d => d.classList.add('moving'));
        });
      };
    });
  }

  // Init crypto demo
  initCryptoDemo();
}

window.openLesson = openLesson;

function getLessonContent(id) {
  // Check new modules from LESSON_EXTRA
  if (window.LESSON_EXTRA && window.LESSON_EXTRA[id]) {
    const ex = window.LESSON_EXTRA[id];
    return `<div class="section-header"><div class="lesson-title">${ex.icon} ${ex.title}</div></div>${ex.content}`;
  }
  switch (id) {
    case 'osi': return getOSIContent();
    case 'tcpip': return getTCPIPContent();
    case 'protocols': return getProtocolsContent();
    case 'subnetting': return getSubnettingContent();
    case 'topology': return getTopologyContent();
    case 'security-basic': return getSecurityBasicContent();
    case 'attacks': return getAttacksLessonContent();
    case 'crypto': return getCryptoContent();
    default: return '<div class="info-box info"><span class="info-icon">🚧</span><div>Konten untuk modul ini sedang dalam pengembangan. Cek modul praktikum di folder <strong>Modul Praktikum</strong> untuk materi lengkap!</div></div>';
  }
}


function getOSIContent() {
  return `
    <div class="section-header">
      <div class="lesson-title">Model OSI — 7 Layer Jaringan</div>
      <div class="lesson-subtitle">Open Systems Interconnection — standar arsitektur jaringan dunia</div>
    </div>
    <div class="info-box info">
      <span class="info-icon">💡</span>
      <div>Model OSI dibuat oleh ISO (International Organization for Standardization) pada 1984 sebagai referensi standar komunikasi jaringan. Klik setiap layer untuk melihat detail!</div>
    </div>
    <div class="osi-layers">
      ${OSI_LAYERS.map(l => `
        <div class="osi-layer layer-${l.num}">
          <div class="osi-layer-num">${l.num}</div>
          <div>
            <div class="osi-layer-name">${l.name}</div>
            <div class="osi-layer-proto">${l.proto}</div>
          </div>
          <span class="osi-layer-badge">${l.badge}</span>
          <div class="osi-detail">${l.detail}</div>
        </div>
      `).join('')}
    </div>
    <hr class="divider">
    <div class="two-col">
      <div>
        <h3 style="margin-bottom:12px">🧠 Cara Mudah Menghafal</h3>
        <div class="info-box success">
          <span class="info-icon">🔤</span>
          <div>Dari atas ke bawah (7→1):<br><strong>"All People Seem To Need Data Processing"</strong><br>
          <span style="color:var(--text-muted);font-size:12px">Application, Presentation, Session, Transport, Network, Data Link, Physical</span></div>
        </div>
      </div>
      <div>
        <h3 style="margin-bottom:12px">📦 Data Encapsulation</h3>
        <div class="info-box info">
          <span class="info-icon">📦</span>
          <div>Data dibungkus (encapsulated) dengan header di setiap layer saat dikirim, dan dibuka (decapsulated) saat diterima. Setiap layer hanya berkomunikasi dengan layer yang sama di sisi lain.</div>
        </div>
      </div>
    </div>
    <div class="packet-demo">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <h3>📤 Packet Flow Demo</h3>
        <button class="btn btn-primary" id="packet-start">▶ Animasikan</button>
      </div>
      <div class="packet-flow">
        <div class="packet-node"><span class="pn-icon">💻</span>Pengirim</div>
        <div class="packet-arrow"><div class="packet-dot"></div></div>
        <div class="packet-node"><span class="pn-icon">📡</span>Router</div>
        <div class="packet-arrow"><div class="packet-dot"></div></div>
        <div class="packet-node"><span class="pn-icon">🌐</span>Internet</div>
        <div class="packet-arrow"><div class="packet-dot"></div></div>
        <div class="packet-node"><span class="pn-icon">📡</span>Router</div>
        <div class="packet-arrow"><div class="packet-dot"></div></div>
        <div class="packet-node"><span class="pn-icon">🖥️</span>Server</div>
      </div>
    </div>
  `;
}

function getTCPIPContent() {
  return `
    <div class="section-header">
      <div class="lesson-title">TCP vs UDP — Dua Protokol Transport</div>
      <div class="lesson-subtitle">Memahami perbedaan, cara kerja, dan kapan menggunakannya</div>
    </div>
    <div class="two-col" style="margin-bottom:24px">
      <div class="card" style="padding:24px;border-color:rgba(79,142,247,0.3)">
        <h3 style="color:var(--accent-primary);margin-bottom:16px">🔗 TCP (Transmission Control Protocol)</h3>
        <ul style="font-size:14px;color:var(--text-secondary);line-height:2;list-style:none">
          <li>✅ Connection-oriented (3-way handshake)</li>
          <li>✅ Menjamin pengiriman data (reliable)</li>
          <li>✅ Urutan data terjaga (ordered)</li>
          <li>✅ Error detection & retransmission</li>
          <li>✅ Flow control & congestion control</li>
          <li>⚠️ Lebih lambat karena overhead</li>
          <li>⚠️ Tidak cocok untuk real-time</li>
        </ul>
        <div class="info-box info" style="margin-top:12px">
          <span class="info-icon">🎯</span>
          <div><strong>Digunakan:</strong> HTTP/S, FTP, SSH, Email (SMTP/IMAP)</div>
        </div>
      </div>
      <div class="card" style="padding:24px;border-color:rgba(16,185,129,0.3)">
        <h3 style="color:var(--accent-green);margin-bottom:16px">⚡ UDP (User Datagram Protocol)</h3>
        <ul style="font-size:14px;color:var(--text-secondary);line-height:2;list-style:none">
          <li>✅ Connectionless (tanpa handshake)</li>
          <li>✅ Sangat cepat & low latency</li>
          <li>✅ Overhead minimal</li>
          <li>✅ Cocok untuk broadcast/multicast</li>
          <li>❌ Tidak menjamin pengiriman</li>
          <li>❌ Urutan tidak terjaga</li>
          <li>❌ Tidak ada error recovery</li>
        </ul>
        <div class="info-box success" style="margin-top:12px">
          <span class="info-icon">🎯</span>
          <div><strong>Digunakan:</strong> Video streaming, gaming online, VoIP, DNS</div>
        </div>
      </div>
    </div>
    <div class="card" style="padding:24px;margin-bottom:24px">
      <h3 style="margin-bottom:16px">🤝 TCP 3-Way Handshake</h3>
      <div class="two-col">
        <div>
          <p style="font-size:14px;color:var(--text-secondary);line-height:1.7;margin-bottom:12px">
          Sebelum transfer data, TCP melakukan "jabat tangan" tiga langkah untuk membangun koneksi yang andal:
          </p>
          <div class="code-block">
<span class="code-blue">Client</span>  →  <span class="code-green">SYN</span>          →  <span class="code-yellow">Server</span>
<span class="code-blue">Client</span>  ←  <span class="code-green">SYN-ACK</span>      ←  <span class="code-yellow">Server</span>
<span class="code-blue">Client</span>  →  <span class="code-green">ACK</span>          →  <span class="code-yellow">Server</span>
          ——— <span class="code-purple">Data Transfer Dimulai</span> ———</div>
        </div>
        <div>
          <div class="info-box warning">
            <span class="info-icon">⚠️</span>
            <div><strong>SYN Flood Attack</strong>: Penyerang mengirim banyak SYN tanpa menyelesaikan handshake, menghabiskan resource server. Solusi: SYN cookies, firewall rate limiting.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card" style="padding:24px">
      <h3 style="margin-bottom:16px">🌐 TCP/IP 4-Layer Model (DoD Model)</h3>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${[
          {name:'Application Layer', proto:'HTTP, FTP, DNS, SMTP, SSH', color:'#ef4444', eq:'OSI Layer 5-6-7'},
          {name:'Transport Layer', proto:'TCP, UDP', color:'#06b6d4', eq:'OSI Layer 4'},
          {name:'Internet Layer', proto:'IP, ICMP, ARP', color:'#4f8ef7', eq:'OSI Layer 3'},
          {name:'Network Access Layer', proto:'Ethernet, Wi-Fi, ARP', color:'#94a3b8', eq:'OSI Layer 1-2'},
        ].map(l => `
          <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:10px;padding:14px;display:flex;justify-content:space-between;align-items:center">
            <div>
              <div style="font-weight:700;color:${l.color};margin-bottom:4px">${l.name}</div>
              <div style="font-size:12px;color:var(--text-muted)">${l.proto}</div>
            </div>
            <div style="font-size:11px;color:var(--text-muted);text-align:right">${l.eq}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function getProtocolsContent() {
  return `
    <div class="section-header">
      <div class="lesson-title">Protokol Jaringan — Referensi Lengkap</div>
      <div class="lesson-subtitle">Semua protokol penting beserta port dan fungsinya</div>
    </div>
    <div class="cheatsheet-grid">
      <div class="cheat-card">
        <div class="cheat-title">🌐 Protokol Web</div>
        <table class="cheat-table">
          <tr><th>Protokol</th><th>Port</th><th>Fungsi</th></tr>
          ${PROTOCOLS.filter(p => ['HTTP','HTTPS','WebSocket'].includes(p.name)).map(p => 
            `<tr><td>${p.name}</td><td>${p.port}</td><td>${p.desc}</td></tr>`
          ).join('')}
          <tr><td>HTTP</td><td>80</td><td>Web browsing tidak terenkripsi</td></tr>
          <tr><td>HTTPS</td><td>443</td><td>Web browsing terenkripsi (TLS)</td></tr>
        </table>
      </div>
      <div class="cheat-card">
        <div class="cheat-title">📧 Protokol Email</div>
        <table class="cheat-table">
          <tr><th>Protokol</th><th>Port</th><th>Fungsi</th></tr>
          <tr><td>SMTP</td><td>25/587</td><td>Kirim email (outgoing)</td></tr>
          <tr><td>SMTPS</td><td>465</td><td>SMTP terenkripsi</td></tr>
          <tr><td>POP3</td><td>110</td><td>Ambil email (download)</td></tr>
          <tr><td>POP3S</td><td>995</td><td>POP3 terenkripsi</td></tr>
          <tr><td>IMAP</td><td>143</td><td>Akses email (sinkronisasi)</td></tr>
          <tr><td>IMAPS</td><td>993</td><td>IMAP terenkripsi</td></tr>
        </table>
      </div>
      <div class="cheat-card">
        <div class="cheat-title">📁 Transfer File & Remote</div>
        <table class="cheat-table">
          <tr><th>Protokol</th><th>Port</th><th>Fungsi</th></tr>
          <tr><td>FTP</td><td>20/21</td><td>Transfer file (tidak aman)</td></tr>
          <tr><td>SFTP</td><td>22</td><td>Transfer file via SSH</td></tr>
          <tr><td>FTPS</td><td>990</td><td>FTP over TLS</td></tr>
          <tr><td>SSH</td><td>22</td><td>Remote access terenkripsi</td></tr>
          <tr><td>Telnet</td><td>23</td><td>Remote access (deprecated!)</td></tr>
          <tr><td>RDP</td><td>3389</td><td>Remote Desktop (Windows)</td></tr>
        </table>
      </div>
      <div class="cheat-card">
        <div class="cheat-title">⚙️ Protokol Infrastruktur</div>
        <table class="cheat-table">
          <tr><th>Protokol</th><th>Port</th><th>Fungsi</th></tr>
          <tr><td>DNS</td><td>53</td><td>Domain name resolution</td></tr>
          <tr><td>DHCP</td><td>67/68</td><td>Alokasi IP otomatis</td></tr>
          <tr><td>NTP</td><td>123</td><td>Sinkronisasi waktu</td></tr>
          <tr><td>SNMP</td><td>161</td><td>Monitoring jaringan</td></tr>
          <tr><td>LDAP</td><td>389</td><td>Directory service</td></tr>
          <tr><td>Kerberos</td><td>88</td><td>Autentikasi jaringan</td></tr>
        </table>
      </div>
      <div class="cheat-card">
        <div class="cheat-title">🔒 Protokol Keamanan</div>
        <table class="cheat-table">
          <tr><th>Protokol</th><th>Fungsi</th></tr>
          <tr><td>TLS 1.3</td><td>Enkripsi transport terbaru & teraman</td></tr>
          <tr><td>IPSec</td><td>Enkripsi di level IP (digunakan VPN)</td></tr>
          <tr><td>WPA3</td><td>Keamanan Wi-Fi generasi terbaru</td></tr>
          <tr><td>DNSSEC</td><td>Validasi integritas DNS</td></tr>
          <tr><td>HTTPS/HSTS</td><td>Paksa koneksi aman ke web</td></tr>
        </table>
      </div>
    </div>
    <div class="info-box warning" style="margin-top:20px">
      <span class="info-icon">⚠️</span>
      <div><strong>Protokol yang Harus Dihindari:</strong> Telnet, FTP, HTTP (tanpa S), POP3/IMAP tanpa SSL — semua ini mengirim data dalam plaintext yang bisa disadap!</div>
    </div>
  `;
}

function getSubnettingContent() {
  return `
    <div class="section-header">
      <div class="lesson-title">IP Address & Subnetting</div>
      <div class="lesson-subtitle">Memahami pengalamatan IP dan cara membagi jaringan</div>
    </div>
    <div class="two-col" style="margin-bottom:24px">
      <div class="card" style="padding:24px">
        <h3 style="margin-bottom:16px;color:var(--accent-primary)">IPv4 — 32 bit</h3>
        <p style="font-size:14px;color:var(--text-secondary);line-height:1.7;margin-bottom:12px">Terdiri dari 4 oktet (8 bit masing-masing), dipisah titik. Total: ~4.3 miliar alamat.</p>
        <div class="code-block">
<span class="code-green">192.168.1.100</span> / <span class="code-yellow">24</span>
<span class="code-cyan">11000000.10101000.00000001.01100100</span>
Network: <span class="code-blue">192.168.1</span>.0
Host:    192.168.1.<span class="code-purple">100</span>
Broadcast: 192.168.1.<span class="code-red">255</span></div>
        <h4 style="margin:16px 0 8px">Kelas IP Address:</h4>
        <table class="cheat-table">
          <tr><th>Kelas</th><th>Range</th><th>Default Mask</th><th>Penggunaan</th></tr>
          <tr><td>A</td><td>1-126</td><td>/8</td><td>Large networks</td></tr>
          <tr><td>B</td><td>128-191</td><td>/16</td><td>Medium networks</td></tr>
          <tr><td>C</td><td>192-223</td><td>/24</td><td>Small networks</td></tr>
          <tr><td>D</td><td>224-239</td><td>-</td><td>Multicast</td></tr>
        </table>
      </div>
      <div class="card" style="padding:24px">
        <h3 style="margin-bottom:16px;color:var(--accent-green)">Subnet Mask Cheat Sheet</h3>
        <table class="cheat-table">
          <tr><th>CIDR</th><th>Subnet Mask</th><th>Hosts</th></tr>
          <tr><td>/30</td><td>255.255.255.252</td><td>2</td></tr>
          <tr><td>/29</td><td>255.255.255.248</td><td>6</td></tr>
          <tr><td>/28</td><td>255.255.255.240</td><td>14</td></tr>
          <tr><td>/27</td><td>255.255.255.224</td><td>30</td></tr>
          <tr><td>/26</td><td>255.255.255.192</td><td>62</td></tr>
          <tr><td>/25</td><td>255.255.255.128</td><td>126</td></tr>
          <tr><td>/24</td><td>255.255.255.0</td><td>254</td></tr>
          <tr><td>/23</td><td>255.255.254.0</td><td>510</td></tr>
          <tr><td>/22</td><td>255.255.252.0</td><td>1022</td></tr>
          <tr><td>/16</td><td>255.255.0.0</td><td>65534</td></tr>
        </table>
      </div>
    </div>
    <div class="card" style="padding:24px;margin-bottom:24px">
      <h3 style="margin-bottom:16px">🧮 Kalkulator Subnet</h3>
      <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
        <div class="crypto-input-group" style="flex:1">
          <label>IP Address</label>
          <input class="crypto-input" id="subnet-ip" value="192.168.1.0" placeholder="192.168.1.0">
        </div>
        <div class="crypto-input-group" style="flex:0 0 120px">
          <label>CIDR Prefix</label>
          <input class="crypto-input" id="subnet-cidr" value="24" type="number" min="1" max="32">
        </div>
        <div style="display:flex;align-items:flex-end">
          <button class="btn btn-primary" onclick="calcSubnet()">Hitung →</button>
        </div>
      </div>
      <div id="subnet-result" class="code-block" style="color:var(--accent-green)">Masukkan IP dan CIDR lalu klik Hitung</div>
    </div>
    <div class="info-box info">
      <span class="info-icon">📌</span>
      <div><strong>IP Private (RFC 1918):</strong><br>
      10.0.0.0/8 — Large enterprise<br>
      172.16.0.0/12 — Medium network<br>
      192.168.0.0/16 — Home/small office (yang paling sering kamu lihat!)</div>
    </div>
  `;
}

function getTopologyContent() {
  return `
    <div class="section-header">
      <div class="lesson-title">Topologi Jaringan</div>
      <div class="lesson-subtitle">Berbagai cara mengatur koneksi antar perangkat dalam jaringan</div>
    </div>
    <div class="modules-grid" style="margin-bottom:24px">
      ${[
        {icon:'⭐', name:'Star', color:'#4f8ef7', pros:'Mudah dikonfigurasi, mudah troubleshoot, satu kabel putus tidak mempengaruhi yang lain', cons:'Bergantung pada switch/hub pusat — jika central device rusak, seluruh jaringan mati', use:'LAN rumah, kantor kecil'},
        {icon:'🚌', name:'Bus', color:'#f59e0b', pros:'Murah, mudah dipasang, cocok untuk jaringan kecil', cons:'Seluruh jaringan down jika kabel utama rusak, performa turun jika banyak perangkat', use:'Jaringan lama (Ethernet coaxial)'},
        {icon:'💍', name:'Ring', color:'#7c3aed', pros:'Performa konsisten, tidak ada collision', cons:'Jika satu node rusak (tanpa redundansi), seluruh jaringan terputus', use:'Token Ring, SONET/SDH'},
        {icon:'🕸️', name:'Mesh', color:'#10b981', pros:'Sangat fault tolerant, multiple path, keamanan lebih baik', cons:'Mahal, kompleks untuk dikonfigurasi dan maintain', use:'Internet backbone, WAN kritis'},
        {icon:'🌲', name:'Tree', color:'#06b6d4', pros:'Mudah diperluas (skalabel), mudah manajemen', cons:'Bergantung pada root, jika backbone rusak jaringan terbagi', use:'Jaringan perusahaan besar'},
        {icon:'🔀', name:'Hybrid', color:'#ef4444', pros:'Fleksibel, menggabungkan kelebihan topologi lain', cons:'Kompleks, mahal', use:'Jaringan enterprise modern'},
      ].map(t => `
        <div class="module-card" style="cursor:default">
          <span class="module-icon">${t.icon}</span>
          <div class="module-category" style="color:${t.color}">Topologi ${t.name}</div>
          <div style="margin-bottom:12px">
            <div style="font-size:12px;color:var(--accent-green);margin-bottom:4px">✅ Keunggulan:</div>
            <div style="font-size:13px;color:var(--text-secondary)">${t.pros}</div>
          </div>
          <div style="margin-bottom:12px">
            <div style="font-size:12px;color:var(--accent-red);margin-bottom:4px">❌ Kelemahan:</div>
            <div style="font-size:13px;color:var(--text-secondary)">${t.cons}</div>
          </div>
          <div class="module-tag">${t.use}</div>
        </div>
      `).join('')}
    </div>
    <div class="info-box info">
      <span class="info-icon">🌐</span>
      <div><strong>Fakta menarik:</strong> Internet menggunakan topologi Mesh terdistribusi! ARPANET (nenek moyang internet) dirancang khusus agar tahan serangan nuklir — jika satu jalur terputus, data bisa dialihkan melalui jalur lain.</div>
    </div>
  `;
}

function getSecurityBasicContent() {
  return `
    <div class="section-header">
      <div class="lesson-title">Keamanan Jaringan Dasar</div>
      <div class="lesson-subtitle">Prinsip, alat, dan praktik keamanan jaringan modern</div>
    </div>
    <div class="info-box info" style="margin-bottom:24px">
      <span class="info-icon">🔐</span>
      <div><strong>CIA Triad</strong> — tiga pilar keamanan informasi:<br>
      <strong style="color:var(--accent-primary)">C</strong>onfidentiality (kerahasiaan) | 
      <strong style="color:var(--accent-green)">I</strong>ntegrity (integritas) | 
      <strong style="color:var(--accent-yellow)">A</strong>vailability (ketersediaan)</div>
    </div>
    <div class="defense-grid" style="margin-bottom:24px">
      ${DEFENSES.map(d => `
        <div class="defense-card">
          <div class="defense-icon">${d.icon}</div>
          <div class="defense-name">${d.name}</div>
          <div class="defense-desc">${d.desc}</div>
        </div>
      `).join('')}
    </div>
    <hr class="divider">
    <h3 style="margin-bottom:16px">🌐 Konsep DMZ (Demilitarized Zone)</h3>
    <div class="code-block">
Internet → [Firewall External] → [DMZ Zone]         → [Firewall Internal] → [LAN Internal]
                                  Web Server                                  Database Server
                                  Mail Server                                 File Server
                                  DNS Server                                  Internal Apps
    <span class="code-green">PUBLIC</span>                      <span class="code-yellow">SEMI-TRUSTED</span>                     <span class="code-red">PRIVATE</span></div>
    <div class="info-box warning" style="margin-top:16px">
      <span class="info-icon">⚠️</span>
      <div>Server yang diakses publik (web, mail) diletakkan di DMZ — jika dikompromasi, penyerang tidak langsung masuk ke jaringan internal!</div>
    </div>
  `;
}

function getAttacksLessonContent() {
  return `
    <div class="section-header">
      <div class="lesson-title">Serangan Jaringan — Kenali Ancamannya</div>
      <div class="lesson-subtitle">Klik setiap kartu untuk melihat detail serangan dan cara mitigasinya</div>
    </div>
    <div class="attack-grid">
      ${ATTACKS.map((a, i) => `
        <div class="attack-card" onclick="showAttackModal(${i})">
          <div class="attack-icon">${a.icon}</div>
          <div class="attack-name">${a.name}</div>
          <div class="attack-desc">${a.desc}</div>
          <div class="attack-severity">
            <span style="font-size:11px;color:var(--text-muted)">Tingkat Bahaya</span>
            <div class="severity-bar"><div class="severity-fill" style="width:${a.severity}%"></div></div>
            <span style="font-size:11px;color:var(--accent-red)">${a.severity}%</span>
          </div>
        </div>
      `).join('')}
    </div>
    <div id="attack-modal" class="modal-overlay" onclick="this.classList.remove('open')">
      <div class="modal" onclick="event.stopPropagation()">
        <span class="modal-close" onclick="document.getElementById('attack-modal').classList.remove('open')">✕</span>
        <div class="modal-title" id="modal-title"></div>
        <div class="modal-body" id="modal-body"></div>
      </div>
    </div>
  `;
}

function getCryptoContent() {
  return `
    <div class="section-header">
      <div class="lesson-title">Enkripsi & Kriptografi</div>
      <div class="lesson-subtitle">Coba langsung enkripsi teks di browser kamu!</div>
    </div>
    <div class="two-col" style="margin-bottom:24px">
      <div class="card" style="padding:24px">
        <h3 style="color:var(--accent-primary);margin-bottom:12px">🔒 Symmetric Encryption</h3>
        <p style="font-size:14px;color:var(--text-secondary);line-height:1.7">Satu kunci untuk enkripsi DAN dekripsi. Sangat cepat, cocok untuk data besar. Masalah: bagaimana cara berbagi kunci dengan aman?</p>
        <div class="tag-list" style="margin-top:12px"><span class="tag">AES-256</span><span class="tag">ChaCha20</span><span class="tag">3DES</span></div>
      </div>
      <div class="card" style="padding:24px">
        <h3 style="color:var(--accent-secondary);margin-bottom:12px">🔑 Asymmetric Encryption</h3>
        <p style="font-size:14px;color:var(--text-secondary);line-height:1.7">Dua kunci: Public key (boleh dibagi) dan Private key (rahasia). Public key untuk enkripsi, private key untuk dekripsi. Lebih lambat tapi aman.</p>
        <div class="tag-list" style="margin-top:12px"><span class="tag">RSA</span><span class="tag">ECC</span><span class="tag">ECDH</span></div>
      </div>
    </div>
    <div class="crypto-demo">
      <h3 style="margin-bottom:20px">🔬 Lab Kriptografi Interaktif</h3>
      <div class="tabs" id="crypto-tabs">
        <div class="tab active" onclick="switchCryptoTab('caesar')">Caesar Cipher</div>
        <div class="tab" onclick="switchCryptoTab('base64')">Base64</div>
        <div class="tab" onclick="switchCryptoTab('hash')">Hashing (SHA)</div>
        <div class="tab" onclick="switchCryptoTab('xor')">XOR Cipher</div>
      </div>
      <div id="crypto-lab"></div>
    </div>
    <hr class="divider">
    <div class="two-col">
      <div>
        <h3 style="margin-bottom:12px">🏷️ Hashing vs Enkripsi</h3>
        <table class="cheat-table">
          <tr><th></th><th>Hashing</th><th>Enkripsi</th></tr>
          <tr><td>Reversible?</td><td>❌ Tidak</td><td>✅ Ya (dengan kunci)</td></tr>
          <tr><td>Tujuan</td><td>Verifikasi integritas</td><td>Kerahasiaan</td></tr>
          <tr><td>Output</td><td>Fixed length</td><td>Variable length</td></tr>
          <tr><td>Contoh</td><td>Password, checksum</td><td>Data, komunikasi</td></tr>
        </table>
      </div>
      <div>
        <h3 style="margin-bottom:12px">🔐 TLS Handshake (HTTPS)</h3>
        <div class="code-block" style="font-size:11px">
1. Client Hello (cipher suites, random)
2. Server Hello + Certificate
3. Client verifikasi sertifikat
4. Key Exchange (ECDH/RSA)
5. Session Key dibuat (symmetric)
6. <span class="code-green">✓ Komunikasi terenkripsi!</span></div>
      </div>
    </div>
  `;
}

window.showAttackModal = function(idx) {
  const attack = ATTACKS[idx];
  document.getElementById('modal-title').innerHTML = `${attack.icon} ${attack.name}`;
  document.getElementById('modal-body').innerHTML = attack.details;
  document.getElementById('attack-modal').classList.add('open');
};

// ===================== SUBNET CALCULATOR =====================
window.calcSubnet = function() {
  const ipStr = document.getElementById('subnet-ip')?.value;
  const cidr = parseInt(document.getElementById('subnet-cidr')?.value);
  const result = document.getElementById('subnet-result');
  if (!ipStr || !cidr || !result) return;
  if (cidr < 1 || cidr > 32) { result.textContent = 'CIDR harus antara 1-32'; return; }

  const ipParts = ipStr.split('.').map(Number);
  if (ipParts.length !== 4 || ipParts.some(p => isNaN(p) || p < 0 || p > 255)) {
    result.textContent = 'IP address tidak valid';
    return;
  }

  const mask = ~((1 << (32 - cidr)) - 1) >>> 0;
  const ipNum = ((ipParts[0] << 24) | (ipParts[1] << 16) | (ipParts[2] << 8) | ipParts[3]) >>> 0;
  const networkNum = (ipNum & mask) >>> 0;
  const broadcastNum = (networkNum | (~mask >>> 0)) >>> 0;
  const firstHost = networkNum + 1;
  const lastHost = broadcastNum - 1;
  const hosts = Math.max(0, (1 << (32 - cidr)) - 2);

  const toIP = n => [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.');
  const toMask = m => [(m >>> 24) & 255, (m >>> 16) & 255, (m >>> 8) & 255, m & 255].join('.');

  result.innerHTML = `Network Address  : ${toIP(networkNum)}
Broadcast Address: ${toIP(broadcastNum)}
Subnet Mask      : ${toMask(mask)}
First Host       : ${toIP(firstHost)}
Last Host        : ${toIP(lastHost)}
Total Hosts      : ${hosts.toLocaleString()}
CIDR Notation    : ${ipStr}/${cidr}`;
};

// ===================== CRYPTO LAB =====================
function initCryptoDemo() {
  switchCryptoTab('caesar');
}

window.switchCryptoTab = function(tab) {
  document.querySelectorAll('#crypto-tabs .tab').forEach((t, i) => {
    const tabs = ['caesar', 'base64', 'hash', 'xor'];
    t.classList.toggle('active', tabs[i] === tab);
  });
  const lab = document.getElementById('crypto-lab');
  if (!lab) return;
  if (tab === 'caesar') {
    lab.innerHTML = `
      <div class="crypto-input-group"><label>Teks Input</label><textarea class="crypto-textarea" id="c-input" placeholder="Tulis teks di sini...">Halo Jaringan!</textarea></div>
      <div style="display:flex;gap:12px;align-items:flex-end;margin-bottom:12px">
        <div class="crypto-input-group" style="flex:0 0 150px"><label>Shift (1-25)</label><input class="crypto-input" id="c-shift" type="number" value="3" min="1" max="25"></div>
        <button class="btn btn-primary" onclick="doCaesar()">🔒 Enkripsi</button>
        <button class="btn btn-ghost" onclick="doCaesarDecrypt()">🔓 Dekripsi</button>
      </div>
      <div class="crypto-grid">
        <div><label style="font-size:12px;color:var(--text-muted);display:block;margin-bottom:4px">Output Enkripsi:</label><div class="crypto-output" id="c-out">—</div></div>
        <div><label style="font-size:12px;color:var(--text-muted);display:block;margin-bottom:4px">Output Dekripsi:</label><div class="crypto-output" id="c-dec">—</div></div>
      </div>
      <div class="info-box info" style="margin-top:12px"><span class="info-icon">💡</span><div>Caesar Cipher menggeser setiap huruf sejumlah posisi. Salah satu cipher tertua — digunakan Julius Caesar! Sangat mudah dipecahkan dengan brute force karena hanya 25 kemungkinan.</div></div>
    `;
  } else if (tab === 'base64') {
    lab.innerHTML = `
      <div class="crypto-input-group"><label>Teks Input</label><textarea class="crypto-textarea" id="b-input" placeholder="Teks untuk di-encode...">Halo Jaringan!</textarea></div>
      <div style="display:flex;gap:12px;margin-bottom:12px">
        <button class="btn btn-primary" onclick="doBase64Enc()">📤 Encode</button>
        <button class="btn btn-ghost" onclick="doBase64Dec()">📥 Decode</button>
      </div>
      <div class="crypto-grid">
        <div><label style="font-size:12px;color:var(--text-muted);display:block;margin-bottom:4px">Base64 Encoded:</label><div class="crypto-output" id="b-out">—</div></div>
        <div><label style="font-size:12px;color:var(--text-muted);display:block;margin-bottom:4px">Decoded:</label><div class="crypto-output" id="b-dec">—</div></div>
      </div>
      <div class="info-box warning" style="margin-top:12px"><span class="info-icon">⚠️</span><div>Base64 bukan enkripsi — hanya encoding! Siapapun bisa decode tanpa kunci. Digunakan untuk mengirim data biner dalam format teks (email attachment, JWT token).</div></div>
    `;
  } else if (tab === 'hash') {
    lab.innerHTML = `
      <div class="crypto-input-group"><label>Teks Input</label><textarea class="crypto-textarea" id="h-input" placeholder="Tulis teks untuk di-hash...">password123</textarea></div>
      <div style="margin-bottom:12px"><button class="btn btn-primary" onclick="doHash()">🔨 Generate Hash</button></div>
      <div style="display:flex;flex-direction:column;gap:8px" id="h-out">
        <div class="info-box info"><span class="info-icon">💡</span><div>Klik tombol di atas untuk melihat hash!</div></div>
      </div>
      <div class="info-box danger" style="margin-top:12px"><span class="info-icon">🚨</span><div><strong>Jangan gunakan MD5 atau SHA-1 untuk password!</strong> Gunakan bcrypt, Argon2, atau PBKDF2 yang dirancang khusus untuk password hashing dengan salt.</div></div>
    `;
  } else if (tab === 'xor') {
    lab.innerHTML = `
      <div class="crypto-input-group"><label>Teks Input</label><textarea class="crypto-textarea" id="x-input" placeholder="Teks untuk dienkripsi...">Secret Message</textarea></div>
      <div class="crypto-input-group"><label>Kunci (key)</label><input class="crypto-input" id="x-key" value="mykey" placeholder="Masukkan kunci..."></div>
      <div style="display:flex;gap:12px;margin-bottom:12px">
        <button class="btn btn-primary" onclick="doXOR()">🔒 XOR Enkripsi/Dekripsi</button>
      </div>
      <div><label style="font-size:12px;color:var(--text-muted);display:block;margin-bottom:4px">Output (Hex):</label><div class="crypto-output" id="x-out">—</div></div>
      <div class="info-box info" style="margin-top:12px"><span class="info-icon">💡</span><div>XOR cipher bersifat simetris: enkripsi dan dekripsi menggunakan operasi yang sama! Jika kuncinya benar-benar acak dan sepanjang pesan, ini disebut "One-Time Pad" — cipher yang secara teori tidak bisa dipecahkan.</div></div>
    `;
  }
};

window.doCaesar = function() {
  const text = document.getElementById('c-input')?.value || '';
  const shift = parseInt(document.getElementById('c-shift')?.value) || 3;
  const enc = text.replace(/[a-zA-Z]/g, c => {
    const base = c >= 'a' ? 97 : 65;
    return String.fromCharCode(((c.charCodeAt(0) - base + shift) % 26) + base);
  });
  const out = document.getElementById('c-out');
  if (out) out.textContent = enc;
};

window.doCaesarDecrypt = function() {
  const text = document.getElementById('c-out')?.textContent || '';
  const shift = parseInt(document.getElementById('c-shift')?.value) || 3;
  const dec = text.replace(/[a-zA-Z]/g, c => {
    const base = c >= 'a' ? 97 : 65;
    return String.fromCharCode(((c.charCodeAt(0) - base - shift + 26) % 26) + base);
  });
  const out = document.getElementById('c-dec');
  if (out) out.textContent = dec;
};

window.doBase64Enc = function() {
  const text = document.getElementById('b-input')?.value || '';
  const out = document.getElementById('b-out');
  try { if (out) out.textContent = btoa(unescape(encodeURIComponent(text))); }
  catch (e) { if (out) out.textContent = 'Error: ' + e.message; }
};

window.doBase64Dec = function() {
  const text = document.getElementById('b-input')?.value || '';
  const out = document.getElementById('b-dec');
  try { if (out) out.textContent = decodeURIComponent(escape(atob(text))); }
  catch (e) { if (out) out.textContent = 'Error: Input bukan Base64 valid!'; }
};

window.doHash = async function() {
  const text = document.getElementById('h-input')?.value || '';
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const out = document.getElementById('h-out');
  if (!out) return;
  
  const algos = ['SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'];
  let html = '';
  for (const algo of algos) {
    const hash = await crypto.subtle.digest(algo, data);
    const hex = Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
    html += `<div><label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:4px">${algo}:</label><div class="crypto-output" style="font-size:11px">${hex}</div></div>`;
  }
  out.innerHTML = html;
};

window.doXOR = function() {
  const text = document.getElementById('x-input')?.value || '';
  const key = document.getElementById('x-key')?.value || '';
  const out = document.getElementById('x-out');
  if (!key || !out) return;
  const bytes = [];
  for (let i = 0; i < text.length; i++) {
    bytes.push((text.charCodeAt(i) ^ key.charCodeAt(i % key.length)).toString(16).padStart(2, '0'));
  }
  out.textContent = bytes.join(' ');
};

// ===================== DASHBOARD RENDERING =====================
function renderDashboard() {
  const recentGrid = document.getElementById('dashboard-recent');
  if (recentGrid) {
    recentGrid.innerHTML = MODULES.slice(0, 4).map(m => `
      <div class="module-card" onclick="navigate('learn');setTimeout(()=>openLesson('${m.id}'),50)">
        <span class="module-icon">${m.icon}</span>
        <div class="module-category">${m.category}</div>
        <div class="module-title">${m.title}</div>
        <div class="module-desc">${m.desc}</div>
        <div class="module-meta">
          <span class="module-tag ${m.tagClass}">${m.tag}</span>
          <span class="module-progress">${m.difficulty}</span>
        </div>
      </div>
    `).join('');
  }

  // Render Peta Belajar
  const petaBelajar = document.getElementById('peta-belajar-list');
  if (petaBelajar) {
    const steps = [
      {step:1, title:'Dasar Jaringan', desc:'OSI Model, TCP/IP, Protokol', nav:'learn'},
      {step:2, title:'Topologi & Perangkat', desc:'Star, Mesh, Router, Switch', nav:'topology'},
      {step:3, title:'Keamanan Jaringan', desc:'Firewall, VPN, IDS/IPS', nav:'security'},
      {step:4, title:'Serangan Siber', desc:'DDoS, MITM, SQL Injection', nav:'security'},
      {step:5, title:'Kriptografi', desc:'Enkripsi, Hashing, TLS', nav:'learn'},
      {step:6, title:'Uji Pengetahuan', desc:'Quiz 10 soal interaktif', nav:'quiz'},
    ];
    petaBelajar.innerHTML = steps.map(s => `
      <div onclick="navigate('${s.nav}')" style="display:flex;align-items:center;gap:14px;padding:12px;border-radius:10px;border:1px solid var(--border);cursor:pointer;transition:all .3s" onmouseover="this.style.borderColor='var(--border-hover)'" onmouseout="this.style.borderColor='var(--border)'">
        <div style="width:32px;height:32px;background:linear-gradient(135deg,var(--accent-primary),var(--accent-secondary));border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0">${s.step}</div>
        <div>
          <div style="font-size:14px;font-weight:600">${s.title}</div>
          <div style="font-size:12px;color:var(--text-muted)">${s.desc}</div>
        </div>
        <div style="margin-left:auto;color:var(--text-muted)">→</div>
      </div>
    `).join('');
  }
}


// ===================== LEARN MODULES GRID =====================
function renderModulesGrid() {
  const grid = document.getElementById('learn-module-grid');
  if (!grid) return;
  grid.innerHTML = MODULES.map(m => `
    <div class="module-card" onclick="openLesson('${m.id}')">
      <span class="module-icon">${m.icon}</span>
      <div class="module-category">${m.category}</div>
      <div class="module-title">${m.title}</div>
      <div class="module-desc">${m.desc}</div>
      <div class="module-meta">
        <span class="module-tag ${m.tagClass}">${m.tag}</span>
        <span class="module-progress">${m.difficulty}</span>
      </div>
      <div class="module-progress-bar"><div class="module-progress-fill" style="width:${m.progress}%"></div></div>
    </div>
  `).join('');
}

// ===================== DEVICES GRID =====================
function renderDevicesGrid() {
  const grid = document.getElementById('devices-grid');
  if (!grid) return;
  const devices = [
    {icon:'📡', name:'Router', desc:'Menghubungkan jaringan berbeda dan memilih jalur terbaik untuk paket data (Layer 3). Menggunakan routing protocol seperti OSPF, BGP, RIP.', layer:'Layer 3'},
    {icon:'🔀', name:'Switch', desc:'Menghubungkan perangkat dalam satu jaringan LAN menggunakan MAC address table. Lebih cerdas dari hub — hanya mengirim ke port tujuan (Layer 2).', layer:'Layer 2'},
    {icon:'📶', name:'Access Point', desc:'Menghubungkan perangkat wireless ke jaringan kabel. Menggunakan frekuensi 2.4GHz dan 5GHz (Wi-Fi 802.11 a/b/g/n/ac/ax).', layer:'Layer 1-2'},
    {icon:'🧱', name:'Firewall', desc:'Memfilter traffic berdasarkan aturan keamanan. Bisa Stateful (melacak koneksi) atau Next-Gen Firewall (deep packet inspection, IDS/IPS).', layer:'Layer 3-7'},
    {icon:'📦', name:'Hub (Legacy)', desc:'Mengirim data ke SEMUA port (broadcast). Sudah digantikan switch. Tidak efisien dan rentan disadap karena semua perangkat menerima semua data.', layer:'Layer 1'},
    {icon:'🌉', name:'Bridge', desc:'Menghubungkan dua segmen jaringan yang sama dan meneruskan frame berdasarkan MAC address. Precursor dari switch modern.', layer:'Layer 2'},
  ];
  grid.innerHTML = devices.map(d => `
    <div class="module-card" style="cursor:default">
      <span class="module-icon">${d.icon}</span>
      <div class="module-title">${d.name}</div>
      <div class="module-desc">${d.desc}</div>
      <span class="module-tag">${d.layer}</span>
    </div>
  `).join('');
}

// ===================== SECURITY PAGE =====================
function renderSecurityPage() {
  const attacks = document.getElementById('security-attacks');
  const defenses = document.getElementById('security-defenses');
  if (attacks) {
    attacks.innerHTML = ATTACKS.map((a, i) => `
      <div class="attack-card" onclick="showSecurityModal(${i})">
        <div class="attack-icon">${a.icon}</div>
        <div class="attack-name">${a.name}</div>
        <div class="attack-desc">${a.desc}</div>
        <div class="attack-severity">
          <span style="font-size:11px;color:var(--text-muted)">Bahaya</span>
          <div class="severity-bar"><div class="severity-fill" style="width:${a.severity}%"></div></div>
          <span style="font-size:11px;color:var(--accent-red)">${a.severity}%</span>
        </div>
      </div>
    `).join('');
  }
  if (defenses) {
    defenses.innerHTML = DEFENSES.map(d => `
      <div class="defense-card">
        <div class="defense-icon">${d.icon}</div>
        <div class="defense-name">${d.name}</div>
        <div class="defense-desc">${d.desc}</div>
      </div>
    `).join('');
  }
}

window.showSecurityModal = function(idx) {
  const attack = ATTACKS[idx];
  const modal = document.getElementById('security-modal');
  if (!modal) return;
  document.getElementById('sec-modal-title').innerHTML = `${attack.icon} ${attack.name}`;
  document.getElementById('sec-modal-body').innerHTML = attack.details;
  modal.classList.add('open');
};

// ===================== CHEATSHEET =====================
function renderCheatsheet() {
  const container = document.getElementById('cheat-protocols');
  if (!container) return;
  container.innerHTML = `
    <div class="cheat-card">
      <div class="cheat-title">📡 Port Penting Wajib Hafal</div>
      <table class="cheat-table">
        <tr><th>Port</th><th>Protokol</th><th>Keterangan</th></tr>
        ${[
          ['20/21','FTP','Transfer file (tidak aman)'],
          ['22','SSH/SFTP','Remote access aman'],
          ['23','Telnet','Remote (jangan digunakan!)'],
          ['25','SMTP','Kirim email'],
          ['53','DNS','Domain name resolution'],
          ['67/68','DHCP','Alokasi IP otomatis'],
          ['80','HTTP','Web tidak terenkripsi'],
          ['110','POP3','Ambil email'],
          ['143','IMAP','Akses email'],
          ['443','HTTPS','Web terenkripsi'],
          ['3306','MySQL','Database MySQL'],
          ['3389','RDP','Remote Desktop'],
          ['5432','PostgreSQL','Database PostgreSQL'],
          ['8080','HTTP Alt','Web server alternatif'],
        ].map(([p,n,d]) => `<tr><td>${p}</td><td>${n}</td><td>${d}</td></tr>`).join('')}
      </table>
    </div>
    <div class="cheat-card">
      <div class="cheat-title">🌐 OSI Layers Quick Reference</div>
      <table class="cheat-table">
        <tr><th>Layer</th><th>Nama</th><th>Protokol Utama</th></tr>
        ${OSI_LAYERS.map(l => `<tr><td>${l.num}</td><td>${l.name}</td><td style="font-size:11px">${l.proto.split(',')[0].trim()}, ...</td></tr>`).join('')}
      </table>
    </div>
    <div class="cheat-card">
      <div class="cheat-title">🔒 Subnet Cheat Sheet</div>
      <table class="cheat-table">
        <tr><th>CIDR</th><th>Mask</th><th>Hosts</th><th>Subnets/C</th></tr>
        ${[
          ['/24','255.255.255.0','254','1'],
          ['/25','255.255.255.128','126','2'],
          ['/26','255.255.255.192','62','4'],
          ['/27','255.255.255.224','30','8'],
          ['/28','255.255.255.240','14','16'],
          ['/29','255.255.255.248','6','32'],
          ['/30','255.255.255.252','2','64'],
        ].map(([c,m,h,s]) => `<tr><td>${c}</td><td>${m}</td><td>${h}</td><td>${s}</td></tr>`).join('')}
      </table>
    </div>
    <div class="cheat-card">
      <div class="cheat-title">🛡️ Security Quick Reference</div>
      <table class="cheat-table">
        <tr><th>Konsep</th><th>Keterangan</th></tr>
        <tr><td>CIA Triad</td><td>Confidentiality, Integrity, Availability</td></tr>
        <tr><td>AAA</td><td>Authentication, Authorization, Accounting</td></tr>
        <tr><td>Zero Trust</td><td>"Never trust, always verify"</td></tr>
        <tr><td>Defense in Depth</td><td>Multiple layers of security</td></tr>
        <tr><td>Least Privilege</td><td>Akses minimal yang diperlukan</td></tr>
        <tr><td>Patch Management</td><td>Update sistem secara rutin</td></tr>
      </table>
    </div>
    <div class="cheat-card">
      <div class="cheat-title">🔑 Algoritma Kriptografi</div>
      <table class="cheat-table">
        <tr><th>Algoritma</th><th>Jenis</th><th>Kegunaan</th></tr>
        <tr><td>AES-256</td><td>Symmetric</td><td>Enkripsi data, VPN</td></tr>
        <tr><td>RSA-2048</td><td>Asymmetric</td><td>TLS, tanda tangan</td></tr>
        <tr><td>ECC (ECDH)</td><td>Asymmetric</td><td>TLS modern, lebih efisien</td></tr>
        <tr><td>SHA-256</td><td>Hash</td><td>Integritas data, TLS</td></tr>
        <tr><td>bcrypt</td><td>Hash</td><td>Hashing password</td></tr>
        <tr><td>ChaCha20</td><td>Symmetric</td><td>Mobile, TLS 1.3</td></tr>
      </table>
    </div>
    <div class="cheat-card">
      <div class="cheat-title">⚡ Perintah Jaringan Penting</div>
      <table class="cheat-table">
        <tr><th>Perintah</th><th>Fungsi</th></tr>
        <tr><td>ping [host]</td><td>Cek konektivitas ICMP</td></tr>
        <tr><td>tracert/traceroute</td><td>Lacak jalur paket</td></tr>
        <tr><td>ipconfig/ifconfig</td><td>Info konfigurasi IP</td></tr>
        <tr><td>nslookup [domain]</td><td>Query DNS</td></tr>
        <tr><td>netstat -an</td><td>Lihat koneksi aktif</td></tr>
        <tr><td>nmap [target]</td><td>Port scanning</td></tr>
        <tr><td>arp -a</td><td>Lihat ARP cache</td></tr>
        <tr><td>route print</td><td>Lihat routing table</td></tr>
      </table>
    </div>
    ${window.CISCO_CLI ? window.CISCO_CLI.map(section => `
    <div class="cheat-card">
      <div class="cheat-title">${section.category}</div>
      <table class="cheat-table">
        <tr><th style="width:45%">Perintah Cisco IOS</th><th>Fungsi</th></tr>
        ${section.commands.map(c => `<tr><td><code style="font-size:11px;color:#7dd3fc">${c.cmd}</code></td><td>${c.desc}</td></tr>`).join('')}
      </table>
    </div>
    `).join('') : ''}
  `;
}

// ===================== PRAKTIKUM RENDERING =====================
function renderPraktikum() {
  const grid = document.getElementById('praktikum-grid');
  if (!grid || !window.PRAKTIKUM_MODULES) return;
  grid.innerHTML = window.PRAKTIKUM_MODULES.map(p => `
    <div class="module-card praktikum-card" onclick="openPraktikumModal(${p.id})">
      <div>
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px">
          <span class="module-icon" style="margin-bottom:0">${p.icon}</span>
          <span class="module-tag green">Modul ${p.id}</span>
        </div>
        <div class="module-category">Cisco Packet Tracer Lab</div>
        <div class="module-title">${p.title}</div>
        <div class="module-desc">${p.desc}</div>
      </div>
      <div style="margin-top:20px;display:flex;flex-direction:column;gap:10px" onclick="event.stopPropagation()">
        <button class="btn btn-primary" style="width:100%;font-size:13.5px;padding:10px" onclick="openPraktikumModal(${p.id})">
          📖 Panduan & Langkah Kerja
        </button>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <a href="/praktikum/${encodeURIComponent(p.file)}" download class="btn btn-ghost" style="font-size:11.5px;padding:8px" title="Unduh Modul Panduan Lengkap">
            📄 Modul (.docx)
          </a>
          <a href="/praktikum/${encodeURIComponent(`Laprak ${p.id} - Template Modul ${p.id}.docx`)}" download class="btn btn-ghost" style="font-size:11.5px;padding:8px" title="Unduh Template Laporan">
            📝 Laprak (.docx)
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

window.renderPraktikum = renderPraktikum;

function openPraktikumModal(id) {
  const p = (window.PRAKTIKUM_MODULES || []).find(m => m.id == id);
  if (!p) {
    console.error('Modul praktikum tidak ditemukan untuk ID:', id);
    return;
  }
  const modal = document.getElementById('praktikum-modal');
  const badge = document.getElementById('prak-modal-badge');
  const title = document.getElementById('prak-modal-title');
  const body = document.getElementById('prak-modal-body');
  if (!modal || !title || !body) return;

  if (badge) badge.textContent = `Lab Praktikum ${p.id} — Cisco Packet Tracer`;
  title.innerHTML = `${p.icon} Modul ${p.id}: ${p.title}`;

  // Format steps nicely with code blocks for Cisco CLI commands
  const formattedSteps = p.langkah.map(step => {
    // Check if step contains Cisco commands (Router#, Switch#, config, etc.)
    if (step.includes('Router(') || step.includes('Switch(') || step.includes('show ') || step.includes('ip route') || step.includes('access-list') || step.includes('vlan ')) {
      return `
        <li style="margin-bottom:12px">
          <div>${step.split(':')[0] || 'Perintah'}:</div>
          <pre class="code-block" style="margin-top:6px;padding:10px 14px"><code class="code-cyan">${step}</code></pre>
        </li>
      `;
    }
    return `<li style="margin-bottom:8px">${step}</li>`;
  }).join('');

  body.innerHTML = `
    <div class="info-box info" style="margin-bottom:20px">
      <span class="info-icon">🎯</span>
      <div>
        <strong style="color:#ffffff;display:block;margin-bottom:6px">Tujuan Pembelajaran:</strong>
        <ul style="margin-left:18px;margin-bottom:0;line-height:1.7">
          ${p.tujuan.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div style="background:rgba(255,255,255,0.02);border:1px solid var(--border);border-radius:var(--radius-sm);padding:20px;margin-bottom:20px">
      <h4 style="margin-bottom:14px;color:#60a5fa;display:flex;align-items:center;gap:8px">
        <span>📋</span> Langkah-Langkah Konfigurasi:
      </h4>
      <ol style="margin-left:20px;line-height:1.75;color:var(--text-secondary);font-size:13.5px">
        ${formattedSteps}
      </ol>
    </div>

    <div class="info-box warning" style="margin-bottom:24px">
      <span class="info-icon">💡</span>
      <div><strong>Catatan Penting:</strong> ${p.catatan}</div>
    </div>

    <div style="background:rgba(19,28,49,0.7);border:1px solid rgba(59,130,246,0.3);border-radius:var(--radius-sm);padding:18px 22px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap">
      <div>
        <div style="font-weight:700;color:#ffffff;font-size:14px">📥 Download Berkas Praktikum</div>
        <div style="font-size:12px;color:var(--text-muted)">Gunakan template laporan untuk pengumpulan tugas.</div>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <a href="/praktikum/${encodeURIComponent(p.file)}" download class="btn btn-primary" style="text-decoration:none">
          📄 Download Panduan Modul (.docx)
        </a>
        <a href="/praktikum/${encodeURIComponent(`Laprak ${p.id} - Template Modul ${p.id}.docx`)}" download class="btn btn-ghost" style="text-decoration:none">
          📝 Download Template Laprak (.docx)
        </a>
      </div>
    </div>
  `;
  
  modal.classList.add('open');
}

window.openPraktikumModal = openPraktikumModal;

function closePraktikumModal() {
  const modal = document.getElementById('praktikum-modal');
  if (modal) modal.classList.remove('open');
}

window.closePraktikumModal = closePraktikumModal;

// Close modals on overlay backdrop click or Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closePraktikumModal();
    const secModal = document.getElementById('security-modal');
    if (secModal) secModal.classList.remove('open');
  }
});

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
  renderDashboard();
  renderModulesGrid();
  renderPraktikum();
  renderDevicesGrid();
  renderSecurityPage();
  renderCheatsheet();

  // Backdrop close listeners
  const prakModal = document.getElementById('praktikum-modal');
  if (prakModal) {
    prakModal.addEventListener('click', (e) => {
      if (e.target === prakModal) closePraktikumModal();
    });
  }

  const secModal = document.getElementById('security-modal');
  if (secModal) {
    secModal.addEventListener('click', (e) => {
      if (e.target === secModal) secModal.classList.remove('open');
    });
  }

  // Init network visualizer
  networkViz = new NetworkVisualizer('networkCanvas');
  if (networkViz && networkViz.canvas) networkViz.start();

  // Nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const section = item.dataset.nav;
      if (section) navigate(section);
    });
  });

  navigate('dashboard');
});

