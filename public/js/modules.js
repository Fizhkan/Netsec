// ===================== MODULE DATA =====================
const MODULES = [
  {
    id: 'osi',
    icon: '📡',
    category: 'Dasar Jaringan',
    title: 'Model OSI',
    desc: 'Pelajari 7 lapisan model OSI dan fungsinya dalam komunikasi jaringan.',
    tag: 'Fundamental', tagClass: '',
    difficulty: 'Pemula',
    progress: 0,
    section: 'learn'
  },
  {
    id: 'tcpip',
    icon: '🌐',
    category: 'Protokol',
    title: 'TCP/IP & UDP',
    desc: 'Memahami cara kerja TCP, UDP, dan protokol internet lainnya.',
    tag: 'Penting', tagClass: 'yellow',
    difficulty: 'Pemula',
    progress: 0,
    section: 'learn'
  },
  {
    id: 'protocols',
    icon: '🔗',
    category: 'Protokol',
    title: 'Protokol Jaringan',
    desc: 'HTTP, DNS, DHCP, SSH, FTP - pelajari semua protokol utama.',
    tag: 'Referensi', tagClass: 'green',
    difficulty: 'Menengah',
    progress: 0,
    section: 'learn'
  },
  {
    id: 'subnetting',
    icon: '🧮',
    category: 'IP & Routing',
    title: 'IP Address & Subnetting',
    desc: 'IPv4, IPv6, CIDR notation, dan cara menghitung subnet dengan mudah.',
    tag: 'Penting', tagClass: 'yellow',
    difficulty: 'Menengah',
    progress: 0,
    section: 'learn'
  },
  {
    id: 'topology',
    icon: '🕸️',
    category: 'Topologi',
    title: 'Topologi Jaringan',
    desc: 'Star, ring, mesh, bus — pahami kelebihan dan kekurangan setiap topologi.',
    tag: 'Dasar', tagClass: '',
    difficulty: 'Pemula',
    progress: 0,
    section: 'learn'
  },
  {
    id: 'security-basic',
    icon: '🔐',
    category: 'Keamanan',
    title: 'Keamanan Jaringan Dasar',
    desc: 'Firewall, IDS/IPS, VPN, dan prinsip dasar keamanan jaringan.',
    tag: 'Keamanan', tagClass: 'red',
    difficulty: 'Menengah',
    progress: 0,
    section: 'learn'
  },
  {
    id: 'attacks',
    icon: '⚔️',
    category: 'Keamanan',
    title: 'Serangan Jaringan',
    desc: 'DDoS, MITM, SQL Injection, XSS, Phishing — kenali ancaman nyata.',
    tag: 'Kritis', tagClass: 'red',
    difficulty: 'Lanjutan',
    progress: 0,
    section: 'security'
  },
  {
    id: 'crypto',
    icon: '🔑',
    category: 'Kriptografi',
    title: 'Enkripsi & Kriptografi',
    desc: 'Symmetric, asymmetric, hashing — coba langsung di browser!',
    tag: 'Interaktif', tagClass: 'green',
    difficulty: 'Lanjutan',
    progress: 0,
    section: 'learn'
  },
  {
    id: 'routing-static',
    icon: '🗺️',
    category: 'IP & Routing',
    title: 'Static Routing',
    desc: 'Pahami cara kerja routing table dan konfigurasi static route pada router Cisco.',
    tag: 'Penting', tagClass: 'yellow',
    difficulty: 'Menengah',
    progress: 0,
    section: 'learn'
  },
  {
    id: 'routing-dynamic',
    icon: '🔄',
    category: 'IP & Routing',
    title: 'Dynamic Routing (RIP & OSPF)',
    desc: 'RIPv2, OSPF, dan bagaimana router saling bertukar informasi routing secara otomatis.',
    tag: 'Lanjutan', tagClass: 'red',
    difficulty: 'Lanjutan',
    progress: 0,
    section: 'learn'
  },
  {
    id: 'vlan',
    icon: '🏗️',
    category: 'Switching',
    title: 'VLAN & Inter-VLAN Routing',
    desc: 'Virtual LAN, trunk port 802.1Q, dan router-on-a-stick untuk segmentasi jaringan.',
    tag: 'Penting', tagClass: 'yellow',
    difficulty: 'Menengah',
    progress: 0,
    section: 'learn'
  },
  {
    id: 'dhcp-nat',
    icon: '🌐',
    category: 'Layanan Jaringan',
    title: 'DHCP, DNS & NAT',
    desc: 'Layanan jaringan esensial: alokasi IP otomatis, resolusi nama, dan translasi alamat.',
    tag: 'Penting', tagClass: 'yellow',
    difficulty: 'Menengah',
    progress: 0,
    section: 'learn'
  },
  {
    id: 'acl',
    icon: '🛡️',
    category: 'Keamanan',
    title: 'Access Control List (ACL)',
    desc: 'Kontrol akses jaringan dengan Standard ACL dan Extended ACL pada router Cisco.',
    tag: 'Keamanan', tagClass: 'red',
    difficulty: 'Lanjutan',
    progress: 0,
    section: 'learn'
  },
  // ===== MODUL BARU DARI MATERI KAMPUS =====
  {
    id: 'ekosistem-internet',
    icon: '🌍',
    category: 'Ekosistem Internet',
    title: 'Ekosistem Internet',
    desc: 'Arsitektur internet global: AS, BGP, IXP, CDN, DNS hierarchy, dan model peering antar ISP.',
    tag: 'Kampus', tagClass: 'green',
    difficulty: 'Menengah',
    progress: 0,
    section: 'learn'
  },
  {
    id: 'email-protokol',
    icon: '📧',
    category: 'Protokol',
    title: 'SMTP, POP3, IMAP & MIME',
    desc: 'Cara kerja sistem email end-to-end: User Agent, MTA, MAA, dan format pesan MIME.',
    tag: 'Kampus', tagClass: 'green',
    difficulty: 'Menengah',
    progress: 0,
    section: 'learn'
  },
  {
    id: 'web-email-server',
    icon: '🖥️',
    category: 'Server Administration',
    title: 'Web & Email Server',
    desc: 'Instalasi dan konfigurasi Apache2, PHP-FPM, MariaDB, Postfix SMTP, dan Dovecot di Debian Linux.',
    tag: 'Kampus', tagClass: 'green',
    difficulty: 'Lanjutan',
    progress: 0,
    section: 'learn'
  },
  {
    id: 'devops-cicd',
    icon: '🚀',
    category: 'DevOps',
    title: 'DevOps & CI/CD',
    desc: 'Konsep DevOps, pipeline CI/CD, Docker container, Git workflow, dan transformasi digital.',
    tag: 'Kampus', tagClass: 'green',
    difficulty: 'Lanjutan',
    progress: 0,
    section: 'learn'
  },
  {
    id: 'linux-debian',
    icon: '🐧',
    category: 'System Administration',
    title: 'Linux System Admin (Debian 12)',
    desc: 'Administrasi sistem Debian 12: APT package manager, user management, systemd, dan konfigurasi server.',
    tag: 'Kampus', tagClass: 'green',
    difficulty: 'Menengah',
    progress: 0,
    section: 'learn'
  }
];


// ===================== QUIZ DATA =====================
const QUIZ_QUESTIONS = [
  {
    q: "Layer berapa dalam model OSI yang bertanggung jawab atas routing paket data?",
    opts: ["Layer 2 - Data Link", "Layer 3 - Network", "Layer 4 - Transport", "Layer 5 - Session"],
    correct: 1,
    explanation: "Layer 3 (Network) bertanggung jawab atas pengalamatan logis (IP) dan routing paket antar jaringan. Perangkat di layer ini adalah router."
  },
  {
    q: "Apa perbedaan utama antara TCP dan UDP?",
    opts: [
      "TCP lebih cepat dari UDP",
      "UDP menjamin pengiriman data, TCP tidak",
      "TCP memiliki mekanisme handshake 3-way, UDP tidak",
      "Keduanya sama saja"
    ],
    correct: 2,
    explanation: "TCP menggunakan 3-way handshake (SYN, SYN-ACK, ACK) untuk koneksi yang andal. UDP tidak ada handshake sehingga lebih cepat tapi tidak andal."
  },
  {
    q: "Port berapa yang digunakan protokol HTTPS?",
    opts: ["80", "21", "443", "8080"],
    correct: 2,
    explanation: "HTTPS (HTTP Secure) menggunakan port 443. HTTP biasa menggunakan port 80. FTP menggunakan port 21."
  },
  {
    q: "Apa kepanjangan dari DNS?",
    opts: ["Data Network Service", "Domain Name System", "Dynamic Network Setup", "Digital Node Service"],
    correct: 1,
    explanation: "DNS (Domain Name System) adalah sistem yang menerjemahkan nama domain (seperti google.com) menjadi alamat IP yang dapat dibaca komputer."
  },
  {
    q: "Serangan apa yang mencoba menghabiskan sumber daya server dengan mengirim banyak request?",
    opts: ["SQL Injection", "XSS", "DDoS (Distributed Denial of Service)", "MITM"],
    correct: 2,
    explanation: "DDoS (Distributed Denial of Service) menggunakan banyak komputer (botnet) untuk membanjiri server dengan request sehingga server tidak bisa melayani pengguna normal."
  },
  {
    q: "Subnet mask /24 dalam format desimal adalah?",
    opts: ["255.255.0.0", "255.0.0.0", "255.255.255.0", "255.255.255.128"],
    correct: 2,
    explanation: "/24 berarti 24 bit pertama adalah network bit, yang berarti 255.255.255.0. Subnet ini bisa menampung 254 host (256 - 2 untuk network dan broadcast)."
  },
  {
    q: "Apa fungsi dari ARP (Address Resolution Protocol)?",
    opts: [
      "Mengkonversi domain ke IP",
      "Mengkonversi IP ke MAC address",
      "Mengenkripsi data",
      "Mengalokasikan IP secara dinamis"
    ],
    correct: 1,
    explanation: "ARP bertugas mengkonversi IP address ke MAC address di dalam jaringan lokal. Ketika device ingin berkomunikasi, ARP mencari MAC address dari IP tujuan."
  },
  {
    q: "Protokol mana yang digunakan untuk transfer email KELUAR (outgoing)?",
    opts: ["POP3", "IMAP", "SMTP", "FTP"],
    correct: 2,
    explanation: "SMTP (Simple Mail Transfer Protocol) digunakan untuk mengirim email (outgoing) pada port 25 atau 587. POP3 dan IMAP digunakan untuk menerima/membaca email (incoming)."
  },
  {
    q: "Topologi jaringan apa yang paling tahan terhadap kegagalan satu node?",
    opts: ["Bus", "Star", "Ring", "Mesh"],
    correct: 3,
    explanation: "Topologi Mesh (full mesh) memiliki koneksi langsung antar setiap node. Jika satu node gagal, data masih bisa dialihkan melalui jalur lain. Inilah yang digunakan internet."
  },
  {
    q: "Apa itu 'Man-in-the-Middle' (MITM) attack?",
    opts: [
      "Serangan yang menyerang server database",
      "Penyerang menyisipkan diri di antara komunikasi dua pihak",
      "Serangan yang menggunakan script berbahaya di website",
      "Serangan brute force pada password"
    ],
    correct: 1,
    explanation: "MITM (Man-in-the-Middle) attack terjadi ketika penyerang menyisipkan dirinya di antara komunikasi dua pihak, bisa memantau atau memodifikasi data yang dikirim."
  },
  // === SOAL BARU DARI MATERI KAMPUS ===
  {
    q: "Apa kepanjangan BGP dan fungsinya dalam ekosistem internet?",
    opts: [
      "Basic Gateway Protocol — routing dalam satu jaringan lokal",
      "Border Gateway Protocol — routing antar Autonomous System (AS)",
      "Broadcast Group Protocol — mengirim data ke semua node",
      "Bridge Group Protocol — menghubungkan dua segmen LAN"
    ],
    correct: 1,
    explanation: "BGP (Border Gateway Protocol) adalah protokol routing yang digunakan antar Autonomous System (AS) di internet. BGP disebut 'distributed policy' karena setiap AS menerapkan kebijakan routing sendiri untuk memaksimalkan efisiensi traffic."
  },
  {
    q: "Apa fungsi MTA (Message Transfer Agent) dalam sistem email?",
    opts: [
      "Antarmuka pengguna untuk membaca email",
      "Transfer email antar mail server menggunakan SMTP",
      "Menyimpan email di server untuk diambil client",
      "Mengenkripsi konten email"
    ],
    correct: 1,
    explanation: "MTA (Message Transfer Agent) bertanggung jawab atas transfer email antar server menggunakan protokol SMTP. Contoh MTA populer adalah Postfix, Sendmail, dan Exim. MTA berbeda dengan UA (User Agent) yang merupakan aplikasi email di sisi pengguna."
  },
  {
    q: "Apa perbedaan POP3 dan IMAP dalam mengakses email?",
    opts: [
      "POP3 lebih aman karena menggunakan enkripsi, IMAP tidak",
      "POP3 menghapus email dari server setelah diunduh, IMAP menyimpan di server",
      "POP3 hanya untuk email teks, IMAP mendukung attachment",
      "Tidak ada perbedaan, keduanya sama"
    ],
    correct: 1,
    explanation: "POP3 (Post Office Protocol 3, port 110/995) mengunduh email ke client lalu biasanya menghapusnya dari server — cocok untuk satu perangkat. IMAP (Internet Message Access Protocol, port 143/993) menyimpan email di server dan sinkron ke semua perangkat — lebih modern dan fleksibel."
  },
  {
    q: "Perintah apa di Debian/Ubuntu untuk menginstal paket baru?",
    opts: [
      "yum install <package>",
      "pacman -S <package>",
      "apt install <package>",
      "brew install <package>"
    ],
    correct: 2,
    explanation: "Debian dan Ubuntu menggunakan APT (Advanced Package Tool) sebagai package manager. Perintah `apt install <package>` akan menginstal paket beserta dependensinya. Perlu dijalankan dengan hak administrator (sudo)."
  },
  {
    q: "Dalam konteks DevOps, apa yang dimaksud dengan CI/CD?",
    opts: [
      "Client Interface / Cloud Deployment",
      "Continuous Integration / Continuous Delivery (Deployment)",
      "Code Inspection / Configuration Distribution",
      "Centralized Infrastructure / Container Deployment"
    ],
    correct: 1,
    explanation: "CI (Continuous Integration) adalah praktik mengintegrasikan kode secara otomatis dan sering (build + test otomatis setiap ada perubahan kode). CD (Continuous Delivery/Deployment) adalah proses otomatis untuk release software ke produksi. Bersama CI/CD memungkinkan deployment lebih cepat dan aman."
  },
  {
    q: "Port default yang digunakan Postfix (SMTP server) adalah?",
    opts: ["21", "25", "110", "143"],
    correct: 1,
    explanation: "Postfix sebagai SMTP server mendengarkan pada port 25 (plain SMTP) dan 587 (submission/STARTTLS). Port 110 adalah POP3 dan port 143 adalah IMAP, yang keduanya digunakan Dovecot untuk pengambilan email."
  },
  {
    q: "Apa yang dimaksud dengan Autonomous System (AS) dalam ekosistem internet?",
    opts: [
      "Komputer yang beroperasi tanpa kontrol manusia",
      "Kumpulan jaringan IP di bawah satu kebijakan routing tunggal",
      "Server yang otomatis mengelola bandwidth",
      "Router yang bekerja secara mandiri"
    ],
    correct: 1,
    explanation: "Autonomous System (AS) adalah kumpulan jaringan IP yang dikelola oleh satu organisasi (ISP, perusahaan, universitas) dengan kebijakan routing tunggal. Setiap AS memiliki nomor unik (ASN). Internet adalah kumpulan AS yang saling terhubung via BGP."
  },
  {
    q: "Format MIME dalam email digunakan untuk?",
    opts: [
      "Mengenkripsi konten email",
      "Memungkinkan pengiriman konten non-ASCII seperti attachment dan HTML",
      "Memvalidasi identitas pengirim",
      "Mengompresi ukuran email"
    ],
    correct: 1,
    explanation: "MIME (Multipurpose Internet Mail Extensions) memperluas format email standar untuk mendukung teks dalam encoding non-ASCII, attachment file, konten HTML, gambar, dan multimedia. Header MIME seperti Content-Type dan Content-Transfer-Encoding mendefinisikan format konten email."
  },
  {
    q: "Pada konfigurasi Apache2, file konfigurasi utama virtual host default terletak di?",
    opts: [
      "/etc/nginx/sites-enabled/default",
      "/etc/apache2/sites-enabled/000-default.conf",
      "/var/www/html/apache.conf",
      "/usr/local/apache2/httpd.conf"
    ],
    correct: 1,
    explanation: "Di Debian/Ubuntu, konfigurasi virtual host Apache2 default berada di /etc/apache2/sites-enabled/000-default.conf (symlink ke sites-available/). Konfigurasi utama Apache ada di /etc/apache2/apache2.conf. Gunakan `a2ensite` dan `a2dissite` untuk mengaktifkan/menonaktifkan virtual host."
  },
  {
    q: "Dalam topologi jaringan, apa keunggulan topologi Star dibanding Bus?",
    opts: [
      "Lebih hemat kabel",
      "Jika satu kabel putus tidak mempengaruhi node lain",
      "Tidak memerlukan switch atau hub",
      "Semua node mendapat bandwidth yang sama"
    ],
    correct: 1,
    explanation: "Topologi Star memiliki titik pusat (hub/switch). Jika kabel dari satu node putus, hanya node tersebut yang terdampak — node lain tetap aktif. Berbeda dengan topologi Bus dimana kerusakan kabel backbone akan mempengaruhi semua node. Kelemahannya: jika hub/switch pusat rusak, seluruh jaringan down."
  },
  {
    q: "Perintah Cisco IOS untuk melihat tabel routing adalah?",
    opts: [
      "show ip config",
      "show ip route",
      "display routing-table",
      "get ip route all"
    ],
    correct: 1,
    explanation: "Perintah `show ip route` di Cisco IOS menampilkan routing table lengkap, termasuk route statik (S), OSPF (O), RIP (R), connected (C), dan local (L). Tambahkan `show ip route static` untuk melihat route statik saja, atau `show ip route ospf` untuk route OSPF."
  },
  {
    q: "Apa fungsi dari NAT Overload (PAT) pada jaringan?",
    opts: [
      "Membagi beban traffic ke beberapa server",
      "Memungkinkan banyak IP private mengakses internet menggunakan satu IP publik",
      "Mengenkripsi traffic keluar jaringan",
      "Memblokir akses dari IP tertentu"
    ],
    correct: 1,
    explanation: "NAT Overload (juga disebut PAT - Port Address Translation) memungkinkan banyak perangkat dengan IP private (192.168.x.x, 10.x.x.x) berbagi satu IP publik untuk akses internet. Pembedaan dilakukan menggunakan nomor port yang berbeda. Inilah yang digunakan di hampir semua jaringan rumah dan kantor."
  },
  {
    q: "VLAN (Virtual LAN) memberikan manfaat utama apa pada jaringan?",
    opts: [
      "Meningkatkan kecepatan koneksi fisik",
      "Segmentasi jaringan logis untuk keamanan dan efisiensi tanpa infrastruktur fisik terpisah",
      "Menghilangkan kebutuhan akan router",
      "Meningkatkan jangkauan sinyal WiFi"
    ],
    correct: 1,
    explanation: "VLAN memungkinkan admin memisahkan jaringan secara logis (misal: VLAN HRD, VLAN IT, VLAN Keuangan) dalam satu infrastruktur fisik yang sama. Manfaatnya: isolasi broadcast domain, keamanan antar departemen, dan fleksibilitas manajemen. Komunikasi antar VLAN memerlukan router (Inter-VLAN routing)."
  },
  {
    q: "Dalam konteks keamanan jaringan, ACL Extended (100-199) bisa memfilter berdasarkan?",
    opts: [
      "Hanya source IP address",
      "Source IP, destination IP, protokol, dan nomor port",
      "Hanya MAC address",
      "Hanya nomor port tujuan"
    ],
    correct: 1,
    explanation: "Extended ACL (nomor 100-199) jauh lebih granular: bisa memfilter berdasarkan source IP, destination IP, protokol (TCP/UDP/ICMP), dan nomor port. Contoh: blokir akses Telnet (port 23) dari subnet tertentu ke server tertentu. Extended ACL sebaiknya diterapkan dekat dengan source traffic."
  },
  {
    q: "Apa itu IXP (Internet Exchange Point) dalam ekosistem internet?",
    opts: [
      "Perangkat keras router di pusat data",
      "Lokasi fisik tempat berbagai ISP dan jaringan saling terhubung untuk bertukar traffic",
      "Protokol untuk mengenkripsi traffic internet",
      "Standar internasional pengalamatan IP"
    ],
    correct: 1,
    explanation: "IXP (Internet Exchange Point) adalah infrastruktur fisik (biasanya di data center) tempat beberapa ISP, CDN, dan perusahaan saling terhubung untuk bertukar traffic internet secara langsung (peering). IXP mengurangi biaya transit dan meningkatkan latency. Contoh: Indonesia Internet Exchange (IIX) di Jakarta."
  }
];

// ===================== SECURITY DATA =====================
const ATTACKS = [
  {
    icon: '💥',
    name: 'DDoS Attack',
    desc: 'Distributed Denial of Service — membanjiri server dengan traffic dari ribuan komputer zombie (botnet) hingga server tidak bisa diakses.',
    severity: 95,
    details: `
      <h3>🎯 Cara Kerja</h3>
      <p>Penyerang menginfeksi ribuan komputer dengan malware, membentuk "botnet". Semua komputer ini diperintahkan serentak mengirim request ke target.</p>
      <h3>⚠️ Dampak</h3>
      <ul><li>Server down (tidak bisa diakses)</li><li>Kerugian bisnis besar</li><li>Reputasi perusahaan rusak</li></ul>
      <h3>🛡️ Mitigasi</h3>
      <ul><li>Rate limiting & traffic filtering</li><li>CDN & load balancing</li><li>Anti-DDoS services (Cloudflare, Akamai)</li><li>Blackholing traffic berbahaya</li></ul>
    `
  },
  {
    icon: '🕵️',
    name: 'MITM Attack',
    desc: 'Man-in-the-Middle — penyerang menyadap dan bisa memodifikasi komunikasi antara dua pihak tanpa sepengetahuan mereka.',
    severity: 88,
    details: `
      <h3>🎯 Cara Kerja</h3>
      <p>Penyerang memposisikan diri di antara client dan server. Bisa melalui ARP Spoofing, DNS Spoofing, atau rogue Wi-Fi hotspot.</p>
      <h3>⚠️ Dampak</h3>
      <ul><li>Pencurian credential (username/password)</li><li>Penyadapan data sensitif</li><li>Session hijacking</li></ul>
      <h3>🛡️ Mitigasi</h3>
      <ul><li>Gunakan HTTPS (TLS/SSL)</li><li>Certificate pinning</li><li>VPN di jaringan publik</li><li>HSTS (HTTP Strict Transport Security)</li></ul>
    `
  },
  {
    icon: '💉',
    name: 'SQL Injection',
    desc: 'Memasukkan kode SQL berbahaya melalui input form untuk memanipulasi database — salah satu serangan web paling umum.',
    severity: 92,
    details: `
      <h3>🎯 Cara Kerja</h3>
      <p>Penyerang memasukkan SQL code di form input: <code>' OR 1=1 --</code> yang mengubah query database dan bisa bypass autentikasi atau mengambil semua data.</p>
      <h3>⚠️ Dampak</h3>
      <ul><li>Data breach (kebocoran data)</li><li>Akses unauthorized ke database</li><li>Delete/modify data</li></ul>
      <h3>🛡️ Mitigasi</h3>
      <ul><li>Prepared statements & parameterized queries</li><li>Input validation & sanitization</li><li>WAF (Web Application Firewall)</li><li>Principle of least privilege untuk DB user</li></ul>
    `
  },
  {
    icon: '🎣',
    name: 'Phishing',
    desc: 'Penipuan dengan menyamar sebagai entitas terpercaya untuk mencuri credential atau informasi sensitif.',
    severity: 75,
    details: `
      <h3>🎯 Cara Kerja</h3>
      <p>Penyerang membuat website/email palsu yang mirip aslinya (bank, social media) untuk mengelabui korban memasukkan credential mereka.</p>
      <h3>⚠️ Dampak</h3>
      <ul><li>Pencurian akun</li><li>Kerugian finansial</li><li>Identitas dicuri</li></ul>
      <h3>🛡️ Mitigasi</h3>
      <ul><li>Multi-factor authentication (MFA)</li><li>Edukasi keamanan pengguna</li><li>Email filtering & anti-spam</li><li>Cek URL dengan teliti sebelum login</li></ul>
    `
  },
  {
    icon: '🐛',
    name: 'XSS (Cross-Site Scripting)',
    desc: 'Menyisipkan script berbahaya ke halaman web yang akan dieksekusi di browser korban.',
    severity: 80,
    details: `
      <h3>🎯 Cara Kerja</h3>
      <p>Penyerang menyisipkan JavaScript berbahaya ke website (biasanya melalui komentar atau form). Script ini dieksekusi di browser pengguna lain yang mengunjungi halaman tersebut.</p>
      <h3>⚠️ Dampak</h3>
      <ul><li>Pencurian cookie/session</li><li>Redirect ke malicious site</li><li>Keylogging di browser</li></ul>
      <h3>🛡️ Mitigasi</h3>
      <ul><li>Output encoding/escaping</li><li>Content Security Policy (CSP)</li><li>HttpOnly cookies</li><li>Input sanitization</li></ul>
    `
  },
  {
    icon: '🔓',
    name: 'Brute Force',
    desc: 'Mencoba semua kemungkinan kombinasi password hingga menemukan yang benar.',
    severity: 65,
    details: `
      <h3>🎯 Cara Kerja</h3>
      <p>Menggunakan tools otomatis (Hydra, John the Ripper) untuk mencoba ribuan kombinasi password per detik. Dictionary attack menggunakan daftar password umum.</p>
      <h3>⚠️ Dampak</h3>
      <ul><li>Akses unauthorized ke sistem</li><li>Pencurian akun</li></ul>
      <h3>🛡️ Mitigasi</h3>
      <ul><li>Gunakan password kuat dan unik</li><li>Account lockout policy</li><li>MFA (Multi-Factor Authentication)</li><li>CAPTCHA</li><li>Rate limiting login attempts</li></ul>
    `
  },
  {
    icon: '📧',
    name: 'Email Spoofing & Spam',
    desc: 'Pemalsuan alamat pengirim email untuk menipu penerima, seringkali digunakan dalam phishing dan penyebaran malware.',
    severity: 70,
    details: `
      <h3>🎯 Cara Kerja</h3>
      <p>Penyerang memanipulasi header email (field "From") sehingga terlihat berasal dari sumber terpercaya. SMTP pada dasarnya tidak memiliki autentikasi pengirim bawaan.</p>
      <h3>⚠️ Dampak</h3>
      <ul><li>Phishing yang lebih meyakinkan</li><li>Penyebaran malware via attachment</li><li>Kerusakan reputasi domain</li></ul>
      <h3>🛡️ Mitigasi</h3>
      <ul><li>SPF (Sender Policy Framework) — daftar IP yang boleh kirim email atas nama domain</li><li>DKIM (DomainKeys Identified Mail) — tanda tangan digital pada email</li><li>DMARC — kebijakan penanganan email yang gagal SPF/DKIM</li><li>Konfigurasi anti-spam di Postfix</li></ul>
    `
  }
];

const DEFENSES = [
  {
    icon: '🧱',
    name: 'Firewall',
    desc: 'Memfilter traffic masuk dan keluar berdasarkan aturan keamanan. Bisa berbasis packet filtering, stateful inspection, atau application layer.'
  },
  {
    icon: '🔒',
    name: 'VPN (Virtual Private Network)',
    desc: 'Membuat tunnel terenkripsi untuk komunikasi aman melalui jaringan publik. Menyembunyikan IP asli dan mengenkripsi semua traffic.'
  },
  {
    icon: '👁️',
    name: 'IDS/IPS',
    desc: 'Intrusion Detection/Prevention System — memantau traffic untuk mendeteksi dan/atau memblokir aktivitas mencurigakan secara real-time.'
  },
  {
    icon: '📜',
    name: 'SSL/TLS',
    desc: 'Protokol enkripsi yang mengamankan komunikasi web (HTTPS). Menggunakan asymmetric crypto untuk handshake dan symmetric untuk transfer data.'
  },
  {
    icon: '🔑',
    name: 'Multi-Factor Auth',
    desc: 'Menambahkan lapisan autentikasi tambahan selain password: OTP, biometrik, atau hardware key (FIDO2). Sangat efektif mencegah credential theft.'
  },
  {
    icon: '🕸️',
    name: 'Network Segmentation',
    desc: 'Memisahkan jaringan menjadi zone-zone berbeda (VLAN, DMZ) untuk membatasi penyebaran serangan jika satu segment terkompromasi.'
  },
  {
    icon: '📧',
    name: 'SPF / DKIM / DMARC',
    desc: 'Tiga standar keamanan email: SPF mendefinisikan server yang sah mengirim email, DKIM menambahkan tanda tangan digital, DMARC mengatur kebijakan penanganan email tak sah.'
  }
];

// ===================== OSI LAYER DATA =====================
const OSI_LAYERS = [
  {
    num: 7, name: 'Application', proto: 'HTTP, FTP, DNS, SMTP, SSH',
    badge: 'Aplikasi',
    detail: 'Layer Application adalah layer yang paling dekat dengan pengguna. Layer ini menyediakan antarmuka antara aplikasi dengan jaringan. Protokol seperti HTTP (web), FTP (transfer file), DNS (resolusi nama), dan SMTP (email) bekerja di sini. Ketika kamu membuka browser, layer inilah yang aktif.'
  },
  {
    num: 6, name: 'Presentation', proto: 'SSL/TLS, JPEG, MPEG, ASCII',
    badge: 'Presentasi',
    detail: 'Layer Presentation bertanggung jawab atas enkripsi/dekripsi, kompresi, dan konversi format data. SSL/TLS untuk HTTPS bekerja di sini. Layer ini memastikan data yang dikirim bisa "dipahami" oleh penerima meskipun sistem mereka berbeda.'
  },
  {
    num: 5, name: 'Session', proto: 'NetBIOS, RPC, SQL',
    badge: 'Sesi',
    detail: 'Layer Session mengelola sesi komunikasi antara dua perangkat. Ini termasuk membuka, memelihara, dan menutup sesi. Layer ini memungkinkan checkpoint sehingga jika koneksi terputus, transfer bisa dilanjutkan dari checkpoint terakhir.'
  },
  {
    num: 4, name: 'Transport', proto: 'TCP, UDP, SCTP',
    badge: 'Transport',
    detail: 'Layer Transport bertanggung jawab atas end-to-end delivery, flow control, dan error recovery. TCP menjamin data tiba dengan urutan dan lengkap (connection-oriented), sedangkan UDP lebih cepat namun tidak menjamin pengiriman (connectionless). Port number berada di layer ini.'
  },
  {
    num: 3, name: 'Network', proto: 'IP, ICMP, OSPF, BGP',
    badge: 'Jaringan',
    detail: 'Layer Network menangani pengalamatan logis (IP address) dan routing paket data antar jaringan berbeda. Router adalah perangkat layer 3. IP address (IPv4 dan IPv6) adalah identitas di layer ini. ICMP digunakan untuk ping dan traceroute.'
  },
  {
    num: 2, name: 'Data Link', proto: 'Ethernet, Wi-Fi, ARP, PPP',
    badge: 'Data Link',
    detail: 'Layer Data Link mengatur transfer data antara dua node yang terhubung langsung (dalam satu jaringan). MAC address digunakan di sini. Layer ini terbagi menjadi dua sublayer: LLC (Logical Link Control) dan MAC (Media Access Control). Switch bekerja di layer 2.'
  },
  {
    num: 1, name: 'Physical', proto: 'Ethernet cable, Wi-Fi RF, Fiber',
    badge: 'Fisik',
    detail: 'Layer Physical menangani transmisi bit mentah (0 dan 1) melalui media fisik. Ini mencakup kabel (twisted pair, coaxial, fiber optic), koneksi wireless (frekuensi radio), voltase listrik, dan karakteristik fisik lainnya. Hub dan repeater adalah perangkat layer 1.'
  }
];

// ===================== PROTOCOL DATA =====================
const PROTOCOLS = [
  { name: 'HTTP', port: '80', desc: 'HyperText Transfer Protocol - web browsing', layer: 'L7' },
  { name: 'HTTPS', port: '443', desc: 'HTTP Secure - web browsing terenkripsi', layer: 'L7' },
  { name: 'FTP', port: '21', desc: 'File Transfer Protocol - transfer file', layer: 'L7' },
  { name: 'SFTP', port: '22', desc: 'SSH File Transfer Protocol - transfer file aman', layer: 'L7' },
  { name: 'SSH', port: '22', desc: 'Secure Shell - remote access terenkripsi', layer: 'L7' },
  { name: 'Telnet', port: '23', desc: 'Remote access (tidak aman, sudah deprecated)', layer: 'L7' },
  { name: 'SMTP', port: '25/587', desc: 'Simple Mail Transfer - kirim email (outgoing)', layer: 'L7' },
  { name: 'SMTPS', port: '465', desc: 'SMTP over SSL - kirim email terenkripsi', layer: 'L7' },
  { name: 'DNS', port: '53', desc: 'Domain Name System - resolusi nama ke IP', layer: 'L7' },
  { name: 'DHCP', port: '67/68', desc: 'Dynamic Host Config - alokasi IP otomatis', layer: 'L7' },
  { name: 'POP3', port: '110', desc: 'Post Office Protocol - ambil email (hapus dari server)', layer: 'L7' },
  { name: 'POP3S', port: '995', desc: 'POP3 over SSL - ambil email terenkripsi', layer: 'L7' },
  { name: 'IMAP', port: '143', desc: 'Internet Message Access - manajemen email (sinkron)', layer: 'L7' },
  { name: 'IMAPS', port: '993', desc: 'IMAP over SSL - manajemen email terenkripsi', layer: 'L7' },
  { name: 'SNMP', port: '161', desc: 'Simple Network Mgmt - monitoring jaringan', layer: 'L7' },
  { name: 'RDP', port: '3389', desc: 'Remote Desktop Protocol - remote desktop', layer: 'L7' },
  { name: 'NTP', port: '123', desc: 'Network Time Protocol - sinkronisasi waktu', layer: 'L7' },
  { name: 'TCP', port: 'Varies', desc: 'Reliable, connection-oriented transport', layer: 'L4' },
  { name: 'UDP', port: 'Varies', desc: 'Fast, connectionless transport', layer: 'L4' },
  { name: 'IP (IPv4)', port: '-', desc: 'Pengalamatan & routing paket', layer: 'L3' },
  { name: 'ICMP', port: '-', desc: 'Internet Control Message - ping, traceroute', layer: 'L3' },
  { name: 'BGP', port: '179', desc: 'Border Gateway Protocol - routing antar AS', layer: 'L3' },
  { name: 'OSPF', port: '-', desc: 'Open Shortest Path First - dynamic routing IGP', layer: 'L3' },
  { name: 'ARP', port: '-', desc: 'Address Resolution - IP ke MAC', layer: 'L2' },
];

window.MODULES = MODULES;
window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
window.ATTACKS = ATTACKS;
window.DEFENSES = DEFENSES;
window.OSI_LAYERS = OSI_LAYERS;
window.PROTOCOLS = PROTOCOLS;

// ===================== LESSON CONTENT - MODULES =====================
window.LESSON_EXTRA = {
  'routing-static': {
    title: 'Static Routing',
    icon: '🗺️',
    content: `
      <h2>🗺️ Static Routing</h2>
      <p>Static routing adalah metode di mana administrator secara manual mengonfigurasi entri di routing table. Router menggunakan tabel ini untuk menentukan jalur pengiriman paket.</p>
      <div class="info-box info"><span class="info-icon">💡</span><div><strong>Sintaks Perintah:</strong><br><code>ip route [network] [mask] [next-hop | exit-interface]</code></div></div>
      <h3>Komponen Static Route</h3>
      <ul>
        <li><strong>Network tujuan:</strong> Alamat jaringan yang ingin dicapai</li>
        <li><strong>Subnet mask:</strong> Mask jaringan tujuan</li>
        <li><strong>Next-hop / Exit interface:</strong> Kemana paket dikirim</li>
      </ul>
      <h3>Contoh Konfigurasi</h3>
      <pre class="code-block">Router(config)# ip route 192.168.2.0 255.255.255.0 10.0.0.2
Router(config)# ip route 0.0.0.0 0.0.0.0 203.0.113.1  <span style="color:#6ee7b7">! Default route</span></pre>
      <h3>Verifikasi</h3>
      <pre class="code-block">Router# show ip route
Router# show ip route static</pre>
      <div class="info-box warning"><span class="info-icon">⚠️</span><div><strong>Kekurangan:</strong> Static route tidak otomatis beradaptasi jika terjadi perubahan topologi. Administrator harus update manual.</div></div>
    `
  },
  'routing-dynamic': {
    title: 'Dynamic Routing (RIP & OSPF)',
    icon: '🔄',
    content: `
      <h2>🔄 Dynamic Routing</h2>
      <p>Dynamic routing memungkinkan router saling berbagi informasi routing secara otomatis menggunakan protokol routing.</p>
      <h3>RIP Version 2</h3>
      <div class="info-box info"><span class="info-icon">📡</span><div>RIPv2 menggunakan metric <strong>hop count</strong> (maks 15). Mengirim update setiap <strong>30 detik</strong> via multicast 224.0.0.9.</div></div>
      <pre class="code-block">Router(config)# router rip
Router(config-router)# version 2
Router(config-router)# no auto-summary
Router(config-router)# network 192.168.1.0</pre>
      <h3>OSPF (Open Shortest Path First)</h3>
      <div class="info-box success"><span class="info-icon">⚡</span><div>OSPF menggunakan algoritma <strong>Dijkstra (SPF)</strong> dengan metric <strong>cost</strong> (berbasis bandwidth). Lebih cepat konvergen, tidak ada hop count limit.</div></div>
      <pre class="code-block">Router(config)# router ospf 1
Router(config-router)# network 192.168.1.0 0.0.0.255 area 0
Router(config-router)# network 10.0.0.0 0.0.0.3 area 0</pre>
      <h3>Perbandingan</h3>
      <table style="width:100%;border-collapse:collapse;margin-top:10px">
        <tr style="background:rgba(255,255,255,0.1)"><th style="padding:8px;border:1px solid #444">Fitur</th><th style="padding:8px;border:1px solid #444">RIP</th><th style="padding:8px;border:1px solid #444">OSPF</th></tr>
        <tr><td style="padding:8px;border:1px solid #444">Algoritma</td><td style="padding:8px;border:1px solid #444">Distance Vector</td><td style="padding:8px;border:1px solid #444">Link State</td></tr>
        <tr><td style="padding:8px;border:1px solid #444">Metric</td><td style="padding:8px;border:1px solid #444">Hop Count</td><td style="padding:8px;border:1px solid #444">Cost (Bandwidth)</td></tr>
        <tr><td style="padding:8px;border:1px solid #444">Maks Hop</td><td style="padding:8px;border:1px solid #444">15</td><td style="padding:8px;border:1px solid #444">Tidak terbatas</td></tr>
        <tr><td style="padding:8px;border:1px solid #444">Konvergensi</td><td style="padding:8px;border:1px solid #444">Lambat (~30 detik)</td><td style="padding:8px;border:1px solid #444">Cepat</td></tr>
      </table>
    `
  },
  'vlan': {
    title: 'VLAN & Inter-VLAN Routing',
    icon: '🏗️',
    content: `
      <h2>🏗️ VLAN & Inter-VLAN Routing</h2>
      <p>VLAN memungkinkan pembagian jaringan fisik menjadi beberapa jaringan logis yang terisolasi, meningkatkan keamanan dan performa.</p>
      <h3>Konfigurasi VLAN pada Switch</h3>
      <pre class="code-block">Switch(config)# vlan 10
Switch(config-vlan)# name KEUANGAN
Switch(config)# interface fa0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10</pre>
      <h3>Trunk Port (802.1Q)</h3>
      <pre class="code-block">Switch(config)# interface fa0/24
Switch(config-if)# switchport mode trunk
Switch# show interfaces trunk</pre>
      <h3>Router-on-a-Stick (Inter-VLAN)</h3>
      <pre class="code-block">Router(config)# interface fa0/0.10
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# ip address 192.168.10.1 255.255.255.0</pre>
      <div class="info-box info"><span class="info-icon">💡</span><div><strong>Verifikasi:</strong> <code>show vlan brief</code> dan <code>show interfaces trunk</code></div></div>
    `
  },
  'dhcp-nat': {
    title: 'DHCP, DNS & NAT',
    icon: '🌐',
    content: `
      <h2>🌐 DHCP, DNS & NAT</h2>
      <h3>DHCP Server pada Cisco Router</h3>
      <pre class="code-block">Router(config)# ip dhcp pool KANTOR
Router(dhcp-config)# network 192.168.1.0 255.255.255.0
Router(dhcp-config)# default-router 192.168.1.1
Router(dhcp-config)# dns-server 8.8.8.8
Router(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.10</pre>
      <h3>NAT Overload (PAT)</h3>
      <p>Satu IP publik melayani banyak klien private menggunakan nomor port berbeda.</p>
      <pre class="code-block">Router(config)# access-list 1 permit 192.168.1.0 0.0.0.255
Router(config)# ip nat inside source list 1 interface fa0/1 overload
Router(config)# interface fa0/0
Router(config-if)# ip nat inside
Router(config)# interface fa0/1
Router(config-if)# ip nat outside
Router# show ip nat translations</pre>
      <div class="info-box warning"><span class="info-icon">⚠️</span><div>IP private (RFC 1918): <strong>10.0.0.0/8</strong>, <strong>172.16.0.0/12</strong>, <strong>192.168.0.0/16</strong> — tidak bisa digunakan langsung di internet.</div></div>
    `
  },
  'acl': {
    title: 'Access Control List (ACL)',
    icon: '🛡️',
    content: `
      <h2>🛡️ Access Control List (ACL)</h2>
      <p>ACL adalah daftar aturan yang mengizinkan atau menolak traffic jaringan berdasarkan kriteria tertentu.</p>
      <h3>Standard ACL (1–99)</h3>
      <p>Filter berdasarkan <strong>source IP</strong> saja. Terapkan <strong>dekat destination</strong>.</p>
      <pre class="code-block">Router(config)# access-list 10 deny host 192.168.1.20
Router(config)# access-list 10 permit any
Router(config)# interface fa0/1
Router(config-if)# ip access-group 10 out</pre>
      <h3>Extended ACL (100–199)</h3>
      <p>Filter berdasarkan source IP, destination IP, protokol, dan port. Terapkan <strong>dekat source</strong>.</p>
      <pre class="code-block">Router(config)# access-list 110 deny tcp 192.168.1.0 0.0.0.255 host 10.0.0.100 eq 23
Router(config)# access-list 110 permit ip any any
Router(config)# interface fa0/0
Router(config-if)# ip access-group 110 in</pre>
      <h3>Named ACL</h3>
      <pre class="code-block">Router(config)# ip access-list extended BLOKIR-TELNET
Router(config-ext-nacl)# deny tcp any any eq 23
Router(config-ext-nacl)# permit ip any any</pre>
      <div class="info-box danger"><span class="info-icon">🚨</span><div><strong>Implicit Deny All:</strong> Setiap ACL selalu berakhir dengan <code>deny any</code>! Pastikan ada <code>permit any</code> jika diperlukan.</div></div>
      <div class="info-box info"><span class="info-icon">💡</span><div><strong>Verifikasi:</strong> <code>show access-lists</code> — lihat counter berapa kali rule cocok.</div></div>
    `
  },

  // ===== KONTEN MODUL BARU DARI MATERI KAMPUS =====
  'ekosistem-internet': {
    title: 'Ekosistem Internet',
    icon: '🌍',
    content: `
      <h2>🌍 Ekosistem Internet</h2>
      <p>Internet berkembang pesat karena tiga kunci sukses: <strong>kepemilikan global bersama</strong>, <strong>pengembangan standar terbuka</strong>, dan <strong>proses yang dapat diakses bebas</strong>. Internet bisa dipandang dari dua sisi: teknis dan arsitektur.</p>

      <h3>Autonomous System (AS)</h3>
      <div class="info-box info"><span class="info-icon">🌐</span><div>Internet adalah kumpulan <strong>Autonomous System (AS)</strong> yang saling terhubung. Setiap AS adalah jaringan IP di bawah satu kebijakan routing tunggal milik satu organisasi (ISP, perusahaan, universitas).</div></div>
      <ul>
        <li><strong>Edge Provider:</strong> ISP kecil yang melayani pelanggan akhir. Kebijakan: menjadi preferred path bagi pelanggan, menggunakan "hot potato routing"</li>
        <li><strong>Transit Provider:</strong> ISP besar yang menyediakan akses ke seluruh internet. Kebijakan: membawa traffic melalui jalur terpendek</li>
        <li><strong>Content Provider:</strong> (Google, Netflix, Meta) Push konten sedekat mungkin ke pengguna menggunakan CDN, "cold potato routing"</li>
      </ul>

      <h3>BGP (Border Gateway Protocol)</h3>
      <div class="info-box warning"><span class="info-icon">📡</span><div>BGP adalah protokol routing yang menghubungkan antar AS di internet. BGP disebut "distributed policy" karena setiap AS menerapkan kebijakan routing sendiri untuk memaksimalkan efisiensi dan pendapatan.</div></div>

      <h3>Model Peering</h3>
      <table style="width:100%;border-collapse:collapse;margin-top:10px">
        <tr style="background:rgba(255,255,255,0.1)"><th style="padding:8px;border:1px solid #444">Jenis</th><th style="padding:8px;border:1px solid #444">Deskripsi</th></tr>
        <tr><td style="padding:8px;border:1px solid #444">Provider/Customer</td><td style="padding:8px;border:1px solid #444">Customer membayar Provider untuk transit ke internet</td></tr>
        <tr><td style="padding:8px;border:1px solid #444">Transit</td><td style="padding:8px;border:1px solid #444">Layanan routing ke seluruh internet (berbayar)</td></tr>
        <tr><td style="padding:8px;border:1px solid #444">Settlement Free</td><td style="padding:8px;border:1px solid #444">Pertukaran traffic tanpa biaya antara AS setara</td></tr>
      </table>

      <h3>IXP (Internet Exchange Point)</h3>
      <p>IXP adalah infrastruktur fisik tempat berbagai ISP, CDN, dan perusahaan saling terhubung untuk bertukar traffic internet secara langsung. IXP mengurangi biaya transit dan memperbaiki latency. Contoh: <strong>Indonesia Internet Exchange (IIX)</strong> di Jakarta.</p>

      <h3>Sistem Penamaan (DNS Hierarchy)</h3>
      <pre class="code-block">www.pens.ac.id
├── . (Root DNS Servers - 13 cluster global)
├── id. (Top Level Domain - ccTLD Indonesia)
├── ac.id. (Second Level - Academic Indonesia)
├── pens.ac.id. (Third Level - PENS domain)
└── www.pens.ac.id. (Hostname)</pre>
      <div class="info-box info"><span class="info-icon">💡</span><div>DNS menggunakan sistem hierarki cache: Browser → OS → Local Resolver → ISP DNS → Root → TLD → Authoritative DNS</div></div>
    `
  },

  'email-protokol': {
    title: 'SMTP, POP3, IMAP & MIME',
    icon: '📧',
    content: `
      <h2>📧 Sistem Email: SMTP, POP3, IMAP & MIME</h2>
      <p>Sistem email modern melibatkan tiga komponen utama: <strong>User Agent (UA)</strong>, <strong>Message Transfer Agent (MTA)</strong>, dan <strong>Message Access Agent (MAA)</strong>.</p>

      <h3>Arsitektur Email (Skenario Lengkap)</h3>
      <div class="info-box info"><span class="info-icon">📬</span><div>
        <strong>Alur email end-to-end:</strong><br>
        Pengirim (UA) → SMTP → MTA Server Pengirim → SMTP → MTA Server Penerima → POP3/IMAP → Penerima (UA)
      </div></div>

      <h3>SMTP (Simple Mail Transfer Protocol)</h3>
      <ul>
        <li><strong>Port:</strong> 25 (server-to-server), 587 (submission/STARTTLS), 465 (SMTPS)</li>
        <li><strong>Fungsi:</strong> Transfer email keluar (outgoing) — protokol PUSH</li>
        <li><strong>Perintah dasar:</strong> HELO/EHLO, MAIL FROM, RCPT TO, DATA, QUIT</li>
      </ul>
      <pre class="code-block"># Contoh sesi SMTP manual via telnet
telnet mail.example.com 25
220 mail.example.com ESMTP Postfix
HELO client.example.com
250 Hello
MAIL FROM: &lt;pengirim@example.com&gt;
250 Ok
RCPT TO: &lt;penerima@example.com&gt;
250 Ok
DATA
354 End data with &lt;CR&gt;&lt;LF&gt;.&lt;CR&gt;&lt;LF&gt;
Subject: Test Email
Halo, ini pesan uji coba.
.
250 Ok: queued
QUIT</pre>

      <h3>POP3 vs IMAP</h3>
      <table style="width:100%;border-collapse:collapse;margin-top:10px">
        <tr style="background:rgba(255,255,255,0.1)"><th style="padding:8px;border:1px solid #444">Fitur</th><th style="padding:8px;border:1px solid #444">POP3</th><th style="padding:8px;border:1px solid #444">IMAP</th></tr>
        <tr><td style="padding:8px;border:1px solid #444">Port</td><td style="padding:8px;border:1px solid #444">110 / 995 (SSL)</td><td style="padding:8px;border:1px solid #444">143 / 993 (SSL)</td></tr>
        <tr><td style="padding:8px;border:1px solid #444">Penyimpanan</td><td style="padding:8px;border:1px solid #444">Download & hapus dari server</td><td style="padding:8px;border:1px solid #444">Tetap di server, sinkron</td></tr>
        <tr><td style="padding:8px;border:1px solid #444">Multi-device</td><td style="padding:8px;border:1px solid #444">Tidak ideal</td><td style="padding:8px;border:1px solid #444">Ideal</td></tr>
        <tr><td style="padding:8px;border:1px solid #444">Folder/Label</td><td style="padding:8px;border:1px solid #444">Tidak ada</td><td style="padding:8px;border:1px solid #444">Didukung penuh</td></tr>
        <tr><td style="padding:8px;border:1px solid #444">Penggunaan</td><td style="padding:8px;border:1px solid #444">1 perangkat, offline</td><td style="padding:8px;border:1px solid #444">Multi-perangkat, cloud</td></tr>
      </table>

      <h3>MIME (Multipurpose Internet Mail Extensions)</h3>
      <p>MIME memperluas format email untuk mendukung konten non-ASCII, attachment, HTML, dan multimedia.</p>
      <pre class="code-block">MIME-Version: 1.0
Content-Type: multipart/mixed; boundary="boundary42"

--boundary42
Content-Type: text/plain; charset=UTF-8
Ini adalah pesan teks biasa.

--boundary42
Content-Type: application/pdf
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename="laporan.pdf"

[base64 encoded content here...]
--boundary42--</pre>
      <div class="info-box success"><span class="info-icon">✅</span><div><strong>Content-Type umum:</strong> text/plain, text/html, image/jpeg, application/pdf, multipart/mixed (dengan attachment), multipart/alternative (plain + HTML)</div></div>
    `
  },

  'web-email-server': {
    title: 'Web & Email Server di Linux',
    icon: '🖥️',
    content: `
      <h2>🖥️ Web & Email Server di Debian Linux</h2>
      <p>Panduan instalasi dan konfigurasi stack server lengkap di Debian 12: Apache2 (web), PHP-FPM, MariaDB (database), Postfix (SMTP), dan Dovecot (IMAP/POP3).</p>

      <h3>1. NTP Client — Sinkronisasi Waktu</h3>
      <pre class="code-block">apt install systemd-timesyncd
timedatectl set-timezone Asia/Jakarta
timedatectl set-local-rtc false
timedatectl set-ntp true

# Edit /etc/systemd/timesyncd.conf
[Time]
NTP=0.id.pool.ntp.org

systemctl restart systemd-timesyncd
timedatectl  # verifikasi</pre>

      <h3>2. Apache2 Web Server</h3>
      <pre class="code-block">apt -y install apache2

# Konfigurasi keamanan
vi /etc/apache2/conf-enabled/security.conf
ServerTokens Prod  # sembunyikan versi Apache

# Set ServerName
vi /etc/apache2/apache2.conf
ServerName www.example.com

systemctl reload apache2</pre>

      <h3>3. PHP 8.2 + PHP-FPM</h3>
      <pre class="code-block">apt -y install php8.2 php8.2-mbstring php-pear
apt -y install php-fpm

# Aktifkan PHP-FPM di Apache
a2enmod proxy_fcgi setenvif
a2enconf php8.2-fpm
systemctl restart php8.2-fpm apache2

# Test PHP
echo '&lt;?php phpinfo(); ?&gt;' &gt; /var/www/html/info.php</pre>

      <h3>4. MariaDB Database</h3>
      <pre class="code-block">apt -y install mariadb-server
mysql_secure_installation  # amankan instalasi

# Test koneksi
mysql -u root
MariaDB&gt; SHOW DATABASES;
MariaDB&gt; CREATE DATABASE mydb;
MariaDB&gt; EXIT;</pre>

      <h3>5. Postfix — SMTP Server (Port 25)</h3>
      <pre class="code-block">apt -y install postfix sasl2-bin

# Konfigurasi utama /etc/postfix/main.cf
myhostname = mail.example.local
mydomain = example.local
myorigin = $mydomain
inet_interfaces = all
mydestination = $myhostname, localhost.$mydomain, localhost, $mydomain
home_mailbox = Maildir/
message_size_limit = 10240000

# Anti-spam
smtpd_client_restrictions = permit_mynetworks, reject_unknown_client_hostname, permit
smtpd_sender_restrictions = permit_mynetworks, reject_unknown_sender_domain

systemctl restart postfix</pre>

      <h3>6. Dovecot — IMAP (143) & POP3 (110) Server</h3>
      <pre class="code-block">apt -y install dovecot-core dovecot-pop3d dovecot-imapd

# /etc/dovecot/dovecot.conf
listen = *, ::

# /etc/dovecot/conf.d/10-auth.conf
disable_plaintext_auth = no
auth_mechanisms = plain login

# /etc/dovecot/conf.d/10-mail.conf
mail_location = maildir:~/Maildir

systemctl restart dovecot</pre>

      <h3>Verifikasi Semua Service</h3>
      <pre class="code-block">netstat -a | grep LISTEN
# Hasilnya: MySQL(3306), IMAP(143), POP3(110), SMTP(25), SSH(22), IMAPS(993), POP3S(995)

# Test SMTP via telnet
telnet mail.example.local 25</pre>
      <div class="info-box success"><span class="info-icon">🎯</span><div><strong>Stack lengkap:</strong> Apache2 + PHP-FPM + MariaDB = LAMP stack. Postfix + Dovecot = Email server penuh.</div></div>
    `
  },

  'devops-cicd': {
    title: 'DevOps & CI/CD',
    icon: '🚀',
    content: `
      <h2>🚀 DevOps & CI/CD</h2>
      <p>DevOps adalah kombinasi dari Development (Dev) dan Operations (Ops) — sebuah budaya, praktik, dan toolset yang mempersingkat siklus pengembangan software dan meningkatkan kualitas delivery.</p>

      <h3>Mengapa DevOps Diperlukan?</h3>
      <div class="info-box info"><span class="info-icon">💼</span><div>
        <strong>Realita bisnis saat ini:</strong>
        <ul>
          <li>Kebutuhan bisnis sangat dinamis dan cepat di era digitalisasi</li>
          <li>Mayoritas kebutuhan bisnis sangat bergantung pada teknologi</li>
          <li>Business Agility is a MUST</li>
        </ul>
      </div></div>

      <h3>Evolusi Software Development</h3>
      <table style="width:100%;border-collapse:collapse;margin-top:10px">
        <tr style="background:rgba(255,255,255,0.1)"><th style="padding:8px;border:1px solid #444">Era</th><th style="padding:8px;border:1px solid #444">Metodologi</th><th style="padding:8px;border:1px solid #444">Release</th></tr>
        <tr><td style="padding:8px;border:1px solid #444">1990s</td><td style="padding:8px;border:1px solid #444">Waterfall, Client-Server</td><td style="padding:8px;border:1px solid #444">Multi-tahun</td></tr>
        <tr><td style="padding:8px;border:1px solid #444">2000s</td><td style="padding:8px;border:1px solid #444">Agile, SOA, J2EE/.NET</td><td style="padding:8px;border:1px solid #444">Bi-annual</td></tr>
        <tr><td style="padding:8px;border:1px solid #444">2010s</td><td style="padding:8px;border:1px solid #444">DevOps, Microservices, Docker</td><td style="padding:8px;border:1px solid #444">Weekly/Daily</td></tr>
        <tr><td style="padding:8px;border:1px solid #444">2020s</td><td style="padding:8px;border:1px solid #444">Serverless, GitOps, Platform Eng.</td><td style="padding:8px;border:1px solid #444">On-demand/Continuous</td></tr>
      </table>

      <h3>CI/CD Pipeline</h3>
      <div class="info-box success"><span class="info-icon">🔄</span><div>
        <strong>CI (Continuous Integration):</strong> Setiap kali developer push kode → otomatis build + test<br>
        <strong>CD (Continuous Delivery):</strong> Software selalu dalam kondisi siap deploy<br>
        <strong>CD (Continuous Deployment):</strong> Deploy otomatis ke produksi setelah semua test pass
      </div></div>
      <pre class="code-block"># Contoh pipeline CI/CD (.gitlab-ci.yml / GitHub Actions)
stages:
  - build
  - test
  - deploy

build:
  stage: build
  script:
    - docker build -t myapp:$CI_COMMIT_SHA .
    - docker push registry/myapp:$CI_COMMIT_SHA

test:
  stage: test
  script:
    - docker run myapp:$CI_COMMIT_SHA npm test

deploy:
  stage: deploy
  script:
    - kubectl set image deployment/myapp myapp=registry/myapp:$CI_COMMIT_SHA
  only:
    - main</pre>

      <h3>Komponen Teknologi DevOps</h3>
      <ul>
        <li>🐙 <strong>Git:</strong> Version control — pondasi semua workflow DevOps</li>
        <li>🐳 <strong>Docker:</strong> Containerisasi aplikasi — "build once, run anywhere"</li>
        <li>☸️ <strong>Kubernetes:</strong> Orkestrasi container di skala besar</li>
        <li>🔄 <strong>Jenkins/GitLab CI/GitHub Actions:</strong> CI/CD automation platform</li>
        <li>📊 <strong>Prometheus + Grafana:</strong> Monitoring & observability</li>
        <li>🏗️ <strong>Terraform/Ansible:</strong> Infrastructure as Code (IaC)</li>
      </ul>

      <h3>DevOps Maturity Model</h3>
      <div class="info-box warning"><span class="info-icon">📈</span><div>Tingkat adopsi DevOps: Level 1 (Manual) → Level 2 (Otomasi parsial) → Level 3 (CI/CD) → Level 4 (Full DevOps) → Level 5 (Site Reliability Engineering)</div></div>
    `
  },

  'linux-debian': {
    title: 'Linux System Admin (Debian 12)',
    icon: '🐧',
    content: `
      <h2>🐧 Linux System Administration — Debian 12 (Bookworm)</h2>
      <p>Debian GNU/Linux adalah distribusi Linux yang stabil dan terpercaya. Debian 12 "Bookworm" menggunakan repository dengan branch: stable, testing, unstable, dan backports.</p>

      <h3>APT — Package Management</h3>
      <div class="info-box info"><span class="info-icon">📦</span><div>APT (Advanced Package Tool) adalah package manager utama Debian. Selalu jalankan dengan <code>sudo</code> atau sebagai root.</div></div>

      <h4>Perintah APT Essensial</h4>
      <table style="width:100%;border-collapse:collapse;margin-top:10px">
        <tr style="background:rgba(255,255,255,0.1)"><th style="padding:8px;border:1px solid #444">Perintah</th><th style="padding:8px;border:1px solid #444">Fungsi</th></tr>
        <tr><td style="padding:8px;border:1px solid #444"><code>apt update</code></td><td style="padding:8px;border:1px solid #444">Perbarui metadata repository</td></tr>
        <tr><td style="padding:8px;border:1px solid #444"><code>apt install &lt;pkg&gt;</code></td><td style="padding:8px;border:1px solid #444">Install paket beserta dependensinya</td></tr>
        <tr><td style="padding:8px;border:1px solid #444"><code>apt upgrade</code></td><td style="padding:8px;border:1px solid #444">Update semua paket terinstal (aman)</td></tr>
        <tr><td style="padding:8px;border:1px solid #444"><code>apt full-upgrade</code></td><td style="padding:8px;border:1px solid #444">Update lengkap (bisa tambah/hapus paket)</td></tr>
        <tr><td style="padding:8px;border:1px solid #444"><code>apt remove &lt;pkg&gt;</code></td><td style="padding:8px;border:1px solid #444">Hapus paket (simpan config)</td></tr>
        <tr><td style="padding:8px;border:1px solid #444"><code>apt purge &lt;pkg&gt;</code></td><td style="padding:8px;border:1px solid #444">Hapus paket + file konfigurasi</td></tr>
        <tr><td style="padding:8px;border:1px solid #444"><code>apt autoremove --purge</code></td><td style="padding:8px;border:1px solid #444">Hapus paket tak terpakai + config</td></tr>
        <tr><td style="padding:8px;border:1px solid #444"><code>apt search &lt;keyword&gt;</code></td><td style="padding:8px;border:1px solid #444">Cari paket di repository</td></tr>
        <tr><td style="padding:8px;border:1px solid #444"><code>apt show &lt;pkg&gt;</code></td><td style="padding:8px;border:1px solid #444">Info detail tentang paket</td></tr>
      </table>

      <h3>Sumber Paket (sources.list)</h3>
      <pre class="code-block"># /etc/apt/sources.list
# Repository utama Debian 12 (Bookworm)
deb https://deb.debian.org/debian bookworm main contrib non-free non-free-firmware
deb https://deb.debian.org/debian bookworm-updates main
deb https://security.debian.org/debian-security bookworm-security main

# Backports (versi lebih baru dari beberapa paket)
deb https://deb.debian.org/debian bookworm-backports main</pre>

      <h3>Systemd — Service Management</h3>
      <pre class="code-block"># Kelola service dengan systemctl
systemctl status apache2        # cek status
systemctl start apache2         # mulai service
systemctl stop apache2          # hentikan service
systemctl restart apache2       # restart service
systemctl reload apache2        # reload konfigurasi (tanpa restart)
systemctl enable apache2        # aktifkan auto-start saat boot
systemctl disable apache2       # nonaktifkan auto-start
systemctl list-units --type=service  # tampilkan semua service</pre>

      <h3>User & Permission Management</h3>
      <pre class="code-block"># Manajemen user
adduser username           # tambah user baru (interaktif)
usermod -aG sudo username  # tambahkan user ke grup sudo
passwd username            # ganti password user
deluser username           # hapus user
id username                # info user dan group

# Permission file (rwxrwxrwx = owner/group/other)
chmod 755 /var/www/html    # rwxr-xr-x
chmod 644 file.txt          # rw-r--r--
chown www-data:www-data /var/www/html  # ganti owner
ls -la                     # tampilkan permission detail</pre>

      <h3>Perintah Dasar Linux Berguna</h3>
      <pre class="code-block"># Navigasi & file
ls -la          # list detail
cd /etc         # pindah direktori
pwd             # direktori saat ini
cp src dst      # copy file
mv src dst      # pindah/rename
rm -rf dir/     # hapus folder
find / -name "*.conf"  # cari file

# Monitoring sistem
top / htop      # monitor proses
df -h           # disk usage
free -h         # memory usage
netstat -tlnp   # port yang listening
ss -tlnp        # alternatif netstat
journalctl -u apache2  # log service

# Network
ip addr         # tampilkan IP address
ip route        # routing table
ping 8.8.8.8    # test konektivitas
curl -I https://google.com  # HTTP request</pre>

      <div class="info-box warning"><span class="info-icon">⚠️</span><div><strong>Penting:</strong> Selalu buat backup sebelum modifikasi file konfigurasi sistem: <code>cp /etc/apache2/apache2.conf /etc/apache2/apache2.conf.bak</code></div></div>
    `
  }
};

// ===================== PRAKTIKUM MODULES =====================
window.PRAKTIKUM_MODULES = [
  {
    id: 1,
    title: 'Pengenalan Cisco Packet Tracer dan Topologi',
    icon: '🖥️',
    desc: 'Mengenal antarmuka Cisco Packet Tracer, menambahkan perangkat jaringan, dan membangun topologi jaringan sederhana.',
    tujuan: [
      'Memahami antarmuka Cisco Packet Tracer',
      'Menambahkan dan menghubungkan perangkat jaringan',
      'Membedakan jenis kabel: straight-through, crossover, serial',
      'Membangun topologi jaringan star sederhana'
    ],
    langkah: [
      'Buka Cisco Packet Tracer dan kenali layout antarmuka (toolbar, device list, workspace)',
      'Tambahkan perangkat: 1 Switch 2960, 3 PC, 1 Router 2911',
      'Hubungkan PC ke Switch menggunakan kabel Straight-through (Copper Straight-Through)',
      'Hubungkan Switch ke Router menggunakan kabel Straight-through',
      'Verifikasi koneksi dengan memeriksa indikator lampu pada port (hijau = terhubung)',
      'Simpan topologi dengan File → Save As'
    ],
    catatan: 'Packet Tracer tersedia gratis di Cisco Networking Academy. Daftar di netacad.com.',
    file: 'Modul 1 - Pengenalan Cisco Packet Tracer dan Topol.docx'
  },
  {
    id: 2,
    title: 'Konfigurasi IP Address dan Subnetting',
    icon: '🧮',
    desc: 'Mengonfigurasi IP address pada PC dan router, serta menerapkan konsep subnetting dalam topologi jaringan.',
    tujuan: [
      'Mengonfigurasi IP address, subnet mask, dan default gateway pada PC',
      'Mengonfigurasi IP address pada interface router',
      'Menghitung subnet dan host yang tersedia',
      'Melakukan uji konektivitas dengan perintah ping'
    ],
    langkah: [
      'Buka topologi dari Modul 1 atau buat topologi baru',
      'Klik PC → Desktop → IP Configuration',
      'Set IP: 192.168.1.10, Subnet: 255.255.255.0, Gateway: 192.168.1.1',
      'Konfigurasi router: Router(config)# interface fa0/0',
      'Router(config-if)# ip address 192.168.1.1 255.255.255.0',
      'Router(config-if)# no shutdown',
      'Test ping dari PC ke router: PC→ Command Prompt → ping 192.168.1.1',
      'Verifikasi: Router# show ip interface brief'
    ],
    catatan: 'Subnet /24 = 255.255.255.0 = 254 host. Subnet /25 = 255.255.255.128 = 126 host per jaringan.',
    file: 'Modul 2 - Konfigurasi IP Address dan Subnetting.docx'
  },
  {
    id: 3,
    title: 'Konfigurasi Static Routing',
    icon: '🗺️',
    desc: 'Mengonfigurasi static routing pada router Cisco untuk menghubungkan dua jaringan berbeda secara manual.',
    tujuan: [
      'Memahami konsep routing table dan jalur pengiriman paket',
      'Mengonfigurasi static route pada Cisco Router',
      'Mengonfigurasi default route (gateway of last resort)',
      'Verifikasi konektivitas antar jaringan berbeda'
    ],
    langkah: [
      'Bangun topologi: PC1 (192.168.1.0/24) — Router0 — Router1 — PC2 (192.168.2.0/24)',
      'Konfigurasi IP semua interface (fa0/0, fa0/1, serial)',
      'Pada Router0: ip route 192.168.2.0 255.255.255.0 [next-hop IP]',
      'Pada Router1: ip route 192.168.1.0 255.255.255.0 [next-hop IP]',
      'Tambahkan default route: ip route 0.0.0.0 0.0.0.0 [ISP gateway]',
      'Verifikasi: show ip route',
      'Test ping dari PC1 ke PC2'
    ],
    catatan: 'Static route cocok untuk jaringan kecil. Untuk jaringan besar, gunakan dynamic routing.',
    file: 'Modul 3 - Konfigurasi Static Routing.docx'
  },
  {
    id: 4,
    title: 'Dynamic Routing dengan RIP Version 2',
    icon: '🔄',
    desc: 'Mengimplementasikan RIPv2 untuk routing dinamis antar router, sehingga router dapat saling bertukar informasi routing secara otomatis.',
    tujuan: [
      'Memahami konsep distance vector routing protocol',
      'Mengonfigurasi RIPv2 pada Cisco Router',
      'Memverifikasi database dan tabel routing RIP',
      'Membandingkan RIP dengan static routing'
    ],
    langkah: [
      'Bangun topologi dengan minimal 3 router dan 3 jaringan berbeda',
      'Konfigurasi IP address semua interface',
      'Pada setiap router: Router(config)# router rip',
      'Router(config-router)# version 2',
      'Router(config-router)# no auto-summary',
      'Router(config-router)# network [network-address]  ← ulangi untuk setiap network',
      'Tunggu konvergensi (sekitar 30 detik)',
      'Verifikasi: show ip route → lihat route dengan kode "R"',
      'Verifikasi: show ip rip database'
    ],
    catatan: 'RIPv2 maksimum 15 hop count. Untuk jaringan besar gunakan OSPF yang lebih efisien.',
    file: 'Modul 4 - Dynamic Routing dengan RIP Version 2.docx'
  },
  {
    id: 5,
    title: 'Konfigurasi VLAN dan Inter-VLAN Routing',
    icon: '🏗️',
    desc: 'Mengonfigurasi VLAN untuk segmentasi jaringan dan Inter-VLAN Routing menggunakan metode Router-on-a-Stick.',
    tujuan: [
      'Membuat dan mengonfigurasi VLAN pada switch Cisco',
      'Mengonfigurasi access port dan trunk port',
      'Mengimplementasikan Inter-VLAN Routing (Router-on-a-Stick)',
      'Memverifikasi isolasi dan komunikasi antar VLAN'
    ],
    langkah: [
      'Bangun topologi: PC (VLAN 10) + PC (VLAN 20) → Switch → Router',
      'Buat VLAN: Switch(config)# vlan 10 / name MARKETING',
      'Switch(config)# vlan 20 / name IT',
      'Set access port: switchport mode access / switchport access vlan 10',
      'Set trunk ke router: switchport mode trunk',
      'Pada router, buat sub-interface: interface fa0/0.10',
      'encapsulation dot1Q 10',
      'ip address 192.168.10.1 255.255.255.0',
      'Ulangi untuk VLAN 20 dengan sub-interface fa0/0.20',
      'Verifikasi: show vlan brief / show interfaces trunk'
    ],
    catatan: 'PC di VLAN berbeda tidak bisa berkomunikasi langsung. Butuh router (Inter-VLAN routing) atau Layer 3 switch.',
    file: 'Modul 5 - Konfigurasi VLAN dan Inter-VLAN Routing.docx'
  },
  {
    id: 6,
    title: 'Konfigurasi DHCP Server dan DNS',
    icon: '🌐',
    desc: 'Mengonfigurasi DHCP Server pada Cisco Router untuk alokasi IP otomatis dan layanan DNS pada jaringan.',
    tujuan: [
      'Memahami cara kerja DHCP (Dynamic Host Configuration Protocol)',
      'Mengonfigurasi DHCP Server pada Cisco Router',
      'Mengecualikan (exclude) IP address dari pool DHCP',
      'Verifikasi alokasi IP otomatis pada client'
    ],
    langkah: [
      'Bangun topologi: 3 PC (DHCP client) → Switch → Router (DHCP server)',
      'Konfigurasi IP pada router interface: 192.168.1.1/24',
      'Buat DHCP pool: Router(config)# ip dhcp pool KANTOR',
      'network 192.168.1.0 255.255.255.0',
      'default-router 192.168.1.1',
      'dns-server 8.8.8.8 8.8.4.4',
      'lease 7  ← lease 7 hari',
      'Exclude IP statis: ip dhcp excluded-address 192.168.1.1 192.168.1.20',
      'Set PC ke DHCP: PC → IP Configuration → DHCP',
      'Verifikasi: show ip dhcp binding / show ip dhcp pool'
    ],
    catatan: 'DHCP menyederhanakan manajemen jaringan. Untuk server/printer, gunakan IP statis bukan DHCP.',
    file: 'Modul 6 - Konfigurasi DHCP Server dan DNS.docx'
  },
  {
    id: 7,
    title: 'Network Address Translation (NAT)',
    icon: '🔀',
    desc: 'Mengonfigurasi NAT Overload (PAT) pada Cisco Router untuk memungkinkan banyak perangkat internal mengakses internet melalui satu IP publik.',
    tujuan: [
      'Memahami perbedaan IP private dan IP publik',
      'Mengonfigurasi Static NAT, Dynamic NAT, dan NAT Overload (PAT)',
      'Menandai interface inside dan outside pada router',
      'Memverifikasi tabel translasi NAT'
    ],
    langkah: [
      'Bangun topologi: LAN (192.168.1.0/24) → Router → ISP/Internet (203.0.113.0/30)',
      'Tandai interface inside: interface fa0/0 / ip nat inside',
      'Tandai interface outside: interface fa0/1 / ip nat outside',
      'Buat ACL untuk menentukan traffic yang di-NAT: access-list 1 permit 192.168.1.0 0.0.0.255',
      'Konfigurasi NAT Overload: ip nat inside source list 1 interface fa0/1 overload',
      'Test konektivitas dari PC internal ke internet',
      'Verifikasi: show ip nat translations',
      'Verifikasi: show ip nat statistics'
    ],
    catatan: 'NAT Overload (PAT) adalah jenis NAT paling umum. Satu IP publik melayani ribuan client private menggunakan port number berbeda.',
    file: 'Modul 7 - Network Address Translation (NAT).docx'
  },
  {
    id: 8,
    title: 'Access Control List (ACL) untuk Keamanan',
    icon: '🛡️',
    desc: 'Mengimplementasikan Standard ACL dan Extended ACL pada Cisco Router untuk mengontrol akses traffic jaringan sebagai mekanisme keamanan.',
    tujuan: [
      'Memahami perbedaan Standard ACL dan Extended ACL',
      'Mengonfigurasi Standard ACL untuk memfilter berdasarkan source IP',
      'Mengonfigurasi Extended ACL untuk memfilter source, destination, dan port',
      'Menerapkan ACL pada interface router dengan arah yang tepat'
    ],
    langkah: [
      'Bangun topologi dengan minimal 2 jaringan dan 1 router',
      'Standard ACL — blokir host tertentu:',
      '  access-list 10 deny host 192.168.1.50',
      '  access-list 10 permit any',
      '  interface fa0/1 / ip access-group 10 out',
      'Extended ACL — blokir Telnet dari LAN ke server:',
      '  access-list 110 deny tcp 192.168.1.0 0.0.0.255 host 10.0.0.100 eq 23',
      '  access-list 110 permit ip any any',
      '  interface fa0/0 / ip access-group 110 in',
      'Verifikasi: show access-lists  ← perhatikan match counter',
      'Test: ping yang diblokir harus gagal, yang lain berhasil'
    ],
    catatan: 'INGAT: Setiap ACL berakhir dengan implicit "deny any". Standard ACL dekat destination, Extended ACL dekat source.',
    file: 'Modul 8 - Access Control List (ACL) untuk Keamanan.docx'
  }
];

// ===================== CISCO CLI CHEAT SHEET =====================
window.CISCO_CLI = [
  {
    category: '🖥️ Mode Navigasi',
    commands: [
      { cmd: 'enable', desc: 'Masuk ke privileged EXEC mode' },
      { cmd: 'configure terminal', desc: 'Masuk ke global configuration mode' },
      { cmd: 'interface fa0/0', desc: 'Masuk ke konfigurasi interface' },
      { cmd: 'end', desc: 'Kembali ke privileged EXEC mode' },
      { cmd: 'exit', desc: 'Kembali satu level ke atas' },
      { cmd: 'write memory / copy run start', desc: 'Simpan konfigurasi ke NVRAM' },
    ]
  },
  {
    category: '🌐 Konfigurasi IP',
    commands: [
      { cmd: 'ip address 192.168.1.1 255.255.255.0', desc: 'Set IP address pada interface' },
      { cmd: 'no shutdown', desc: 'Aktifkan interface (admin up)' },
      { cmd: 'ip default-gateway 192.168.1.1', desc: 'Set default gateway (di switch)' },
      { cmd: 'show ip interface brief', desc: 'Status semua interface + IP' },
      { cmd: 'show interfaces fa0/0', desc: 'Detail statistik interface' },
    ]
  },
  {
    category: '🗺️ Routing',
    commands: [
      { cmd: 'ip route 192.168.2.0 255.255.255.0 10.0.0.2', desc: 'Buat static route' },
      { cmd: 'ip route 0.0.0.0 0.0.0.0 [next-hop]', desc: 'Default route (gateway of last resort)' },
      { cmd: 'router rip / version 2 / network X', desc: 'Konfigurasi RIPv2' },
      { cmd: 'router ospf 1 / network X Y area 0', desc: 'Konfigurasi OSPF area 0' },
      { cmd: 'show ip route', desc: 'Tampilkan routing table' },
      { cmd: 'show ip rip database', desc: 'Database routing RIP' },
      { cmd: 'show ip ospf neighbor', desc: 'Daftar neighbor OSPF' },
    ]
  },
  {
    category: '🏗️ VLAN & Switching',
    commands: [
      { cmd: 'vlan 10 / name NAMA', desc: 'Buat VLAN dan beri nama' },
      { cmd: 'switchport mode access / access vlan 10', desc: 'Set access port ke VLAN 10' },
      { cmd: 'switchport mode trunk', desc: 'Set trunk port (802.1Q)' },
      { cmd: 'encapsulation dot1Q 10', desc: 'Set sub-interface ke VLAN 10' },
      { cmd: 'show vlan brief', desc: 'Lihat semua VLAN dan port-nya' },
      { cmd: 'show interfaces trunk', desc: 'Lihat trunk port aktif' },
      { cmd: 'show mac address-table', desc: 'Tabel MAC address switch' },
    ]
  },
  {
    category: '🌐 DHCP & NAT',
    commands: [
      { cmd: 'ip dhcp pool NAMA / network / default-router', desc: 'Buat DHCP pool' },
      { cmd: 'ip dhcp excluded-address 10.0.0.1 10.0.0.10', desc: 'Exclude IP dari DHCP' },
      { cmd: 'show ip dhcp binding', desc: 'Lihat pemetaan DHCP aktif' },
      { cmd: 'ip nat inside source list 1 interface fa0/1 overload', desc: 'Konfigurasi PAT' },
      { cmd: 'ip nat inside / ip nat outside', desc: 'Tandai interface inside/outside' },
      { cmd: 'show ip nat translations', desc: 'Tabel translasi NAT aktif' },
    ]
  },
  {
    category: '🛡️ ACL & Keamanan',
    commands: [
      { cmd: 'access-list 10 permit/deny [source]', desc: 'Standard ACL (source IP only)' },
      { cmd: 'access-list 110 deny tcp [src] [dst] eq 80', desc: 'Extended ACL (src, dst, port)' },
      { cmd: 'ip access-group 10 in/out', desc: 'Terapkan ACL pada interface' },
      { cmd: 'show access-lists', desc: 'Tampilkan semua ACL dan hit count' },
      { cmd: 'no access-list 10', desc: 'Hapus seluruh ACL bernomor 10' },
      { cmd: 'service password-encryption', desc: 'Enkripsi semua password di config' },
      { cmd: 'enable secret PASS', desc: 'Set password enable terenkripsi (MD5)' },
    ]
  },
  {
    category: '🔍 Diagnostik & Troubleshooting',
    commands: [
      { cmd: 'ping 192.168.1.1', desc: 'Test konektivitas ICMP' },
      { cmd: 'traceroute 8.8.8.8', desc: 'Lacak jalur paket hop by hop' },
      { cmd: 'show running-config', desc: 'Tampilkan konfigurasi aktif (RAM)' },
      { cmd: 'show startup-config', desc: 'Tampilkan konfigurasi tersimpan (NVRAM)' },
      { cmd: 'debug ip icmp', desc: 'Debug paket ICMP (ping)' },
      { cmd: 'undebug all', desc: 'Matikan semua debug' },
      { cmd: 'show version', desc: 'Versi IOS dan info hardware' },
    ]
  },
];
