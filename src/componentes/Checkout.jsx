import { useContext, useState } from 'react'
import style from '../styles/checkout.css'
import { contextoCarrito } from '../context/contextoCarrito'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/config'


export const Checkout = () =>{

    const {carrito, totalCompra} = useContext(contextoCarrito)
    const[values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''

    })

    const handleInputChange = (e) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(values)

        const orden = {
            comprador: values,
            items: carrito.map(item => ({id: item.id, precio: item.precio})),
            total: totalCompra()
        }
        console.log(orden)

        const ordenRef = collection(db, "ordenes")
        addDoc(ordenRef, orden)
            .then((doc) => doc.id)
    }

    return(
        <div className="checkout">
            <h2>Checkout:</h2>
            <form onSubmit={handleSubmit} className='checkoutForm'>
                <input
                    onChange={handleInputChange}
                    value={values.nombre}
                    type="text"
                    className="inputFormulario"
                    placeholder="Nombre y Apellido" 
                    name='nombre'/>
                
                <input
                    onChange={handleInputChange}
                    value={values.email}
                    type="email" 
                    className="inputFormulario"
                    placeholder="Mail"
                    name='email'/>
                
                <input
                    onChange={handleInputChange}
                    value={values.direccion}
                    type="text" 
                    className="inputFormulario"
                    placeholder="Direccion de envio"
                    name='direccion'
                />

                <button className="botonConfirmar">Confirmar</button>
            </form>

        </div>
    )
}