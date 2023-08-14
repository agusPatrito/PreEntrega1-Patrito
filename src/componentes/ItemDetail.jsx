import { useContext, useEffect, useState } from 'react'
import style from '../styles/ItemListContainer.css'
import { ItemCount } from './ItemCount'
import { contextoCarrito } from '../context/contextoCarrito'
import { Link } from 'react-router-dom'



export const ItemDetail = ({item}) =>{
    const [cantidad, setCantidad] = useState(1)

    const {agregarCarrito, isInCart} = useContext(contextoCarrito)

    const handleAgregar = () =>{
        const newItem = {
            ...item,
            cantidad
            
        }
        agregarCarrito(newItem)

        

    }

    return (
        <div className='tarjetaProducto'>
            <h4>{item.nombre}</h4>
            <img className='imagenProducto' src={item.img} alt=''/>
            <p>{item.descripcion}</p>
            <p>Precio:  {item.precio}</p>
            {
                isInCart(item.id)
                    ? <Link className='linkVerMas' to="/carro">Checkout</Link>
                    : <ItemCount
                        max={item.stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        agregar={handleAgregar}
                    />
            }
            
        </div>
    )
}