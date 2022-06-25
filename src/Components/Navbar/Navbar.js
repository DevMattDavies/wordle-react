import './Navbar.modules.css'
import { BrowserRouter as Link, NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav id="navigation">
      <Link to="/">Daily</Link>
      <h1>Wordle</h1>
      <Link to="/continuous">Continuous Play</Link>
    </nav>
  )
}

export default Navbar;