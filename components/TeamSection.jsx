export default function TeamSection() {
  const team = [
    { name: 'Esther Howard',   role: 'Founder',   img: '/images/Avatar.png'   },
    { name: 'Cody Fisher',     role: 'Developer', img: '/images/Avatar-2.png' },
    { name: 'Brooklyn Simmons', role: 'Designer', img: '/images/Avatar-3.png' },
  ];

  return (
    /* Tüm kenarlar = 32 px */
    <section className="bg-white p-8">
      {/* Başlık – kartlardan 32 px (mb-8) ayrık */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
        Meet the heroes behind the magic
      </h2>

      {/* Izgara – artık ekstra px-8 yok, çünkü dış kapsayıcı zaten p-8 */}
      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 place-items-center">
        {team.map((m) => (
          <div
            key={m.name}
            className="w-60 border border-gray-200 shadow-sm rounded-none overflow-hidden bg-white"
          >
            <div className="aspect-square p-3 flex items-center justify-center">
              <img src={m.img} alt={m.name} className="w-full h-full object-contain" />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold mb-1">{m.name}</h3>
              <p className="text-gray-500">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
