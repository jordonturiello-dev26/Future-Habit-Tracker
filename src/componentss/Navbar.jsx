import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ 
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%", 
      display: "flex", 
      justifyContent: "center",
      gap: "2rem", 
      padding: "1rem", 
      background: "#1f2a44", 
      color: "white", 
      zIndex: 100
    }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
        Profile
      </Link>
      <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>
        Dashboard
      </Link>
    </nav>
  );
}

export default Navbar;
