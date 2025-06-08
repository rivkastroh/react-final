import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { loginBusines } from "../../app/slice/detaylesBusines.slice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const LoginAdmin = () => {

    const dispatch = useDispatch();
    const busines = useSelector((state: RootState) => state.businesState.isConnected);
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const login = async (e: any) => {
        e.preventDefault();
        await dispatch(loginBusines({ name: e.target.name.value, password: e.target.password.value }));
        if (busines) {
            navigate("/admin/home");
        }
        else {
            setError(true);
        }
    }
    if (busines) {
        navigate("/admin/home");
    }
    return <>
        <h1>ברוך הבא</h1>
        <form onSubmit={login}>
            <input type="text" placeholder="שם" name="name" />
            <input type="password" placeholder="סיסמה" name="password" />
            <button type="submit">כניסה</button>
        </form>
        {error && <p>שם משתמש או סיסמה שגויים</p>}
    </>
}