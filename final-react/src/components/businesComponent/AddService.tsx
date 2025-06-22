import { useDispatch } from "react-redux";
import { addService } from "../../app/slice/services.slice";
import type { AppDispatch } from "../../app/store";
import type { Service } from "../../types/types";


export const AddService = () => {
    const dispatch: AppDispatch = useDispatch();
    const submit = (e: any) => {
        e.preventDefault();
        dispatch(addService(
            {
                description: e.target.description.value,
                serviceName: e.target.name.value,
                serviceId: ""
            } as Service
        ))
    }
    return <>
        <form onSubmit={submit}>
            <input type="text" placeholder="Service Name" name="name" />
            <input type="text" placeholder="Service Description" name="description" />
            <button type="submit">הוספה</button>
        </form>
    </>
}
