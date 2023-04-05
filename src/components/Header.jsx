import React from 'react'
import logo from '../image/me.png'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (

        <header>



            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <img className='logo shadow-sm w-20 ' src={logo} alt="" />
                    <Link className="navbar-brand mx-2 mt-2" to="#"><span className='text-danger'>P</span>ortfolio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
                        <div className="navbar-nav liste m-auto">
                            <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                            <NavLink className="nav-link" to="/services">Services</NavLink>
                            <NavLink className="nav-link" to="/pro-jects">Projects</NavLink>
                            <NavLink className="nav-link" to="/con-tacts">Contacts  </NavLink>

                        </div>
                    </div>
                </div>
            </nav>

        </header>

    )
}
export default Header
