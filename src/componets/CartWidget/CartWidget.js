import cart from './assets/cart.svg'
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className='cartDiv'>
        <img className='cartNav' src={cart} alt="cart-widget" />
        <p>0</p>
    </div>
  )
}

export default CartWidget