
export const ItemDetail = ({item}) =>{
    return (
        <div>
            <h4>{item.nombre}</h4>
            <img className='imagenProducto' src={item.img} alt=''/>
            <p>{item.descripcion}</p>
            <p>Precio:  {item.precio}</p>
            <button className="botonCompra">Agregar al carrito</button>
        </div>
    )
}