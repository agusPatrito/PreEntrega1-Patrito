import { createContext, useEffect } from "react";
import { useState } from "react";

export const contextoCarrito = createContext()

export const ProveedorCarrito = ({children}) =>{
    const [carrito, setCarrito] = useState([])

    const init = JSON.parse(localStorage.getItem('carrito')) || []
    const agregarCarrito = (item) =>{
        setCarrito([...carrito, item])
    }

    const vaciarCarrito = () =>{
        setCarrito([])
    }


    const eliminarElemento = (id) => {
        setCarrito( carrito.filter((item) => item.id !== id))
    }
    
    const totalCompra = () =>{
        return carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
    }
    

    const isInCart = (id) =>{
        return carrito.some((item) => item.id === id)
    }
    console.log(carrito)

    useEffect(() =>{
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    return(
        <contextoCarrito.Provider value={{
            carrito,
            agregarCarrito,
            isInCart,
            vaciarCarrito,
            eliminarElemento,
            totalCompra
           
        }}>
            {children}

        </contextoCarrito.Provider>
    )
}