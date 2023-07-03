import carrito from '../image/carrito.png'
export const CartWidget = () =>{
    const items = []
    return(
        
        <div className="carrito-navbar">
            <img src={carrito} alt="" style={{
                height:'40px',
                width:'40px',
                alignContent:'center'
            }}/>
            <p>0</p>
            {items}
            
        </div>
    )}
