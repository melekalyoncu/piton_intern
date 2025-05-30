import Person from '@/public/svg/Person';

export default function ContactSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-start">
        <div className="flex justify-center">
          <div className="w-[420px] h-[580px] bg-amber-50 flex items-center justify-center">
            <Person className="w-[260px] h-auto" />
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-right mb-10 leading-snug">
            We&apos;d love to hear<br />from you
          </h2>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name*"
              className="block w-full border border-gray-400 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Email*"
              className="block w-full border border-gray-400 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Website URL*"
              className="block w-full border border-gray-400 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <textarea
              placeholder="Project Details*"
              rows="5"
              className="block w-full border border-gray-400 px-5 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-4 font-medium hover:bg-gray-800 transition"
            >
              Send Proposal
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
