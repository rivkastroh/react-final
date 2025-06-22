import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { fetchBusines, loginBusines } from "../../app/slice/detaylesBusines.slice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const LoginAdmin = () => {

    const dispatch: AppDispatch = useDispatch(); // טיפוס ה-Dispatch
    const busines = useSelector((state: RootState) => state.businesState.isConnected);
    const token = useSelector((state: RootState) => state.businesState.token);
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const login = async (e: any) => {
        setError(false)
        e.preventDefault();
        await dispatch(loginBusines({ email: e.target.email.value, password: e.target.password.value }));
    }
    useEffect(() => {
        if (token) {
            navigate("/admin/home");
        } else if (error) {
            setError(true);
        }
    }, [token, dispatch, navigate]);
    if (busines) {
        navigate("/admin/home");
    }
    return <>
        <h1>ברוך הבא</h1>
        <form onSubmit={login}>
            <input type="text" placeholder="אמייל" name="email" />
            <input type="password" placeholder="סיסמה" name="password" />
            <button type="submit">כניסה</button>
        </form>
        {error && <p>שם משתמש או סיסמה שגויים</p>}
    </>
}