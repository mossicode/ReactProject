import { NavLink } from "react-router-dom";
import "./navbar.css"

export default function Navbar() {
  return (
   <>
   
   <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 ">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white ">
                <NavLink to="/dashboard" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-danger text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                </NavLink>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start text-danger " id="menu">
                    <li className="nav-item">
                        <NavLink to="/dashboard" className="nav-link align-middle px-0" style={{display:"flex", alignItems:"center"}}>
                            <i className="fa-solid fa-house " style={{fontSize:"12px", display:"inline"}}></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/table"  className="nav-link px-0 align-middle">
                            <i className="fa-solid fa-table"></i> <span className="ms-1 d-none d-sm-inline"> Tables 
                                </span> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/billing" className="nav-link px-0 align-middle">
                            <i className="fa-solid fa-cow"></i> <span className="ms-1 d-none d-sm-inline">Billing
                        </span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/real" className="nav-link px-0 align-middle ">
                            <i className="fa-solid fa-tv"></i> <span className="ms-1 d-none d-sm-inline">Virtual Reality
                        </span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/rtl"  className="nav-link px-0 align-middle">
                            <i className="fa-solid fa-computer"></i> <span className="ms-1 d-none d-sm-inline">RTL
                        </span> </NavLink>
                    </li>

                    <li>
                       <i className="fs-4 bi-people  nav-link px-0 align-middle"></i> <span className="ms-1 d-none d-sm-inline text-secondary"style={{fontSize:"11px !important"}} >ACCOUNT PAGE</span> 
                    </li>
                    <li>
                        <NavLink to="/profile" className="nav-link px-0 align-middle">
                            <i className="fa-solid fa-person"></i> <span className="ms-1 d-none d-sm-inline">Profile
                        </span> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login"  className="nav-link px-0 align-middle">
                            <i className="fa-solid fa-sign"></i> <span className="ms-1 d-none d-sm-inline">Sign In
                         </span> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/logout" className="nav-link px-0 align-middle">
                            <i className="ga-solid fa-sign-out"></i> <span className="ms-1 d-none d-sm-inline">Sign Up
                        </span> </NavLink>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</div>

   </>
  )
}
