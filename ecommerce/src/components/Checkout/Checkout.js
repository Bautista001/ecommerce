import { Timestamp } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { CartContext } from '../../Context/cartContext';
import { useState, useContext } from 'react';
import db from "../../services/firebase"
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { PulseLoader } from "react-spinners";

const Checkout = () => {
    const { total, cart } = useContext(CartContext);
    const [ loading, setLoading ] = useState(false);
    const [orderId, setOrderId] = useState('');

    const saveData = async (data) => {
        setLoading(true);

        try {
            const user = {
                nombre: data.name,
                email: data.email,
                telefono: data.phone
            };
    
            const cartToSave = {
                user: user,
                cart: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };
    
            const cartCollection = collection(db, "cart");
            await addDoc(cartCollection, cartToSave).then(({ id }) => setOrderId(id));

        } catch (error) {
            console.log(error)

        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h2 className='pt-5'>
            <PulseLoader color="red" loading={loading} size={15} />
            Se está generando su orden...
        </h2>
    }

    if (orderId) {
        return <h2 className='pt-5'>
            Orden generada con éxito. El código de su orden es: 
            <span>
                {orderId}
            </span>
        </h2>
    }


    return (
        <div className="pt-5">
            <h2>Checkout</h2>
            <CheckoutForm onConfirm={saveData} />
        </div>
    )
}

export default Checkout;