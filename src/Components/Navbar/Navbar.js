import "./Navbar.modules.css";

function Navbar() {
  return (
    <nav id="navigation">
      <h1 className="nav-title">Wordle</h1>
      <div id="nav-links">
      <a className="nav-link" href="/">
        Daily
      </a>
      <a className="nav-link" href="/continuous">
        Continuous
      </a>
      </div>
    </nav>
  );
}

export default Navbar;
