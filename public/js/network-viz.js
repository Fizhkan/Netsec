// ===================== NETWORK CANVAS VISUALIZATION =====================
class NetworkVisualizer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.nodes = [];
    this.packets = [];
    this.animationId = null;
    this.resize();
    this.initNodes();
    window.addEventListener('resize', () => this.resize());
    this.canvas.addEventListener('click', (e) => this.handleClick(e));
    this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
  }

  resize() {
    if (!this.canvas) return;
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width || 800;
    this.canvas.height = 450;
    this.initNodes();
  }

  initNodes() {
    if (!this.canvas) return;
    const W = this.canvas.width;
    const H = this.canvas.height;
    const cx = W / 2, cy = H / 2;

    this.nodes = [
      { id: 'internet', x: cx, y: 60, label: 'Internet', icon: '🌐', type: 'cloud', color: '#4f8ef7', connections: ['router'] },
      { id: 'router', x: cx, y: 150, label: 'Router', icon: '📡', type: 'router', color: '#7c3aed', connections: ['firewall', 'switch1'] },
      { id: 'firewall', x: cx - 140, y: 240, label: 'Firewall', icon: '🧱', type: 'security', color: '#ef4444', connections: ['switch2'] },
      { id: 'switch1', x: cx + 140, y: 240, label: 'Switch', icon: '🔀', type: 'switch', color: '#10b981', connections: ['server1', 'server2'] },
      { id: 'switch2', x: cx - 140, y: 330, label: 'Switch LAN', icon: '🔀', type: 'switch', color: '#06b6d4', connections: ['pc1', 'pc2', 'pc3'] },
      { id: 'server1', x: cx + 80, y: 350, label: 'Web Server', icon: '🖥️', type: 'server', color: '#f59e0b', connections: [] },
      { id: 'server2', x: cx + 200, y: 350, label: 'DB Server', icon: '🗄️', type: 'server', color: '#f59e0b', connections: [] },
      { id: 'pc1', x: cx - 240, y: 400, label: 'PC-1', icon: '💻', type: 'pc', color: '#94a3b8', connections: [] },
      { id: 'pc2', x: cx - 140, y: 420, label: 'PC-2', icon: '💻', type: 'pc', color: '#94a3b8', connections: [] },
      { id: 'pc3', x: cx - 40, y: 400, label: 'Phone', icon: '📱', type: 'mobile', color: '#94a3b8', connections: [] },
    ];
    this.hoveredNode = null;
  }

  handleMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    this.hoveredNode = null;
    for (const node of this.nodes) {
      const dist = Math.sqrt((mx - node.x) ** 2 + (my - node.y) ** 2);
      if (dist < 32) { this.hoveredNode = node.id; break; }
    }
    this.canvas.style.cursor = this.hoveredNode ? 'pointer' : 'default';
  }

  handleClick(e) {
    const rect = this.canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    for (const node of this.nodes) {
      const dist = Math.sqrt((mx - node.x) ** 2 + (my - node.y) ** 2);
      if (dist < 32) {
        this.sendPacket('pc1', node.id);
        break;
      }
    }
  }

  sendPacket(fromId, toId) {
    const route = this.findRoute(fromId, toId);
    if (!route || route.length < 2) return;
    let delay = 0;
    for (let i = 0; i < route.length - 1; i++) {
      const from = this.nodes.find(n => n.id === route[i]);
      const to = this.nodes.find(n => n.id === route[i + 1]);
      if (from && to) {
        setTimeout(() => {
          this.packets.push({
            x: from.x, y: from.y,
            tx: to.x, ty: to.y,
            progress: 0,
            color: `hsl(${Math.random() * 360},80%,60%)`
          });
        }, delay);
        delay += 600;
      }
    }
  }

  findRoute(fromId, toId) {
    const visited = new Set();
    const queue = [[fromId]];
    while (queue.length) {
      const path = queue.shift();
      const current = path[path.length - 1];
      if (current === toId) return path;
      if (visited.has(current)) continue;
      visited.add(current);
      const node = this.nodes.find(n => n.id === current);
      if (node) {
        // build reverse connections
        const allConns = new Set(node.connections);
        this.nodes.forEach(n => { if (n.connections.includes(current)) allConns.add(n.id); });
        for (const conn of allConns) { if (!visited.has(conn)) queue.push([...path, conn]); }
      }
    }
    return null;
  }

  draw() {
    if (!this.canvas || !this.ctx) return;
    const ctx = this.ctx;
    const W = this.canvas.width, H = this.canvas.height;
    ctx.clearRect(0, 0, W, H);

    // Background grid
    ctx.strokeStyle = 'rgba(255,255,255,0.03)';
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    // Draw connections
    this.nodes.forEach(node => {
      node.connections.forEach(connId => {
        const target = this.nodes.find(n => n.id === connId);
        if (!target) return;
        const isHovered = this.hoveredNode === node.id || this.hoveredNode === connId;
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(target.x, target.y);
        ctx.strokeStyle = isHovered ? 'rgba(79,142,247,0.6)' : 'rgba(255,255,255,0.1)';
        ctx.lineWidth = isHovered ? 2 : 1;
        ctx.setLineDash(isHovered ? [] : [5, 5]);
        ctx.stroke();
        ctx.setLineDash([]);
      });
    });

    // Draw packets
    this.packets = this.packets.filter(p => p.progress <= 1);
    this.packets.forEach(p => {
      p.progress += 0.025;
      const x = p.x + (p.tx - p.x) * p.progress;
      const y = p.y + (p.ty - p.y) * p.progress;
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    // Draw nodes
    this.nodes.forEach(node => {
      const isHovered = this.hoveredNode === node.id;
      const r = isHovered ? 28 : 24;

      // Glow
      if (isHovered) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, r + 8, 0, Math.PI * 2);
        ctx.fillStyle = node.color + '20';
        ctx.fill();
      }

      // Circle
      ctx.beginPath();
      ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
      ctx.fillStyle = '#0f1629';
      ctx.fill();
      ctx.strokeStyle = isHovered ? node.color : 'rgba(255,255,255,0.15)';
      ctx.lineWidth = isHovered ? 2 : 1;
      ctx.stroke();

      // Icon
      ctx.font = `${isHovered ? 20 : 16}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.icon, node.x, node.y);

      // Label
      ctx.font = '11px Inter, sans-serif';
      ctx.fillStyle = isHovered ? '#e2e8f0' : '#94a3b8';
      ctx.textBaseline = 'top';
      ctx.fillText(node.label, node.x, node.y + r + 5);
    });
  }

  start() {
    if (!this.canvas) return;
    const loop = () => {
      this.draw();
      this.animationId = requestAnimationFrame(loop);
    };
    loop();
    // Auto send packets periodically
    setInterval(() => {
      const endpoints = ['pc1', 'pc2', 'pc3'];
      const destinations = ['server1', 'server2', 'internet'];
      const from = endpoints[Math.floor(Math.random() * endpoints.length)];
      const to = destinations[Math.floor(Math.random() * destinations.length)];
      this.sendPacket(from, to);
    }, 2500);
  }

  stop() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
  }
}

window.NetworkVisualizer = NetworkVisualizer;
