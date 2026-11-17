import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import navicon from '../Assests/navicon.jpeg';

const Navbar =() =>{
    return(
        <div className='navbar'>
            <img src= {navicon} alt="not found"/>
            <h2>Queen's Handmade</h2>
            <div className="rightSide">
                <Link to='/'>New Arrival</Link>
                <Link to='/Collection'>Collection</Link>
                <Link to='/CustomStudio'>Custom Studio</Link>
                <Link to='/TrackOrder'>Track Order</Link>
                <Link to='/About'>About</Link>
                <Link to='/Contact'>Contact</Link>
                <Link to='/SignIn'><button>Sign In</button></Link>
            </div>

        </div>

    )
    
}
export default Navbar;