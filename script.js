function analisaKeluhan() {
document.getElementById("loading").style.display = "block";
document.getElementById("hasil").innerHTML = "";

  
  const input = document.getElementById("keluhan").value.toLowerCase();
  let hasil = "";

  if (input.includes("demam") || input.includes("panas")) {
    hasil = `
    <h3>🩺 Kemungkinan: Demam / Infeksi Ringan</h3>

    <h4>🏠 Penanganan di Rumah</h4>
    <ul>
      <li>Istirahat cukup</li>
      <li>Perbanyak minum air putih</li>
      <li>Kompres hangat</li>
    </ul>

    <h4>💊 Obat Umum</h4>
    <ul>
      <li>Paracetamol</li>
      <li>Ibuprofen (jika perlu)</li>
    </ul>

    <h4>🌿 Herbal</h4>
    <ul>
      <li>Jahe hangat</li>
      <li>Temulawak</li>
      <li>Madu</li>
    </ul>
    `;
  }

  else if (input.includes("batuk") || input.includes("pilek")) {
    hasil = `
    <h3>🩺 Kemungkinan: ISPA Ringan</h3>

    <h4>🏠 Penanganan di Rumah</h4>
    <ul>
      <li>Minum air hangat</li>
      <li>Hindari asap rokok</li>
      <li>Istirahat cukup</li>
    </ul>

    <h4>💊 Obat Umum</h4>
    <ul>
      <li>OBH</li>
      <li>Antihistamin</li>
    </ul>

    <h4>🌿 Herbal</h4>
    <ul>
      <li>Jeruk nipis + madu</li>
      <li>Jahe</li>
    </ul>
    `;
  }

  else if (
    input.includes("nyeri dada") ||
    input.includes("sesak") ||
    input.includes("pingsan")
  ) {
    hasil = `
    <h3 style="color:red;">🚨 DARURAT MEDIS</h3>

    <p>Gejala mengarah ke kondisi serius.</p>

    <h4>⚠️ TINDAKAN SEGERA</h4>
    <ul>
      <li>Hentikan aktivitas</li>
      <li>Posisi setengah duduk</li>
      <li>Segera cari bantuan medis</li>
    </ul>

    <a href="tel:119" class="darurat">📞 Hubungi 119 Sekarang</a>
    `;
  }

  else {
    hasil = `
    <h3>🤔 Gejala tidak dikenali</h3>
    <p>Coba jelaskan lebih detail (contoh: demam + batuk + pusing).</p>
    `;
  }

  setTimeout(() => {
  document.getElementById("loading").style.display = "none";
  document.getElementById("hasil").innerHTML =
    `<div class="hasil-card">${hasil}</div>`;
}, 1200);
