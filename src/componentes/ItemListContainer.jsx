
import { useEffect, useState } from 'react'
import style from '../../src/styles/ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../helpers/pedirDatos'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'
import { Link } from 'react-router-dom'

export const ItemList = () => {
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()

    

    useEffect(() =>{
        //1
        const productosRef = collection(db, "productos")
        const q = categoryId
                    ? query(productosRef, where('categoria', "==", categoryId))
                    : productosRef
        //2
        getDocs(q)
            .then((resp) =>{
                const docs = resp.docs.map((doc) => {
                    return{
                        id: doc.id,
                        ...doc.data()
                    }
                    
                })
                setProductos(docs)
            })
        },[categoryId])

        return(
            
            <div className="contenedorCatalogo">
                {
                    productos.map((prod) =>(
                        <div className="tarjetaProducto">
                            
                            <h4>{prod.nombre}</h4>
                            <img className='imagenProducto' src={prod.img} alt="" />
                            <p>Precio: {prod.precio}</p>
                            <Link className='linkVerMas' to={`/detail/${prod.id}`}>Ver Mas</Link>
                        </div>
                    ))
                }
            </div>
        
    )

} 

