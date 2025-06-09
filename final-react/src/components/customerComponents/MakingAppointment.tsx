import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { addAppointment } from "../../app/slice/appointments.slice";
import { useState } from "react";
import { CustomerDetails } from "./CustomerDetails";

export const MakingAppointment = () => {
    const id = window.location.pathname.split('/').pop() || '';
    const availableDates = useSelector((state: RootState) => state.dateState.availableDates);
    const status = useSelector((state: RootState) => state.appointmentsState.status);
    const isConnected = useSelector((state: RootState) => state.customerState.isConnected);
    const customer = useSelector((state: RootState) => state.customerState.customer);

    const dispatch = useDispatch();
    const [touch, setTouch] = useState(false);


    const making = (date: string) => {
        if (isConnected) {
            dispatch(addAppointment(
                { date: date, appointmentId: "", customerEmail: customer.email, serviceId: id }
            ));
            setTouch(true);
        }
        else {
            alert("עליך להתחבר כדי לקבוע תור");
        }
    }
    return <>
        <h1>קביעת תור</h1>
        {touch && status === 'loading' && <p style={{ color: "#6366f1" }}>טוען...</p>}
        {touch && status === 'error' && <p style={{ color: "#ef4444" }}>קביעת תאריך נכשלה בחר תאריך אחר</p>}
        {touch && status === 'success' && <p style={{ color: "#22c55e" }}>התור נקבע בהצלחה!</p>}
        {!isConnected && <CustomerDetails />}
        <h2>בחר תאריך זמין:</h2>
        <ul style={{ gap: "0.5em" }}>
            {availableDates.map((date, index) => (
                <li key={index}>
                    <button style={{ minWidth: "120px" }} onClick={() => making(date)}>{date}</button>
                </li>
            ))}
        </ul>
    </>
}