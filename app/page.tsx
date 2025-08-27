export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <section style={{ maxWidth: 880, margin: "0 auto" }}>
        <h1 style={{ fontSize: 36, lineHeight: 1.2, marginBottom: 8 }}>🎉 Proyek Siap Vercel</h1>
        <p style={{ fontSize: 16, opacity: 0.85 }}>
          Ini halaman awal. Pindahkan konten dari proyek lama Anda ke sini, atau buat route baru di folder <code>app</code>.
        </p>
        <ul style={{ marginTop: 16 }}>
          <li>Halaman ini: <code>app/page.tsx</code></li>
          <li>Layout global: <code>app/layout.tsx</code></li>
          <li>Aset statis: <code>public/</code></li>
        </ul>
        <div style={{ marginTop: 24, padding: 16, border: "1px solid #e5e7eb", borderRadius: 12 }}>
          <h2 style={{ margin: 0, marginBottom: 8, fontSize: 20 }}>Langkah Migrasi Cepat</h2>
          <ol>
            <li>Pindahkan gambar ke <code>public/assets</code>.</li>
            <li>Pindahkan CSS/JS ke <code>public/</code> dan import sesuai kebutuhan.</li>
            <li>Buat komponen/halaman di <code>app/</code> sesuai struktur.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
