import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-green-500/30 p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Website Logo/Name */}
        <Link
          to="/"
          className="text-2xl font-bold text-white tracking-widest hover:text-green-400 transition"
        >
          CYBER<span className="text-green-500">RADAR</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm font-mono text-gray-300">
          <Link to="/" className="hover:text-green-400 transition">
            Dashboard
          </Link>
          <span className="text-gray-700">|</span>
          <Link to="/cloud" className="hover:text-green-400 transition">
            Cloud Sec
          </Link>
          <span className="text-gray-700">|</span>
          <Link to="/ai" className="hover:text-green-400 transition">
            AI & Deepfakes
          </Link>
          <span className="text-gray-700">|</span>
          <Link to="/malware" className="hover:text-green-400 transition">
            Malware
          </Link>
          <span className="text-gray-700">|</span>
          <Link
            to="/darkweb"
            className="text-red-400 hover:text-red-300 transition font-bold"
          >
            Dark Web
          </Link>
        </div>
      </div>
    </nav>
  );
}
