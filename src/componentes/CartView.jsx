import { useContext } from "react"
import { contextoCarrito } from "../context/contextoCarrito"
import style from '../styles/cartview.css'


export const CartView = () => {
    const { carrito, vaciarCarrito, eliminarElemento, totalCompra } = useContext(contextoCarrito);
    
    return (
        <div>
            {
                carrito.map((item) => (
                    <div className="cartView">
                        <img src={item.img} className="imagenCarrito" alt={item.nombre} />
                        <h3>{item.nombre}</h3>
                        <p>{item.precio}</p>
                        <p>Cantidad {item.cantidad}</p>
                        <button className="botonCarrito" onClick={() => eliminarElemento(item.id)}>Eliminar</button>
                        <hr />


                    </div>
                ))
            }
            <div>
                <h3>Total: ${totalCompra()}</h3>
                <button className="botonCarrito" onClick={vaciarCarrito}>Vaciar carrito</button>

            </div>
        </div>
    )

}