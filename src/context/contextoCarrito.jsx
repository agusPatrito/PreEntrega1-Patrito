import { createContext } from "react";
import { useState } from "react";

export const contextoCarrito = createContext()

export const ProveedorCarrito = ({children}) =>{
    const [carrito, setCarrito] = useState([])

    const agregarCarrito = (item) =>{
        setCarrito([...carrito, item])
    }

    const vaciarCarrito = () =>{
        setCarrito([])
    }


    const eliminarElemento = (id) => {
        setCarrito( carrito.filter((item) => item.id !== id))
    }
        
    
    

    const isInCart = (id) =>{
    return carrito.some((item) => item.id === id)
    }
    console.log(carrito)

    return(
        <contextoCarrito.Provider value={{
            carrito,
            agregarCarrito,
            isInCart,
            vaciarCarrito,
            eliminarElemento
           
        }}>
            {children}

        </contextoCarrito.Provider>
    )
}