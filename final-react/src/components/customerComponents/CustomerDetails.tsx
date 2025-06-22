import { useDispatch } from "react-redux";
import { loginCustomerThunk } from "../../app/slice/customer.slice";
import type { AppDispatch } from "../../app/store";
import type { customer } from "../../types/types";

export const CustomerDetails = () => {
    //const dispatch = useDispatch();
    const dispatch: AppDispatch = useDispatch(); // טיפוס ה-Dispatch

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginCustomerThunk({
            name: e.currentTarget.customerName.value,
            email: e.currentTarget.customerEmail.value,
        } as customer));
    }

    return <>
        <form onSubmit={submit}>
            <input type="text" placeholder="שם לקוח" name="customerName" />
            <input type="email" placeholder="אמייל" name="customerEmail" />
            <button type="submit">כניסה</button>
        </form>
    </>
}
