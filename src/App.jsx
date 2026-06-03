import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CloudSec from "./pages/CloudSec";
import AiSecurity from "./pages/AiSecurity";
import Malware from "./pages/Malware";
import DarkWeb from "./pages/DarkWeb";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div
        style={{
          backgroundColor: "#000000",
          minHeight: "100vh",
          fontFamily: "monospace",
        }}
      >
        <nav
          style={{
            padding: "20px 30px",
            backgroundColor: "#050505",
            borderBottom: "1px solid #222",
            display: "flex",
            gap: "15px",
            alignItems: "center",
            flexWrap: "wrap",
            boxShadow: "0 4px 20px rgba(0,0,0,0.8)",
          }}
        >
          <Link
            to="/"
            className="cyber-nav-link"
            style={{ color: "#10b981", textDecoration: "none" }}
          >
            Dashboard
          </Link>
          <Link
            to="/cloud-sec"
            className="cyber-nav-link"
            style={{ color: "#38bdf8", textDecoration: "none" }}
          >
            Cloud Security
          </Link>
          <Link
            to="/ai-security"
            className="cyber-nav-link"
            style={{ color: "#a855f7", textDecoration: "none" }}
          >
            AI Security
          </Link>
          <Link
            to="/malware"
            className="cyber-nav-link"
            style={{ color: "#ef4444", textDecoration: "none" }}
          >
            Malware
          </Link>
          <Link
            to="/dark-web"
            className="cyber-nav-link"
            style={{ color: "#eab308", textDecoration: "none" }}
          >
            Dark Web
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cloud-sec" element={<CloudSec />} />
          <Route path="/ai-security" element={<AiSecurity />} />
          <Route path="/malware" element={<Malware />} />
          <Route path="/dark-web" element={<DarkWeb />} />
        </Routes>
      </div>
    </Router>
  );
}
