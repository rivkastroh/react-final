import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { ServicesEdit } from "./ServicesEdit";
import { useState } from "react";
import { BusinesEdit } from "./BusinesEdit";
import { Menu } from "./Menu";
import { fetchBusines } from "../../app/slice/detaylesBusines.slice";

export const BusinesDetailsOpen = () => {
    const busines = useSelector((state: RootState) => state.businesState.busines);
    const dispatch: AppDispatch = useDispatch();

    if (!busines) {
        dispatch(fetchBusines(localStorage.getItem("email")!));
    }
    const [edit, setEdit] = useState(false);
    const editF = (e: any) => {
        e.preventDefault();
        setEdit(true);
    }
    return <>
        <Menu />
        <div className="card">
            <h2>פרטי העסק</h2>
            <p>שם: {busines?.name}</p>
            <p>כתובת: {busines?.address}</p>
            <p>אימייל: {busines?.email}</p>
            <p>טלפון: {busines?.phone}</p>
            <p>שם מנהל: {busines?.username}</p>
            <button onClick={editF}>עריכה</button>
            {edit && <BusinesEdit />}
        </div>
        <ServicesEdit />
    </>
}