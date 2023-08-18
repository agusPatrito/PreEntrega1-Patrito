import { useContext } from "react"
import { contextoCarrito } from "../context/contextoCarrito"
import style from '../styles/cartview.css'
import { Link } from "react-router-dom"

export const CartView = () => {
    const { carrito, vaciarCarrito, eliminarElemento, totalCompra } = useContext(contextoCarrito);

    if(carrito.length === 0){
        return (
            <div>
                <h2>Tu carrito esta vacio :/</h2>
                <Link to='/'>Regresar a la compra</Link>
            </div>
        )
    }
    
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

            <div className="confirmarCompra">
                <h3>Total: ${totalCompra()}</h3>
                <button className="botonEliminar" onClick={vaciarCarrito}>Vaciar carrito</button>
                <Link className="botonConfirmar" to="/checkout">Confirmar Compra</Link>
            </div>

        </div>
    )

}