import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="reactNav">
      <Link to='/'> <h3 className="eName">BriMates</h3> </Link>
      <div className="navCont">
        <NavLink to={`/category/Mates`} activeClassName='ActiveOption' className='Option'>Mates</NavLink>
        <NavLink to={`/category/Bombillas`} activeClassName='ActiveOption' className='Option'>Bombillas</NavLink>
        <NavLink to={`/category/Materas`} activeClassName='ActiveOption' className='Option'>Materas</NavLink>
        <NavLink to={`/category/Termos`} activeClassName='ActiveOption' className='Option'>Termos</NavLink>
      </div>
      <CartWidget></CartWidget>
    </nav>
  )
};

export default Navbar;