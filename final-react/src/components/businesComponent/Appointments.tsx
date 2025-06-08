import { useSelector } from "react-redux"
import type { RootState } from "../../app/store"
import { Menu } from "./Menu";

export const Appointments = () => {
    const appointments = useSelector((state: RootState) => state.appointmentsState.appointments);

    const sortedAppointments = appointments.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const today = new Date();
    const weekLater = new Date(today);
    weekLater.setDate(today.getDate() + 7);

    return (
        <div>
            <Menu />
            {sortedAppointments.map((appointment) => {
                const appointmentDate = new Date(appointment.date);
                let className = '';

                if (appointmentDate.toDateString() === today.toDateString()) {
                    className = 'red'; // פגישות להיום
                } else if (appointmentDate <= weekLater) {
                    className = 'orange'; // פגישות לשבוע הקרוב
                } else {
                    className = 'green'; // פגישות רחוקות יותר
                }

                return (
                    <div key={appointment.appointmentId} className={className}>
                        <p>{appointment.date}תאריך:</p>
                        <p>{appointment.customerEmail}אמייל לקוח:</p>
                        <p>{appointment.serviceId}שרות: </p>
                    </div>
                );
            })}
        </div>
    );


}