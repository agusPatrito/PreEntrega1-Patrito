import tshirt1 from '../../public/image/tshirt1.png'
import fins from '../../public/image/fins.png'
import shorts from '../../public/image/shorts1.png'
import surfboard from '../../public/image/surboard1.png'
import hoodie from '../../public/image/hoodie1.png'
import shorts2 from '../../public/image/shorts2.png'
import bodyboard from '../../public/image/bodyboard.png'
import hat from '../../public/image/hat1.png'
import { useEffect, useState } from 'react'
import style from '../../src/styles/ItemListContainer.css'
import { useParams } from 'react-router-dom'

const MOCK_DATA =[
    {
        id: 1,
        nombre: 'Tshirt',
        descripcion: 'Basic grey tee',
        precio: 2000,
        img: tshirt1,
        categoria: 'Ropa',
    },
    {
        id: 2,
        nombre: 'Futures Fins',
        descripcion: '',
        precio: 5000,
        img: fins,
        categoria: 'Gear'
    },
    {
        id: 3,
        nombre: 'Omega Shorts',
        descripcion: 'Brown beach shorts',
        precio: 3500,
        img: shorts,
        categoria: 'Ropa',
    },
    {
        id: 4,
        nombre: 'surboard 1',
        descripcion: '',
        precio: 30000,
        img: surfboard,
        categoria: 'Gear'
    },
    {
        id: 5,
        nombre: 'surboard 1',
        descripcion: '',
        precio: 30000,
        img: bodyboard,
        categoria: 'Gear'
    },
    {
        id: 6,
        nombre: 'surboard 1',
        descripcion: '',
        precio: 30000,
        img: hoodie,
        categoria: 'Ropa'
    },
    {
        id: 7,
        nombre: 'surboard 1',
        descripcion: '',
        precio: 30000,
        img: shorts2,
        categoria: 'Ropa'
    },
    {
        id: 8,
        nombre: 'surboard 1',
        descripcion: '',
        precio: 30000,
        img: hat,
        categoria: 'Ropa'
    },
]


export const ItemList = () => {
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()

    

    useEffect(() =>{
        const pedirDatos = () =>{
            return new Promise((resolve, reject) =>{
                setTimeout(()=>{
                    resolve(MOCK_DATA)
                }, 800)
            })
        }
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
    },[])

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

