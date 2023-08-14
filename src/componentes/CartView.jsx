import { useContext } from "react"
import { contextoCarrito } from "../context/contextoCarrito"
import style from '../styles/ItemListContainer.css'


export const CartView = () => {
    const { carrito, vaciarCarrito, eliminarElemento } = useContext(contextoCarrito);
    
    return (
        <div>
            {
                carrito.map((item) => (
                    <div>
                        <img src={item.img} className="imagenProducto" alt={item.nombre} />
                        <h3>{item.nombre}</h3>
                        <p>{item.precio}</p>
                        <p>Cantidad {item.cantidad}</p>
                        <button onClick={() => eliminarElemento(item.id)}>Eliminar</button>


                    </div>
                ))
            }
            <div>
                <button className="botonCompra" onClick={vaciarCarrito}>Vaciar carrito</button>
            </div>
        </div>
    )

}