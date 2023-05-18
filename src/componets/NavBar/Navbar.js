import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="reactNav">
      <Link to='/'> <h3 className="eName">BriMates</h3> </Link>
      <div className="navCont">
        <NavLink to={`/category/Mates`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mates</NavLink>
        <NavLink to={`/category/Bombillas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bombillas</NavLink>
        <NavLink to={`/category/Materas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Materas</NavLink>
        <NavLink to={`/category/Termos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Termos</NavLink>
      </div>
      <CartWidget />
    </nav>
  )
};

export default Navbar;