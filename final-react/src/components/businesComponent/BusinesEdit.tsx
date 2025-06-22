import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { updateBusines } from "../../app/slice/detaylesBusines.slice";
import type { Busines } from "../../types/types";

export const BusinesEdit = () => {
    const busines = useSelector((state: RootState) => state.businesState.busines);
    const dispatch: AppDispatch = useDispatch();

    const submit = (e: any) => {
        e.preventDefault();
        dispatch(updateBusines({
            businessId: busines!.email ,
            updateData: {
                name: e.target.name.value,
                address: e.target.address.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                username: e.target.username.value
            } as Busines
        }));
    }
    return <>
        <form onSubmit={submit}>
            <input type="text" placeholder={busines?.name} name="name" />
            <input type="text" placeholder={busines?.address} name="address" />
            <input type="email" placeholder={busines?.email} name="email" />
            <input type="tel" placeholder={busines?.phone} name="phone" />
            <input type="text" placeholder={busines?.username} name="username" />
            <button type="submit">עדכן</button>
        </form>
    </>
}