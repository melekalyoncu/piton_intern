export default function AboutSection() {
  return (
    <section className="bg-white text-black">
      <div className="w-full max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Who we are
        </h2>

        <p className="text-lg leading-relaxed mb-12">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success. We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>

        <img
          src="/images/MidImage.png"
          alt="Product"
          className="w-full rounded-none object-cover"
        />
      </div>
    </section>
  );
}
