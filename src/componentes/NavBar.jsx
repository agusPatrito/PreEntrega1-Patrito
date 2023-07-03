import logo from '../image/logo.png'
import { CartWidget } from './CartWidget'
export const NavBar = () =>{
    return(
            <nav className="navbar" style={{
                display:'flex',
                justifyContent:'space-between',
                height:'100px',
                backgroundColor:'#ffff',
    

                

                
            }}>
                <img src={logo} alt="" style={{
                    height:'40px',
                    width:'40px',
                    alignSelf:'center'
                }}/>

                <ul style={{
                    listStyle:'None',
                    display:'flex'
                }}>
                    <li style={{ padding: '20px',}}><a href="#">Home</a></li>
                    <li style={{ padding: '20px'}}><a href="#">Products</a></li>
                    <li style={{ padding: '20px'}}><a href="#">About Us</a></li>
                    <li style={{ padding: '20px'}}><a href="#">Contact</a></li>
                </ul>

                
                <CartWidget/>
            
            </nav>
    )
}