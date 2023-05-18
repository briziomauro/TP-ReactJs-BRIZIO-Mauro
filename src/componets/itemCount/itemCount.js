import './itemCount.css'
import {useState} from 'react' 

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () =>{
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }
    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }
    return(
        <div className='counter'>
            <div className='controls'>
                <button className='button' onlcik={decrement}>-</button>
                <button className='number'>{quantity}</button>
                <button className='button'onclick={increment}>+</button>
            </div>
            <div>
                <button className='button'onclick={()=> onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
} 

export default ItemCount;

