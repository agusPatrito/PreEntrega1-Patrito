import { isValidElement, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from '../helpers/pedirDatos'
import { ItemDetail } from "./ItemDetail"
import  style  from '../styles/ItemDetailContainer.css'


export const ItemDetailContainer = () =>{
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

        pedirDatos()
            .then(r =>{
                setItem( r.find(prod => prod.id === Number(itemId)))
            })
            .finally(() => setLoading(false))
    }, [])

    return(
        <div className="itemDetail">
            {
                loading
                    ? <h2>Cargando</h2>
                    : <ItemDetail item={item} />
            }
        </div>
    )
        
}