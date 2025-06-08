import { useSelector } from "react-redux"
import type { RootState } from "../../app/store"

export const BusinessDetails = () => {
    const busines = useSelector((state: RootState)=> state.businesState.busines);
    return <>
        <h2>פרטי העסק</h2>
        <p>שם: {busines.name}</p>
        <p>כתובת: {busines.address}</p>
        <p>אימייל: {busines.email}</p>
        <p>טלפון: {busines.phone}</p>
        <p>שם מנהל: {busines.username}</p>
    </>
}