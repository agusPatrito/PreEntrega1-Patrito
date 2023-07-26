
import { useEffect, useState } from 'react'
import style from '../../src/styles/ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../helpers/pedirDatos'



export const ItemList = () => {
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()

    

    useEffect(() =>{
        pedirDatos()
        .then ( res => {
            if (categoryId){
                setProductos(res.filter(prod => prod.categoria === categoryId))
            }else{
                setProductos(res)
            }
        })
        .catch ((error) =>{
            console.log(error)
        })
    },[categoryId])

    return(
        <div className='contenedorCatalogo'>
            {
                productos.map((prod) => (
                    <div className='tarjetaProducto'>
                        <h4>{prod.nombre}</h4>
                        <img className='imagenProducto' src={prod.img} alt='' />
                        <p>{prod.descripcion}</p>
                        <p>Precio:  {prod.precio}</p>
                        <button className='botonCompra'>Ver mas</button>

                    </div>
                ))   
            }
        </div>
    )

} 

