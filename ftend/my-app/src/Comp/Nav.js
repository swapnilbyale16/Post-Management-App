import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Ct from './Ct'


function Nav() {
    let obj = useContext(Ct)
    return (
        <nav>
            {obj.state.token !== "" && <div className='name'>
                <div className='fst'>{obj.state.name[0]}</div>
                <div className='full'>{obj.state.name}</div>
            </div>}
            <Link to="/"><i class="fa-solid fa-house"></i> Home</Link>
            <div className="menu-container">
                <span className="menu-icon"><i className="fa-solid fa-bars"></i></span>
                <div className="menu-links">
                    {obj.state.token === "" && <Link to="/reg"><i class="fa-solid fa-registered"></i> Register</Link>}
                    {obj.state.token === "" && <Link to="/login"><i class="fa-solid fa-right-to-bracket"></i> Login</Link>}
                    {obj.state.token !== "" && obj.state.role === "admin" && <Link to='/admin'> <i class="fa-solid fa-user-tie"></i>&nbsp; Admin</Link>}
                    {obj.state.token !== "" && <Link to="/add-post"><i class="fa-solid fa-right-to-bracket"></i> Add post</Link>}
                    {obj.state.token !== "" && <Link to="/logout">Logout <i class="fa-solid fa-right-to-bracket"></i></Link>}
                </div>
            </div>
        </nav>
    )
}

export default Nav
