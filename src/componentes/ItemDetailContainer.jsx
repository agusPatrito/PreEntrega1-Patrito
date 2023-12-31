import { isValidElement, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from '../helpers/pedirDatos'
import { ItemDetail } from "./ItemDetail"
import  style  from '../styles/ItemDetailContainer.css'
import { db } from "../firebase/config"
import { doc, getDoc} from "firebase/firestore"


export const ItemDetailContainer = () =>{
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

        //1
        const itemRef = doc(db, "productos", itemId)
        //2
        getDoc(itemRef)
            .then((doc) =>{
                setItem({
                    id: doc.id,
                    ...doc.data()
                    
                })
                
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