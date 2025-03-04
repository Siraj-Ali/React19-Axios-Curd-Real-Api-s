// import { Link, NavLink } from "react-router";
// import {NavLink} from "react-router-dom";

import { NavLink } from "react-router"

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary text-black" style={{backgroundColor: "#e3f2fd"}}>
            {/* <a className="navbar-brand" href="#">Poki&Movies</a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse text-black" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <NavLink className={({isActive}) => isActive ? 'nav-link active nav-link anchor' : 'anchor'} to={`/`}>Post </NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className={({isActive}) => isActive ? 'nav-link active nav-link anchor' : 'anchor'} to={`/faqs`}>FAQs </NavLink>
                </li>
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
            </div>
            </nav>
    )
}