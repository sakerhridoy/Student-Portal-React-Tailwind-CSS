function StudentPortal () {
  return (
    <>
      <section id="portal" className="bg-gray-950 text-white py-16 px-6">
        <div className="container">
          <div className="max-w-6xl mx-auto ">
            <h2 className="text-3xl font-bold mb-6 text-center text-cyan-300">
              Student Portal
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-cyan-400 shadow-[0_0_15px_#22d3ee] cursor-pointer">
                <h3 className="text-xl font-semibold mb-2 text-cyan-200">
                  👤 My Profile
                </h3>
                <p className="text-sm text-gray-300">
                  View and update your personal info and password.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-cyan-400 shadow-[0_0_15px_#22d3ee] cursor-pointer">
                <h3 className="text-xl font-semibold mb-2 text-cyan-200">
                  📢 Notices
                </h3>
                <p className="text-sm text-gray-300">
                  Check latest announcements, class schedules, and updates.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-cyan-400 shadow-[0_0_15px_#22d3ee] cursor-pointer">
                <h3 className="text-xl font-semibold mb-2 text-cyan-200">
                  📄 Results
                </h3>
                <p className="text-sm text-gray-300">
                  Download your grades and progress report anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default StudentPortal