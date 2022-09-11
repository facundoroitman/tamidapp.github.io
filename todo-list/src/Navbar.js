import { Link } from "react-router-dom";


const Navbar = () => {

    return ( 
        
        <nav className="navbar">
            <h1>Todo List</h1>

            <div className="links">
                <Link to={'/'}>Home</Link>
                
                <Link to={'/starred'}>Starred</Link>
            </div>
            
        </nav>
     );
}
 
export default Navbar;
