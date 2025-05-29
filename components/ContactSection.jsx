import Person from '@/public/svg/Person';

export default function ContactSection() {
  return (
    <section className="py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex justify-center items-center">
        <Person className="w-80 h-auto" />
      </div>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Website URL"
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Project Details"
          className="w-full p-2 border rounded"
          rows="4"
        />
        <button className="bg-black text-white px-4 py-2 rounded">
          Send Proposal
        </button>
      </form>
    </section>
  );
}
