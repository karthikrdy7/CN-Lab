document.addEventListener('DOMContentLoaded', () => {
  const slot = document.getElementById('sidebar-slot');
  if (!slot) return;
  slot.innerHTML = `
    <div class="brand">
      <span class="brand-led"></span>
      <span>
        <span class="brand-name">NETSTACK</span>
        <span class="brand-sub">learn computer networks</span>
      </span>
    </div>
    <div class="nav-group-label">Start here</div>
    <a class="nav-port" href="index.html"><span class="port-num">00</span><span class="port-led"></span> Home</a>
    <div class="nav-group-label">Foundations</div>
    <a class="nav-port" href="osi-model.html"><span class="port-num">01</span><span class="port-led"></span> The OSI Model</a>
    <a class="nav-port" href="tcpip-model.html"><span class="port-num">02</span><span class="port-led"></span> TCP/IP Model</a>
    <a class="nav-port" href="topologies.html"><span class="port-num">03</span><span class="port-led"></span> Network Topologies</a>
    <div class="nav-group-label">Addressing &amp; delivery</div>
    <a class="nav-port" href="ip-addressing.html"><span class="port-num">04</span><span class="port-led"></span> IP Addressing &amp; Subnets</a>
    <a class="nav-port" href="switching.html"><span class="port-num">05</span><span class="port-led"></span> Switching (Layer 2)</a>
    <a class="nav-port" href="routing.html"><span class="port-num">06</span><span class="port-led"></span> Routing (Layer 3)</a>
    <div class="nav-group-label">Transport &amp; apps</div>
    <a class="nav-port" href="tcp-udp.html"><span class="port-num">07</span><span class="port-led"></span> TCP vs UDP</a>
    <a class="nav-port" href="dns-http.html"><span class="port-num">08</span><span class="port-led"></span> DNS &amp; HTTP</a>
    <div class="nav-group-label">Lab &amp; projects</div>
    <a class="nav-port" href="network-lab.html"><span class="port-num">✦</span><span class="port-led"></span> Network Lab</a>
  `;
  const here = location.pathname.split('/').pop() || 'index.html';
  slot.querySelectorAll('.nav-port').forEach(a => {
    if (a.getAttribute('href') === here) a.classList.add('active');
  });
});
