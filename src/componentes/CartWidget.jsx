import { useEffect } from 'react'
import carrito from '../image/carrito.png'
    // El useEffect es para que se monte solo al montaje de la pagina.
    
export const CartWidget = () =>{
    const items = []
    return(
        
        <div className="carrito-navbar">
            <img src={carrito} alt="" style={{
                height:'40px',
                width:'40px',
                alignContent:'center'
            }}/>
            <p>0</p>
            {items}
        

            
        </div>
    )
}
