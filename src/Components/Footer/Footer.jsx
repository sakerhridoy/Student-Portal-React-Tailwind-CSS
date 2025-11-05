function Footer() {
  return (
    <>
      <footer className="backdrop-blur-md bg-white/10 border-t border-cyan-300 shadow-[0_0_20px_#22d3ee] px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-cyan-200">
            &copy; 2025 MyWebsite. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-cyan-300 hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="text-cyan-300 hover:text-white transition">
              Terms
            </a>
            <a href="#" className="text-cyan-300 hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer