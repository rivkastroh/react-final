import { NavLink } from "react-router-dom"

export const Menu = () => {
    return <>
        <nav>
            <NavLink to='/admin/busiens'>פרטי העסק</NavLink>
            <NavLink to='/admin/appointments'>פגישות</NavLink>
        </nav>
    </>
}