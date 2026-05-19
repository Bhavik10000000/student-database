import { Link } from 'react-router-dom';
import './App.css';

function Navbar() {
  return (
    <>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/project">Project</Link></li>
        </ul>
    </nav>
    </>
  );
}

export default Navbar;
