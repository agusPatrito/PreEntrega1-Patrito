import { useState } from "react"
import "../styles/itemCount.css"

export const ItemCount = ({max}) =>{
    const [counter, setCount] = useState(1)

    const handleRestar =() =>{
        counter > 1 && setCount(counter-1)
        
    }

    const handleSumar =() =>{
        counter < max && setCount(counter+1)
    }

    return(
        <div className="itemCount">
            <button onClick={handleRestar} className="itemBoton">-</button>
            <span>{counter}</span>
            <button onClick={handleSumar} className="itemBoton">+</button>


        </div>
    )
}