import { useSelector } from "react-redux";
import type { RootState } from '../../app/store';
import { ShowService } from "./Service";

export const ShowServices = () => {
    const services = useSelector((state: RootState) => state.serviceState.services);

    return (
        <>
            <h1>השרותים שלנו:</h1>

            {
                services.map(s => {
                    return <ShowService serviceDetails={s} />
                })
            }

            <h2>{ !services || services.length == 0 ?  "אין שירותים זמינים" : "שרותים נוספים יעודכנו בהמשך"}</h2>
        </>
    );
}
