import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="reactNav">
      <h3 className="eName">BriMates</h3>
      <div className="navCont">
        <button>Mates </button>
        <button>Bombillas</button>
        <button>Materas </button>
        <button>Termos</button>
      </div>
      <CartWidget />
    </nav>
  )
};

export default Navbar;