import { useState } from "react"
import "../styles/itemCount.css"
import style from '../styles/ItemListContainer.css'

export const ItemCount = ({max, counter, setCounter, agregar}) =>{

    const handleRestar =() =>{
        counter > 1 && setCounter(counter-1)
        
    }

    const handleSumar =() =>{
        counter < max && setCounter(counter+1)
    }

    return(
        <div className="itemCount">
            <button onClick={agregar} className="botonCompra">Agregar al carrito</button>
            <div className="counter">
                <button onClick={handleRestar} className="itemBoton">-</button>
                <span>{counter}</span>
                <button onClick={handleSumar} className="itemBoton">+</button>
            </div>


        </div>
    )
}