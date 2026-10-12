// Dataset 1: Mahasiswa (TETAP UTUH, TIDAK DIUBAH SAMA SEKALI)[cite: 1]
  const defaultDataset1 = [
    { id: "25210098", name: "Muhammad Fakrurazi", val1: 92, status: "Ya", val2: 95 },
    { id: "25210109", name: "Mohammad Aqmal", val1: 88, status: "Ya", val2: 90 },
    { id: "25210137", name: "Padillah", val1: 85, status: "Ya", val2: 88 },
    { id: "25210397", name: "Sakinah", val1: 90, status: "Ya", val2: 92 },
    { id: "25210386", name: "Niswatul Khaira", val1: 82, status: "Ya", val2: 85 },
    { id: "25210105", name: "Fajar Ramadhan", val1: 78, status: "Tidak", val2: 80 },
    { id: "25210101", name: "Ahmad Zaki", val1: 85, status: "Ya", val2: 90 },
    { id: "25210102", name: "Siti Rahma", val1: 75, status: "Tidak", val2: 85 },
    { id: "25210103", name: "Budi Santoso", val1: 90, status: "Ya", val2: 95 },
    { id: "25210104", name: "Dewi Lestari", val1: 65, status: "Ya", val2: 70 },
    { id: "25210106", name: "Rizky Pratama", val1: 88, status: "Ya", val2: 82 },
    { id: "25210107", name: "Putri Ananda", val1: 95, status: "Ya", val2: 98 },
    { id: "25210108", name: "Eko Prasetyo", val1: 70, status: "Tidak", val2: 75 },
    { id: "25210110", name: "Nurul Hidayah", val1: 84, status: "Ya", val2: 88 },
    { id: "25210111", name: "Yoga Pratama", val1: 55, status: "Tidak", val2: 60 },
    { id: "25210112", name: "Fitri Handayani", val1: 91, status: "Ya", val2: 90 },
    { id: "25210113", name: "Gilang Ramadhan", val1: 78, status: "Ya", val2: 82 },
    { id: "25210114", name: "Intan Permata", val1: 83, status: "Tidak", val2: 86 },
    { id: "25210115", name: "Joko Widodo", val1: 45, status: "Tidak", val2: 50 },
    { id: "25210116", name: "Kartika Sari", val1: 89, status: "Ya", val2: 91 }
  ];

  // Dataset 2: Produk Toko (TETAP UTUH DATA ITEMNYA)[cite: 1]
  const defaultDataset2 = [
    { id: "PRD-01", name: "Laptop Pro X1", val1: 12000000, status: "Ya", val2: 45 },
    { id: "PRD-02", name: "Mouse Wireless RGB", val1: 250000, status: "Ya", val2: 150 },
    { id: "PRD-03", name: "Keyboard Mechanical", val1: 750000, status: "Ya", val2: 80 },
    { id: "PRD-04", name: "Monitor 24 Inch IPS", val1: 2100000, status: "Ya", val2: 30 },
    { id: "PRD-05", name: "Headset Gaming 7.1", val1: 450000, status: "Ya", val2: 65 },
    { id: "PRD-06", name: "Flashdisk 64GB", val1: 95000, status: "Tidak", val2: 12 },
    { id: "PRD-07", name: "External SSD 512GB", val1: 950000, status: "Ya", val2: 40 },
    { id: "PRD-08", name: "Webcam HD 1080p", val1: 350000, status: "Tidak", val2: 15 },
    { id: "PRD-09", name: "Printer Inkjet All-in-One", val1: 1450000, status: "Ya", val2: 18 },
    { id: "PRD-10", name: "Router WiFi Dual Band", val1: 550000, status: "Ya", val2: 55 },
    { id: "PRD-11", name: "Speaker Bluetooth Mini", val1: 180000, status: "Tidak", val2: 8 },
    { id: "PRD-12", name: "Mousepad Gaming XL", val1: 120000, status: "Ya", val2: 110 },
    { id: "PRD-13", name: "Cooling Pad Laptop", val1: 150000, status: "Tidak", val2: 5 },
    { id: "PRD-14", name: "Kabel HDMI 2 Meter", val1: 65000, status: "Ya", val2: 95 },
    { id: "PRD-15", name: "Flashdisk 32GB", val1: 60000, status: "Tidak", val2: 4 },
    { id: "PRD-16", name: "Powerbank 10000mAh", val1: 280000, status: "Ya", val2: 70 },
    { id: "PRD-17", name: "Charger Fast Charging 30W", val1: 175000, status: "Ya", val2: 85 },
    { id: "PRD-18", name: "Microphone Condenser USB", val1: 650000, status: "Ya", val2: 25 },
    { id: "PRD-19", name: "Tas Laptop Eksekutif", val1: 320000, status: "Tidak", val2: 10 },
    { id: "PRD-20", name: "Tablet Drawing Grafis", val1: 1850000, status: "Ya", val2: 22 }
  ];

  let currentDatasetType = 1; // Default ke Dataset 1 Mahasiswa[cite: 1]
  let dataset = JSON.parse(JSON.stringify(defaultDataset1));[cite: 1]
  let currentFilter = 'all';[cite: 1]
  let currentVennSector = 'abc';[cite: 1]
  let currentVennMode = 'all3';[cite: 1]
  let currentPieMode = 3;[cite: 1]

  window.addEventListener('DOMContentLoaded', () => {
    switchDatasetType(1);
  });

  window.toggleSidebar = function() {
    if (window.innerWidth < 768) {
      document.body.classList.toggle('mobile-sidebar-open');
    } else {
      document.body.classList.toggle('sidebar-collapsed');
    }
  }

  window.switchTab = function(tabId) {
    const sections = ['dashboard', 'dataset', 'himpunan', 'venn', 'pie', 'operasi', 'panduan', 'tentang'];
    sections.forEach(sec => {
      const el = document.getElementById(`section-${sec}`);
      const btn = document.getElementById(`nav-${sec}`);
      if (el) el.classList.add('hidden');
      if (btn) {
        btn.classList.remove('bg-[#DBEAFE]', 'text-[#2563EB]', 'border-[#2563EB]', 'font-semibold');
        btn.classList.add('text-slate-600', 'hover:bg-[#F1F5F9]', 'hover:text-slate-900', 'border-transparent', 'font-medium');
      }
    });

    const activeSec = document.getElementById(`section-${tabId}`);
    const activeBtn = document.getElementById(`nav-${tabId}`);
    if (activeSec) activeSec.classList.remove('hidden');
    if (activeBtn) {
      activeBtn.classList.remove('text-slate-600', 'hover:bg-[#F1F5F9]', 'hover:text-slate-900', 'border-transparent', 'font-medium');
      activeBtn.classList.add('bg-[#DBEAFE]', 'text-[#2563EB]', 'border-[#2563EB]', 'font-semibold');
    }

    if (window.innerWidth < 768) {
      document.body.classList.remove('mobile-sidebar-open');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.switchDatasetType = function(typeNum) {
    currentDatasetType = typeNum;
    const btn1 = document.getElementById('pill-ds-1');
    const btn2 = document.getElementById('pill-ds-2');

    if (typeNum === 1) {
      dataset = JSON.parse(JSON.stringify(defaultDataset1));
      btn1.className = "px-2.5 sm:px-4 py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all bg-[#3B82F6] text-white shadow-xs truncate";
      btn2.className = "px-2.5 sm:px-4 py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all text-slate-600 hover:text-slate-900 truncate";
      
      document.getElementById('header-data-badge').innerText = "20 Data Mahasiswa";
      document.getElementById('dataset-section-title').innerText = "Dataset Mahasiswa";
      document.getElementById('dataset-section-subtitle').innerText = "Kelola data mahasiswa yang menjadi semesta himpunan (U).";
      document.getElementById('modal-title-text').innerText = "Tambah Data Mahasiswa";
      document.getElementById('label-form-id').innerText = "NIM Mahasiswa";
      document.getElementById('label-form-name').innerText = "Nama Mahasiswa";
      document.getElementById('label-form-val1').innerText = "Nilai (0-100)";
      document.getElementById('label-form-val2').innerText = "Kehadiran (%)";
      document.getElementById('label-form-status').innerText = "Status Organisasi";

      document.getElementById('card-label-a').innerText = "HIMPUNAN A (NILAI)";
      document.getElementById('card-label-b').innerText = "HIMPUNAN B (ORGANISASI)";
      document.getElementById('card-label-c').innerText = "HIMPUNAN C (KEHADIRAN)";

      document.getElementById('svg-legend-label-a').innerText = "Nilai ≥ 80";
      document.getElementById('svg-legend-label-b').innerText = "Organisasi";
      document.getElementById('svg-legend-label-c').innerText = "Kehadiran ≥ 80%";
      document.getElementById('svg-full-label-a').innerText = "Nilai ≥ 80";
      document.getElementById('svg-full-label-b').innerText = "Organisasi";
      document.getElementById('svg-full-label-c').innerText = "Kehadiran ≥ 80%";

      document.getElementById('summary-label-u').innerText = "Semesta Seluruh Mahasiswa";
      document.getElementById('summary-label-a').innerText = "Nilai Tinggi (≥ 80)";
      document.getElementById('summary-label-b').innerText = "Aktif Organisasi (Ya)";
      document.getElementById('summary-label-c').innerText = "Kehadiran Tinggi (≥ 80%)";

      // Def Atribut Dataset 1[cite: 1]
      document.getElementById('def-title-1').innerText = "1. Atribut & Kolom Dataset";
      document.getElementById('def-list-1').innerHTML = `
        <li><strong>NIM:</strong> Nomor Induk Mahasiswa sebagai identifikasi unik.</li>
        <li><strong>Nama Mahasiswa:</strong> Nama lengkap mahasiswa.</li>
        <li><strong>Nilai:</strong> Nilai akademik ujian (0 - 100).</li>
        <li><strong>Kehadiran:</strong> Persentase tingkat kehadiran perkuliahan (%).</li>
        <li><strong>Organisasi:</strong> Status keaktifan organisasi (<code class="bg-slate-100 px-1 py-0.5 rounded font-mono">Ya</code> / <code class="bg-slate-100 px-1 py-0.5 rounded font-mono">Tidak</code>).</li>
      `;
      document.getElementById('def-rules-box').innerHTML = `
        <div class="flex items-center justify-between" id="rule-row-a">
          <span class="font-bold text-blue-700">Himpunan A (Nilai Tinggi):</span>
          <code class="px-2 py-0.5 rounded bg-white text-slate-800 text-[11px] font-mono border">Nilai &gt;= 80</code>
        </div>
        <div class="flex items-center justify-between" id="rule-row-b">
          <span class="font-bold text-cyan-700">Himpunan B (Aktif Organisasi):</span>
          <code class="px-2 py-0.5 rounded bg-white text-slate-800 text-[11px] font-mono border">Status === 'Ya'</code>
        </div>
        <div class="flex items-center justify-between" id="rule-row-c">
          <span class="font-bold text-indigo-700">Himpunan C (Kehadiran Tinggi):</span>
          <code class="px-2 py-0.5 rounded bg-white text-slate-800 text-[11px] font-mono border">Kehadiran &gt;= 80</code>
        </div>
      `;

      // Header Tabel Dataset 1[cite: 1]
      document.getElementById('th-col-1').innerText = "NIM";
      document.getElementById('th-col-2').innerText = "Nama Mahasiswa";
      document.getElementById('th-col-3').innerText = "Nilai";
      document.getElementById('th-col-4').innerText = "Kehadiran";
      document.getElementById('th-col-5').innerText = "Organisasi";

      document.getElementById('res-th-1').innerText = "ID / NIM";
      document.getElementById('res-th-2').innerText = "Nama Mahasiswa";
      document.getElementById('res-th-3').innerText = "Nilai";
      document.getElementById('res-th-4').innerText = "Organisasi";
      document.getElementById('res-th-5').innerText = "Kehadiran";
    } else {
      dataset = JSON.parse(JSON.stringify(defaultDataset2));
      btn2.className = "px-2.5 sm:px-4 py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all bg-[#3B82F6] text-white shadow-xs truncate";
      btn1.className = "px-2.5 sm:px-4 py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all text-slate-600 hover:text-slate-900 truncate";
      
      document.getElementById('header-data-badge').innerText = "20 Data Produk Toko";
      document.getElementById('dataset-section-title').innerText = "Dataset Produk Toko";
      document.getElementById('dataset-section-subtitle').innerText = "Kelola data produk yang menjadi semesta himpunan (U).";
      document.getElementById('modal-title-text').innerText = "Tambah Data Produk";
      document.getElementById('label-form-id').innerText = "Kode Produk";
      document.getElementById('label-form-name').innerText = "Nama Produk";
      document.getElementById('label-form-val1').innerText = "Harga (Rp)";
      document.getElementById('label-form-val2').innerText = "Stok Barang";
      document.getElementById('label-form-status').innerText = "Status Promo (Ya/Tidak)";

      document.getElementById('card-label-a').innerText = "HIMPUNAN A (HARGA)";
      document.getElementById('card-label-b').innerText = "HIMPUNAN B (STOK)";
      document.getElementById('card-label-c').innerText = "HIMPUNAN C (PROMO)";

      document.getElementById('svg-legend-label-a').innerText = "Harga ≥ 500000";
      document.getElementById('svg-legend-label-b').innerText = "Stok > 50";
      document.getElementById('svg-legend-label-c').innerText = "Promo === 'Ya'";
      document.getElementById('svg-full-label-a').innerText = "Harga ≥ 500000";
      document.getElementById('svg-full-label-b').innerText = "Stok > 50";
      document.getElementById('svg-full-label-c').innerText = "Promo === 'Ya'";

      document.getElementById('summary-label-u').innerText = "Semesta Seluruh Produk Toko";
      document.getElementById('summary-label-a').innerText = "Harga Mahal (≥ 500000)";
      document.getElementById('summary-label-b').innerText = "Stok Banyak (> 50)";
      document.getElementById('summary-label-c').innerText = "Sedang Promo (Ya)";

      // Def Atribut Dataset 2 (Sesuai Permintaan Spesifik)[cite: 1]
      document.getElementById('def-title-1').innerText = "1. ATRIBUT & KOLOM DATASET";
      document.getElementById('def-list-1').innerHTML = `
        <li><strong>Kode Produk:</strong> Kode unik produk sebagai penanda identitas elemen semesta.</li>
        <li><strong>Nama Produk:</strong> Nama lengkap produk yang dijual.</li>
        <li><strong>Harga:</strong> Skala numerik (0-1000000) harga produk dalam Rupiah.</li>
        <li><strong>Stok:</strong> Jumlah ketersediaan unit produk (0-1000).</li>
        <li><strong>Promo:</strong> Status keaktifan promo produk (<code class="bg-slate-100 px-1 py-0.5 rounded font-mono">Ya</code> / <code class="bg-slate-100 px-1 py-0.5 rounded font-mono">Tidak</code>).</li>
      `;
      document.getElementById('def-rules-box').innerHTML = `
        <div class="flex items-center justify-between" id="rule-row-a">
          <span class="font-bold text-blue-700">Himpunan A (Harga Mahal):</span>
          <code class="px-2 py-0.5 rounded bg-white text-slate-800 text-[11px] font-mono border">Harga &gt;= 500000</code>
        </div>
        <div class="flex items-center justify-between" id="rule-row-b">
          <span class="font-bold text-cyan-700">Himpunan B (Stok Banyak):</span>
          <code class="px-2 py-0.5 rounded bg-white text-slate-800 text-[11px] font-mono border">Stok &gt; 50</code>
        </div>
        <div class="flex items-center justify-between" id="rule-row-c">
          <span class="font-bold text-indigo-700">Himpunan C (Sedang Promo):</span>
          <code class="px-2 py-0.5 rounded bg-white text-slate-800 text-[11px] font-mono border">Promo === 'Ya'</code>
        </div>
      `;

      // Header Tabel Dataset 2 (Sesuai Permintaan: KODE, NAMA PRODUK, HARGA, STOK, PROMO)[cite: 1]
      document.getElementById('th-col-1').innerText = "KODE";
      document.getElementById('th-col-2').innerText = "NAMA PRODUK";
      document.getElementById('th-col-3').innerText = "HARGA";
      document.getElementById('th-col-4').innerText = "STOK";
      document.getElementById('th-col-5').innerText = "PROMO";

      document.getElementById('res-th-1').innerText = "ID / Kode";
      document.getElementById('res-th-2').innerText = "Nama Produk";
      document.getElementById('res-th-3').innerText = "Harga";
      document.getElementById('res-th-4').innerText = "Promo";
      document.getElementById('res-th-5').innerText = "Stok";
    }

    refreshApp();
  }

  function evaluateItem(item) {
    let inA = false, inB = false, inC = false;
    if (currentDatasetType === 1) {
      inA = item.val1 >= 80;
      inB = item.status === 'Ya';
      inC = item.val2 >= 80;
    } else {
      // Logic Javascript filter untuk Dataset 2 sesuai permintaan[cite: 1]
      inA = item.val1 >= 500000;
      inB = item.val2 > 50;
      inC = item.status === 'Ya';
    }
    return { inA, inB, inC };
  }

  function refreshApp() {
    let countA = 0, countB = 0, countC = 0;
    let listU = [], listA = [], listB = [], listC = [];
    let onlyA = 0, onlyB = 0, onlyC = 0, abc = 0, outside = 0;
    let membersABC = [];

    dataset.forEach((item, index) => {
      const { inA, inB, inC } = evaluateItem(item);
      item._inA = inA;
      item._inB = inB;
      item._inC = inC;

      listU.push(item);
      if (inA) { countA++; listA.push(item); }
      if (inB) { countB++; listB.push(item); }
      if (inC) { countC++; listC.push(item); }

      if (inA && inB && inC) {
        abc++;
        membersABC.push(item);
      } else if (inA && !inB && !inC) { onlyA++; }
      else if (!inA && inB && !inC) { onlyB++; }
      else if (!inA && !inB && inC) { onlyC++; }
      else if (!inA && !inB && !inC) { outside++; }
    });

    document.getElementById('stat-total-u').innerText = dataset.length;
    document.getElementById('stat-total-a').innerText = countA;
    document.getElementById('stat-total-b').innerText = countB;
    document.getElementById('stat-total-c').innerText = countC;

    document.getElementById('dashboard-semesta-badge').innerText = `Total Semesta U : ${dataset.length}`;
    document.getElementById('venn-semesta-text').innerText = `U = ${dataset.length}`;
    document.getElementById('venn-full-semesta-badge').innerText = `Semesta U = ${dataset.length}`;
    document.getElementById('legend-a-count').innerText = `A: ${currentDatasetType===1?'Nilai':'Harga'} (${countA})`;
    document.getElementById('legend-b-count').innerText = `B: ${currentDatasetType===1?'Organisasi':'Stok'} (${countB})`;
    document.getElementById('legend-c-count').innerText = `C: ${currentDatasetType===1?'Kehadiran':'Promo'} (${countC})`;

    document.getElementById('stat-card-a').innerText = countA;
    document.getElementById('stat-card-b').innerText = countB;
    document.getElementById('stat-card-c').innerText = countC;

    document.getElementById('svg-text-u').innerText = `U (Semesta = ${dataset.length})`;
    document.getElementById('svg-full-text-u').innerText = `U (Semesta = ${dataset.length})`;
    
    document.getElementById('venn-num-only-a').innerText = onlyA;
    document.getElementById('venn-full-num-only-a').innerText = onlyA;
    document.getElementById('btn-count-only-a').innerText = onlyA;

    document.getElementById('venn-num-only-b').innerText = onlyB;
    document.getElementById('venn-full-num-only-b').innerText = onlyB;
    document.getElementById('btn-count-only-b').innerText = onlyB;

    document.getElementById('venn-num-only-c').innerText = onlyC;
    document.getElementById('venn-full-num-only-c').innerText = onlyC;
    document.getElementById('btn-count-only-c').innerText = onlyC;

    document.getElementById('venn-num-abc').innerText = abc;
    document.getElementById('venn-full-num-abc').innerText = abc;
    document.getElementById('btn-count-abc').innerText = abc;

    document.getElementById('venn-num-outside').innerText = `Luar: ${outside}`;
    document.getElementById('venn-full-num-outside').innerText = `Luar: ${outside}`;
    document.getElementById('btn-count-outside').innerText = outside;

    document.getElementById('insight-count-abc').innerText = abc;
    let pct = Math.round((abc / dataset.length) * 100);
    document.getElementById('insight-cardinality-text').innerText = `Kardinalitas: |A ∩ B ∩ C| = ${abc}/${dataset.length} (${pct}%)`;
    document.getElementById('venn-intersection-title').innerText = `Irisan A ∩ B ∩ C (${abc} Record)`;
    document.getElementById('venn-intersection-percent').innerText = `${pct}% Semesta`;

    renderMemberList('venn-intersection-list', membersABC);

    document.getElementById('himpunan-count-u').innerText = dataset.length;
    document.getElementById('himpunan-sub-u').innerText = `${dataset.length} Elemen`;
    renderHimpunanList('himpunan-list-u', dataset);

    document.getElementById('himpunan-count-a').innerText = countA;
    renderHimpunanList('himpunan-list-a', listA, 'text-blue-700');

    document.getElementById('himpunan-count-b').innerText = countB;
    renderHimpunanList('himpunan-list-b', listB, 'text-cyan-700');

    document.getElementById('himpunan-count-c').innerText = countC;
    renderHimpunanList('himpunan-list-c', listC, 'text-indigo-700');

    renderDatasetTable();
    selectVennSector(currentVennSector);
    renderPIE();
    executeOperation();
  }

  function renderMemberList(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;
    if (items.length === 0) {
      container.innerHTML = `<p class="text-xs text-slate-400 italic py-2 text-center">Tidak ada record pada sektor ini.</p>`;
      return;
    }
    let html = '';
    items.forEach((item, idx) => {
      let badgeColor = currentDatasetType === 1 ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-cyan-50 text-cyan-700 border-cyan-200';
      html += `
        <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs">
          <div class="flex items-center gap-2.5">
            <span class="font-bold text-slate-400 w-5">${idx+1}.</span>
            <div>
              <p class="font-bold text-slate-800">${item.name}</p>
              <p class="text-[10px] text-slate-500">${item.id} | ${currentDatasetType===1?'Nilai: '+item.val1:'Harga: Rp '+item.val1.toLocaleString()}</p>
            </div>
          </div>
          <span class="px-2 py-0.5 rounded-md text-[10px] font-bold border ${badgeColor}">${currentDatasetType===1?'Kehadiran: '+item.val2+'%':'Stok: '+item.val2}</span>
        </div>
      `;
    });
    container.innerHTML = html;
  }

  function renderHimpunanList(containerId, items, textClass = 'text-slate-700') {
    const container = document.getElementById(containerId);
    if (!container) return;
    if (items.length === 0) {
      container.innerHTML = `<p class="text-xs text-slate-400 italic py-2">Kosong</p>`;
      return;
    }
    let html = '';
    items.forEach((item, idx) => {
      html += `
        <div class="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200/60 text-xs">
          <div class="flex items-center gap-2 truncate">
            <span class="font-bold text-slate-400 shrink-0">${idx+1}.</span>
            <span class="font-semibold text-slate-800 truncate">${item.name}</span>
          </div>
          <span class="font-mono text-[10px] font-bold ${textClass} shrink-0 ml-2">${item.id}</span>
        </div>
      `;
    });
    container.innerHTML = html;
  }

  function renderDatasetTable() {
    const tbody = document.getElementById('student-table-body');
    if (!tbody) return;

    let filtered = dataset.filter(item => {
      if (currentFilter === 'A') return item._inA;
      if (currentFilter === 'B') return item._inB;
      if (currentFilter === 'C') return item._inC;
      if (currentFilter === 'none') return !item._inA && !item._inB && !item._inC;
      return true;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" class="text-center py-6 text-slate-400 italic">Tidak ada data yang sesuai dengan filter.</td></tr>`;
      return;
    }

    let html = '';
    filtered.forEach((item, idx) => {
      let badges = '';
      if (item._inA) badges += `<span class="px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-bold mr-1">A</span>`;
      if (item._inB) badges += `<span class="px-2 py-0.5 rounded bg-cyan-50 text-cyan-700 border border-cyan-200 font-bold mr-1">B</span>`;
      if (item._inC) badges += `<span class="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold">C</span>`;
      if (!badges) badges = `<span class="text-slate-400 italic text-[11px]">Luar (Uᶜ)</span>`;

      let val1Formatted = currentDatasetType === 1 ? item.val1 : 'Rp ' + item.val1.toLocaleString();
      let val2Formatted = currentDatasetType === 1 ? item.val2 + '%' : item.val2 + ' pcs';

      html += `
        <tr class="hover:bg-slate-50/80 transition-colors">
          <td class="py-3 px-4 text-center font-bold text-slate-400">${idx+1}</td>
          <td class="py-3 px-4 font-mono font-bold text-slate-700">${item.id}</td>
          <td class="py-3 px-4 font-semibold text-slate-900">${item.name}</td>
          <td class="py-3 px-4 text-slate-600">${val1Formatted}</td>
          <td class="py-3 px-4 text-slate-600">${val2Formatted}</td>
          <td class="py-3 px-4"><span class="px-2 py-0.5 rounded-full text-[11px] font-bold ${item.status==='Ya'?'bg-emerald-50 text-emerald-700 border border-emerald-200':'bg-slate-100 text-slate-600'}">${item.status}</span></td>
          <td class="py-3 px-4">${badges}</td>
          <td class="py-3 px-4 text-right">
            <button class="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded-lg text-xs transition-colors" onclick="deleteItem('${item.id}')">Hapus</button>
          </td>
        </tr>
      `;
    });
    tbody.innerHTML = html;
  }

  window.setDatasetFilter = function(filterKey) {
    currentFilter = filterKey;
    ['all', 'A', 'B', 'C', 'none'].forEach(k => {
      const btn = document.getElementById(`filter-${k}`);
      if (btn) {
        if (k === filterKey) {
          btn.className = "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-blue-600 text-white shadow-xs transition-colors";
        } else {
          btn.className = "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors";
        }
      }
    });
    renderDatasetTable();
  }

  window.openModal = function() {
    document.getElementById('modal-add-data').classList.remove('hidden');
  }
  window.closeModal = function() {
    document.getElementById('modal-add-data').classList.add('hidden');
    document.getElementById('form-tambah-mahasiswa').reset();
  }
  window.saveNewData = function(e) {
    e.preventDefault();
    const id = document.getElementById('input-id').value.trim();
    const name = document.getElementById('input-name').value.trim();
    const val1 = parseFloat(document.getElementById('input-val1').value);
    const val2 = parseFloat(document.getElementById('input-val2').value);
    const status = document.getElementById('input-status').value;

    dataset.push({ id, name, val1, status, val2 });
    closeModal();
    refreshApp();
  }
  window.deleteItem = function(id) {
    dataset = dataset.filter(item => item.id !== id);
    refreshApp();
  }
  window.resetDataset = function() {
    currentDatasetType === 1 ? dataset = JSON.parse(JSON.stringify(defaultDataset1)) : dataset = JSON.parse(JSON.stringify(defaultDataset2));
    refreshApp();
  }

  window.setVennMode = function(mode) {
    currentVennMode = mode;
    refreshApp();
  }

  window.selectVennSector = function(sectorKey) {
    currentVennSector = sectorKey;
    let title = "";
    let desc = "";
    let members = [];

    let countA = dataset.filter(i => i._inA).length;
    let countB = dataset.filter(i => i._inB).length;
    let countC = dataset.filter(i => i._inC).length;

    if (sectorKey === 'abc' || sectorKey === 'groupABC') {
      title = "Sektor Irisan Ketiga Himpunan: A ∩ B ∩ C";
      desc = "Elemen yang memenuhi ketiga kriteria kategori secara bersamaan.";
      members = dataset.filter(i => i._inA && i._inB && i._inC);
    } else if (sectorKey === 'onlyA') {
      title = "Sektor Hanya Himpunan A Saja";
      desc = "Elemen yang HANYA memenuhi kriteria A tanpa memenuhi B dan C.";
      members = dataset.filter(i => i._inA && !i._inB && !i._inC);
    } else if (sectorKey === 'onlyB') {
      title = "Sektor Hanya Himpunan B Saja";
      desc = "Elemen yang HANYA memenuhi kriteria B tanpa memenuhi A dan C.";
      members = dataset.filter(i => !i._inA && i._inB && !i._inC);
    } else if (sectorKey === 'onlyC') {
      title = "Sektor Hanya Himpunan C Saja";
      desc = "Elemen yang HANYA memenuhi kriteria C tanpa memenuhi A dan B.";
      members = dataset.filter(i => !i._inA && !i._inB && i._inC);
    } else if (sectorKey === 'groupA') {
      title = "Seluruh Anggota Himpunan A";
      desc = `Total kardinalitas Himpunan A = ${countA} record.`;
      members = dataset.filter(i => i._inA);
    } else if (sectorKey === 'groupB') {
      title = "Seluruh Anggota Himpunan B";
      desc = `Total kardinalitas Himpunan B = ${countB} record.`;
      members = dataset.filter(i => i._inB);
    } else if (sectorKey === 'groupC') {
      title = "Seluruh Anggota Himpunan C";
      desc = `Total kardinalitas Himpunan C = ${countC} record.`;
      members = dataset.filter(i => i._inC);
    } else if (sectorKey === 'outside') {
      title = "Elemen Komplemen (Di Luar A, B, C / Uᶜ)";
      desc = "Elemen dalam semesta U yang tidak termasuk ke dalam himpunan A, B maupun C.";
      members = dataset.filter(i => !i._inA && !i._inB && !i._inC);
    }

    const titleEl = document.getElementById('venn-selected-sector-title');
    const descEl = document.getElementById('venn-selected-sector-desc');
    const badgeEl = document.getElementById('venn-selected-count-badge');
    if (titleEl) titleEl.innerText = title;
    if (descEl) descEl.innerText = desc;
    if (badgeEl) badgeEl.innerText = `${members.length} Elemen`;

    renderMemberList('venn-selected-members-list', members);
  }

  window.setPieMode = function(mode) {
    currentPieMode = mode;
    const btn2 = document.getElementById('pie-mode-2');
    const btn3 = document.getElementById('pie-mode-3');
    if (mode === 2) {
      btn2.className = "px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-xs transition-all";
      btn3.className = "px-4 py-2 rounded-xl text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all";
    } else {
      btn3.className = "px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-xs transition-all";
      btn2.className = "px-4 py-2 rounded-xl text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all";
    }
    renderPIE();
  }

  function renderPIE() {
    const container = document.getElementById('pie-selectors-container');
    if (!container) return;

    let selectorsHTML = `
      <div>
        <label class="block text-xs font-semibold text-slate-500 mb-1">Himpunan 1</label>
        <select id="pie-set-1" class="w-full text-xs border-slate-200 rounded-xl" onchange="calculatePIE()">
          <option value="A">Himpunan A</option>
          <option value="B">Himpunan B</option>
          <option value="C">Himpunan C</option>
        </select>
      </div>
      <div>
        <label class="block text-xs font-semibold text-slate-500 mb-1">Himpunan 2</label>
        <select id="pie-set-2" class="w-full text-xs border-slate-200 rounded-xl" onchange="calculatePIE()">
          <option value="B" selected>Himpunan B</option>
          <option value="A">Himpunan A</option>
          <option value="C">Himpunan C</option>
        </select>
      </div>
    `;

    if (currentPieMode === 3) {
      selectorsHTML += `
        <div>
          <label class="block text-xs font-semibold text-slate-500 mb-1">Himpunan 3</label>
          <select id="pie-set-3" class="w-full text-xs border-slate-200 rounded-xl" onchange="calculatePIE()">
            <option value="C" selected>Himpunan C</option>
            <option value="A">Himpunan A</option>
            <option value="B">Himpunan B</option>
          </select>
        </div>
      `;
    }
    container.innerHTML = selectorsHTML;
    calculatePIE();
  }

  let lastCalculatedPIEMembers = [];

  window.calculatePIE = function() {
    const s1 = document.getElementById('pie-set-1')?.value || 'A';
    const s2 = document.getElementById('pie-set-2')?.value || 'B';
    const s3 = document.getElementById('pie-set-3')?.value || 'C';

    const checkSet = (item, sKey) => {
      if (sKey === 'A') return item._inA;
      if (sKey === 'B') return item._inB;
      if (sKey === 'C') return item._inC;
      return false;
    };

    let setA_items = dataset.filter(i => checkSet(i, s1));
    let setB_items = dataset.filter(i => checkSet(i, s2));

    let unionItems = [];
    if (currentPieMode === 2) {
      unionItems = dataset.filter(i => checkSet(i, s1) || checkSet(i, s2));
      let interItems = dataset.filter(i => checkSet(i, s1) && checkSet(i, s2));
      
      document.getElementById('pie-result-heading').innerText = `Formula PIE 2 Himpunan (${s1} ∪ ${s2})`;
      document.getElementById('pie-final-cardinality').innerText = `|${s1} ∪ ${s2}| = ${unionItems.length}`;
      document.getElementById('pie-formula-display').innerText = `|${s1} ∪ ${s2}| = |${s1}| + |${s2}| − |${s1} ∩ ${s2}|`;

      document.getElementById('pie-breakdown-steps').innerHTML = `
        <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70">1. Kardinalitas |${s1}| = <strong>${setA_items.length}</strong></div>
        <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70">2. Kardinalitas |${s2}| = <strong>${setB_items.length}</strong></div>
        <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70">3. Irisan |${s1} ∩ ${s2}| = <strong>${interItems.length}</strong></div>
        <div class="p-2.5 rounded-lg bg-blue-50 text-blue-900 border border-blue-200 font-bold">Hasil: ${setA_items.length} + ${setB_items.length} − ${interItems.length} = ${unionItems.length}</div>
      `;
    } else {
      unionItems = dataset.filter(i => checkSet(i, s1) || checkSet(i, s2) || checkSet(i, s3));
      let interAB = dataset.filter(i => checkSet(i, s1) && checkSet(i, s2));
      let interAC = dataset.filter(i => checkSet(i, s1) && checkSet(i, s3));
      let interBC = dataset.filter(i => checkSet(i, s2) && checkSet(i, s3));
      let interABC = dataset.filter(i => checkSet(i, s1) && checkSet(i, s2) && checkSet(i, s3));

      document.getElementById('pie-result-heading').innerText = `Formula PIE 3 Himpunan (${s1} ∪ ${s2} ∪ ${s3})`;
      document.getElementById('pie-final-cardinality').innerText = `|${s1} ∪ ${s2} ∪ ${s3}| = ${unionItems.length}`;
      document.getElementById('pie-formula-display').innerText = `|${s1} ∪ ${s2} ∪ ${s3}| = |${s1}| + |${s2}| + |${s3}| − (|${s1}∩${s2}| + |${s1}∩${s3}| + |${s2}∩${s3}|) + |${s1}∩${s2}∩${s3}|`;

      document.getElementById('pie-breakdown-steps').innerHTML = `
        <div class="p-2 rounded-lg bg-slate-50 border border-slate-200/70">Irisan 2: |${s1}∩${s2}|=${interAB.length}, |${s1}∩${s3}|=${interAC.length}, |${s2}∩${s3}|=${interBC.length}</div>
        <div class="p-2 rounded-lg bg-slate-50 border border-slate-200/70">Irisan 3: |${s1}∩${s2}∩${s3}|=${interABC.length}</div>
        <div class="p-2.5 rounded-lg bg-blue-50 text-blue-900 border border-blue-200 font-bold">Total Gabungan = ${unionItems.length}</div>
      `;
    }

    lastCalculatedPIEMembers = unionItems;
    document.getElementById('pie-members-count').innerText = `${unionItems.length} Elemen`;
    renderMemberList('pie-members-list', unionItems);
  }

  window.exportPIECSV = function() {
    let csv = currentDatasetType === 1 ? "NIM,Nama,Nilai,Organisasi,Kehadiran\n" : "Kode,Nama Produk,Harga,Promo,Stok\n";
    lastCalculatedPIEMembers.forEach(i => {
      csv += `"${i.id}","${i.name}",${i.val1},"${i.status}",${i.val2}\n`;
    });
    downloadCSV(csv, currentDatasetType === 1 ? "hasil-pie-mahasiswa.csv" : "hasil-pie-produk.csv");
  }

  window.handleOpTypeChange = function() {
    const type = document.getElementById('op-type').value;
    const group2 = document.getElementById('group-set-2');
    const symbolView = document.getElementById('op-symbol-view');
    const note = document.getElementById('complement-note');

    if (type === 'complement') {
      group2.classList.add('hidden');
      symbolView.classList.add('hidden');
      note.classList.remove('hidden');
    } else if (type === 'union' || type === 'intersection') {
      group2.classList.remove('hidden');
      symbolView.classList.add('hidden');
      note.classList.add('hidden');
    } else {
      group2.classList.remove('hidden');
      symbolView.classList.remove('hidden');
      note.classList.add('hidden');
    }
  }

  let lastOpMembers = [];

  window.executeOperation = function() {
    const type = document.getElementById('op-type').value;
    const s1 = document.getElementById('op-set-1').value;
    const s2 = document.getElementById('op-set-2').value;

    const getSetItems = (key) => {
      if (key === 'A') return dataset.filter(i => i._inA);
      if (key === 'B') return dataset.filter(i => i._inB);
      if (key === 'C') return dataset.filter(i => i._inC);
      return dataset;
    };

    let items1 = getSetItems(s1);
    let items2 = getSetItems(s2);
    let resultItems = [];
    let title = "";
    let subtitle = "";

    if (type === 'union') {
      let map = new Map();
      items1.forEach(i => map.set(i.id, i));
      items2.forEach(i => map.set(i.id, i));
      resultItems = Array.from(map.values());
      title = `Union (${s1} ∪ ${s2})`;
      subtitle = `Gabungan seluruh elemen dari himpunan ${s1} dan ${s2}`;
    } else if (type === 'intersection') {
      let set2Ids = new Set(items2.map(i => i.id));
      resultItems = items1.filter(i => set2Ids.has(i.id));
      title = `Intersection (${s1} ∩ ${s2})`;
      subtitle = `Elemen yang ada pada himpunan ${s1} sekaligus pada himpunan ${s2}`;
    } else if (type === 'diff_ab') {
      let set2Ids = new Set(items2.map(i => i.id));
      resultItems = items1.filter(i => !set2Ids.has(i.id));
      title = `Difference (${s1} − ${s2})`;
      subtitle = `Elemen dalam ${s1} yang tidak termasuk dalam ${s2}`;
    } else if (type === 'diff_ba') {
      let set1Ids = new Set(items1.map(i => i.id));
      resultItems = items2.filter(i => !set1Ids.has(i.id));
      title = `Difference (${s2} − ${s1})`;
      subtitle = `Elemen dalam ${s2} yang tidak termasuk dalam ${s1}`;
    } else if (type === 'complement') {
      let set1Ids = new Set(items1.map(i => i.id));
      resultItems = dataset.filter(i => !set1Ids.has(i.id));
      title = `Complement (${s1}ᶜ)`;
      subtitle = `Seluruh record dalam Semesta U yang BUKAN anggota Himpunan ${s1}`;
    }

    lastOpMembers = resultItems;
    document.getElementById('result-title').innerText = title;
    document.getElementById('result-subtitle').innerText = subtitle;
    let pct = Math.round((resultItems.length / dataset.length) * 100);
    document.getElementById('result-count-badge').innerText = `${resultItems.length} record (${pct}% Semesta)`;

    const tbody = document.getElementById('result-table-body');
    if (resultItems.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" class="text-center py-6 text-slate-400 italic">Tidak ada anggota pada hasil operasi ini.</td></tr>`;
      return;
    }

    let html = '';
    resultItems.forEach((item, idx) => {
      let val1Formatted = currentDatasetType === 1 ? item.val1 : 'Rp ' + item.val1.toLocaleString();
      let val2Formatted = currentDatasetType === 1 ? item.val2 + '%' : item.val2 + ' pcs';
      html += `
        <tr class="hover:bg-slate-50">
          <td class="py-2.5 px-3 text-slate-400 font-bold">${idx+1}</td>
          <td class="py-2.5 px-3 font-mono font-bold text-slate-700">${item.id}</td>
          <td class="py-2.5 px-3 font-semibold text-slate-900">${item.name}</td>
          <td class="py-2.5 px-3 text-slate-600">${val1Formatted}</td>
          <td class="py-2.5 px-3"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${item.status==='Ya'?'bg-emerald-50 text-emerald-700':'bg-slate-100 text-slate-600'}">${item.status}</span></td>
          <td class="py-2.5 px-3 text-slate-600">${val2Formatted}</td>
          <td class="py-2.5 px-3 font-bold text-blue-600">${item._inA?'A':''}${item._inB?'B':''}${item._inC?'C':''}</td>
        </tr>
      `;
    });
    tbody.innerHTML = html;

    document.getElementById('dashboard-last-operation').innerHTML = `
      <div class="p-3 rounded-xl bg-blue-50/70 border border-blue-200/60 text-xs space-y-1.5">
        <p class="font-bold text-blue-900 text-sm">${title}</p>
        <p class="text-slate-600">Total Kardinalitas: <strong>${resultItems.length} Elemen</strong> (${pct}%)</p>
        <button class="text-blue-600 font-bold hover:underline mt-1 block" onclick="switchTab('operasi')">Buka Halaman Operasi →</button>
      </div>
    `;
  }

  window.copyResults = function() {
    let text = lastOpMembers.map(i => `${i.id}\t${i.name}\t${i.val1}\t${i.status}\t${i.val2}`).join('\n');
    navigator.clipboard.writeText(text);
    alert('Hasil operasi berhasil disalin ke clipboard!');
  }

  window.exportCSV = function() {
    let csv = currentDatasetType === 1 ? "NIM,Nama,Nilai,Organisasi,Kehadiran\n" : "Kode,Nama Produk,Harga,Promo,Stok\n";
    lastOpMembers.forEach(i => {
      csv += `"${i.id}","${i.name}",${i.val1},"${i.status}",${i.val2}\n`;
    });
    downloadCSV(csv, currentDatasetType === 1 ? "operasi-mahasiswa-setveen.csv" : "operasi-produk-setveen.csv");
  }

  function downloadCSV(csvContent, filename) {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
