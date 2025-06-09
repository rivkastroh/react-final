import { NavLink } from "react-router-dom"
import './Menu.css'

export const Menu = () => {
    return <>
        <nav className="navbar">
            <NavLink to='/admin/busiens' className="nav-link">פרטי העסק</NavLink>
            <NavLink to='/admin/appointments' className="nav-link">פגישות</NavLink>
        </nav>
    </>
}