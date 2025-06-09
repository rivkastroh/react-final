import { useSelector } from "react-redux"
import type { RootState } from "../../app/store"
import { Menu } from "./Menu";

export const Appointments = () => {
    const appointments = useSelector((state: RootState) => state.appointmentsState.appointments);

    const sortedAppointments = appointments.slice().sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const today = new Date();
    const weekLater = new Date(today);
    weekLater.setDate(today.getDate() + 7);

    return (
        <div>
            <Menu />
            {sortedAppointments.map((appointment) => {
                const appointmentDate = new Date(appointment.date);
                let className = 'appointment-card';

                if (appointmentDate.toDateString() === today.toDateString()) {
                    className += ' red';
                } else if (appointmentDate <= weekLater) {
                    className += ' orange';
                } else {
                    className += ' green';
                }

                return (
                    <div key={appointment.appointmentId} className={className}>
                        <p>תאריך: {appointment.date}</p>
                        <p>אמייל לקוח: {appointment.customerEmail}</p>
                        <p>שרות: {appointment.serviceId}</p>
                    </div>
                );
            })}
        </div>
    );


}