import { useEffect, useState } from 'react'
import style from '../styles/ItemListContainer.css'
import { ItemCount } from './ItemCount'
export const ItemDetail = ({item}) =>{
    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () =>{
        console.log({...item,
                        cantidad

        })
    }

    return (
        <div className='tarjetaProducto'>
            <h4>{item.nombre}</h4>
            <img className='imagenProducto' src={item.img} alt=''/>
            <p>{item.descripcion}</p>
            <p>Precio:  {item.precio}</p>
            <ItemCount
                max={item.stock}
                counter={cantidad}
                setCounter={setCantidad}
                agregar={handleAgregar}/>
        </div>
    )
}