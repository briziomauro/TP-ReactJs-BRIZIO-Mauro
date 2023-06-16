import CheckoutForm from "../CheckouForm/CheckoutForm"
import { db } from "../../service/firebase/firebaseConfig"
import { useContext, useState } from "react"
import { Timestamp, addDoc, collection, documentId, query, writeBatch } from "firebase/firestore"

const Checkout = async () => {
    const [loading, setLoading] = useState(false)
    const [orderId,setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {

        setLoading(true)
        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                data: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', )))
            const {docs} = productsAddedFromFirestore
            docs.forEach(doc => {
                const dataDoc = doc.Data()
                const stockDb = dataDoc.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({id: doc.id,...dataDoc})
                }    
            })
            if(outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Hay productos sin stock.')
            }
        } catch(error){
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    
    if(loading) {
        return <h1></h1>
    }   
    if(loading) {
        return <h1>Se esta generando la orden, aguarde un momento.</h1>
    }
    if(orderId){
        return <h1>El ID de su orden es: {orderId}</h1>
    }
    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}></CheckoutForm>
        </div>
    ) 
}
export default Checkout;
