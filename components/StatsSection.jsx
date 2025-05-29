export default function StatsSection() {
  const stats = [
    { number: '350+', label: 'Clients Worldwide' },
    { number: '20+', label: 'Team Members' },
    { number: '100+', label: 'Projects Completed' },
    { number: '85M+', label: 'Revenue Generated' },
  ];

  return (
    <section className="bg-black text-white py-12 flex flex-wrap justify-around">
      {stats.map((stat) => (
        <div key={stat.number} className="text-center m-4">
          <div className="text-3xl font-bold">{stat.number}</div>
          <div className="text-sm">{stat.label}</div>
        </div>
      ))}
    </section>
  );
}
