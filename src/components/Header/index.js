// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="header">
    <li>
      <Link to="/" className="link">
        Home
      </Link>
    </li>
    <li>
      <Link to="/about" className="link">
        About
      </Link>
    </li>
  </ul>
)
export default Header
