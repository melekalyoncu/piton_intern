export default function TeamSection() {
  const team = [
    { name: 'Esther Howard', role: 'Founder', img: '/images/Avatar.png' },
    { name: 'Cody Fisher', role: 'Developer', img: '/images/Avatar-2.png' },
    { name: 'Brooklyn Simmons', role: 'Designer', img: '/images/Avatar-3.png' },
  ];

  return (
    <section className="py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {team.map((member) => (
        <div
          key={member.name}
          className="bg-white shadow-md rounded-lg p-4 text-center"
        >
          <img
            src={member.img}
            alt={member.name}
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <p className="text-gray-500">{member.role}</p>
        </div>
      ))}
    </section>
  );
}
