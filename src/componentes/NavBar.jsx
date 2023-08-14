import logo from '../../public/image/logo.png'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'

export const NavBar = () =>{
    return(
            <nav className="navbar" style={{
                display:'flex',
                justifyContent:'space-between',
                height:'100px',
                backgroundColor: 'white',
    
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
                    <li style={{ padding: '20px',}}><Link to="/">Home</Link></li>
                    <li style={{ padding: '20px'}}><Link to="/productos/Ropa">Ropa</Link></li>
                    <li style={{ padding: '20px'}}><Link to="/productos/Gear">Gear</Link></li>

                </ul>

                
                <Link to="/carro"><CartWidget/></Link>
            
            </nav>
    )
}