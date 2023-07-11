import cart from './assets/cart.svg'
import "./CartWidget.css"
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext)

  return (
    <Link to='/cart' className='CartWidget' style ={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
        <img className='cartNav' src={cart} alt="cart-widget" />
        {totalQuantity > 0 && <div className="cartQuantity">{totalQuantity}</div>}
    </Link>
  )
}

export default CartWidget