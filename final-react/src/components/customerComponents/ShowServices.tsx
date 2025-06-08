import { useSelector } from "react-redux";
import type { RootState } from '../../app/store';
import { ShowService } from "./Service";
import { useNavigate } from "react-router-dom";

export const ShowServices = () => {
    const services = useSelector((state: RootState) => state.serviceState.services);
    const navigate = useNavigate();


    const clickService = (id: String) => {
        navigate(`/service/${id}`);
    }
    return (
        <>
            <h1>השרותים שלנו:</h1>

            {
                services.map(s => {
                    return <button onClick={() => clickService(s.serviceId)}><ShowService serviceDetails={s} /></button>
                })
            }

            <h2>{!services || services.length == 0 ? "אין שירותים זמינים" : "שרותים נוספים יעודכנו בהמשך"}</h2>
        </>
    );
}
