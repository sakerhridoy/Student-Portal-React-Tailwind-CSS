function Contact () {
  return (
    <>
      <section id="contact" className="bg-gray-900 text-white py-16 px-6">
        <div className="container">
          <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/10 p-8 rounded-xl border border-cyan-400 shadow-[0_0_20px_#22d3ee]">
            <h2 className="text-3xl font-bold text-center mb-6 text-cyan-300">
              Contact Us
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent border border-cyan-300 rounded px-4 py-2 text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 col-span-2"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-transparent border border-cyan-300 rounded px-4 py-2 text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 col-span-2"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="bg-transparent border border-cyan-300 rounded px-4 py-2 text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 col-span-2"
              ></textarea>
              <button
                type="submit"
                className="col-span-2 bg-cyan-400 text-black font-semibold py-2 px-6 rounded hover:bg-cyan-300 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact