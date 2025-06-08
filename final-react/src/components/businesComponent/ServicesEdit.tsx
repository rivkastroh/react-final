import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { ShowService } from "../customerComponents/Service";
import { AddService } from "./AddService";

export const ServicesEdit = () => {
    const services = useSelector((state: RootState) => state.serviceState.services);
    return (
        <div>
            {
                services.map(s => {
                    return <ShowService serviceDetails={s} />
                })
            }
            <AddService/>
        </div>
    );
}