import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = [useState]('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault ()
        const userData = {
            name, phone, email
        }
    onConfirm(userData)

    }
return (
    <div>
        <form onSubmit={handleConfirm}>
            <label>Nombre 
                <input
                className='input'
                type='text'
                value={name}
                onChange={({target}) => setName(target.value)}
                />
            </label>
            <label>Telefono
                <input
                className='input'
                type='text'
                value={phone}
                onChange={({target}) => setPhone(target.value)}
                />
            </label>
            <label>Email
                <input
                className='input'
                type='text'
                value={email}
                onChange={({target}) => setEmail(target.value)}
                />
            </label>
            <div>
                <buttton type='submit'>Crear Orden</buttton>
            </div>
        </form>
    </div>
)
} 
export default CheckoutForm