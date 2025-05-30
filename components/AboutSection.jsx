export default function AboutSection() {
  return (
    /* Tüm sayfada beyaz zemin */
    <section className="bg-white text-black">
      {/* ORTAK GENİŞLİK: max-w-4xl  ≈ 896 px  +  solda/sağda 20-24 px padding */}
      <div className="w-full max-w-5xl mx-auto px-6 py-16">
        {/* BAŞLIK */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Who we are
        </h2>

        {/* AÇIKLAMA METNİ */}
        <p className="text-lg leading-relaxed mb-12">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success. We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>

        {/* GÖRSEL – köşeler düz, aynı genişlik, obje oranı korunur */}
        <img
          src="/images/MidImage.png"
          alt="Product"
          className="w-full rounded-none object-cover"
        />
      </div>
    </section>
  );
}
