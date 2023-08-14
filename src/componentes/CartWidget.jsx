import { useContext, useEffect } from 'react'
import carritoImg from '../../public/image/carrito.png'
import { contextoCarrito } from '../context/contextoCarrito'

    
export const CartWidget = () =>{
    const items = []
    const {carrito} = useContext(contextoCarrito)
    return(
        <div className="carrito-navbar">
            <img src={carritoImg} alt="" style={{
                height:'40px',
                width:'40px',
                alignContent:'center'
            }}/>
            <p>{carrito.length}</p>
            
        

            
        </div>
    )
}
