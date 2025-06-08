import { useDispatch } from "react-redux";
import { loginCustomer } from "../../app/slice/customer.slice";

export const CustomerDetails = () => {
      const dispatch = useDispatch();


    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginCustomer({
            name: e.currentTarget.customerName.value,
            email: e.currentTarget.customerEmail.value,
            phone: e.currentTarget.customerPhone.value
        }))
    }
    return <>
        <form onSubmit={submit}>
            <input type="text" placeholder="שם לקוח" name="customerName"/>
            <input type="email" placeholder="אמייל" name="customerEmail"/>
            <input type="tel" placeholder="טלפון" name="customerPhone"/>
            <button type="submit">כניסה</button>
        </form>
    </>
}
