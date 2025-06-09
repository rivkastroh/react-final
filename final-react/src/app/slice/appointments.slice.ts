import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Appointment, Status } from '../../types/types';

// סלייס זו יחידה שמכילה חלק מסוים מכל הסטור
// היא אמורה להכיל  את הסטייט ואת הרדיוסרס שלו

// סוג המידע שהסלייס הזה אמור להכיל
export interface AppointmentsState {
    status: Status;
    appointments: Appointment[],
}

// איתחול של המידע הבסיסי
const initialState: AppointmentsState = {
    status: 'before',
    appointments: [
        { appointmentId: "0", customerEmail: "vrd@hj",date: "2023-10-10",serviceId:"1"},
        { appointmentId: "1", customerEmail: "vrd@hj",date: "2023-10-10",serviceId:"1"},
        { appointmentId: "2", customerEmail: "vrd@hj",date: "2023-10-10",serviceId:"1"}
    ],
}

export const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState,
    //   הגדרה של רשימת הארועים שיכולים להיות על הסטייט
    // כל רדיוסר הוא הגדרה של ארוע שיכול להיות על הסטייט
    // והפונקציה של השינוי
    reducers: {
        addAppointment(state, action: PayloadAction<Appointment>) {
            state.status = 'loading';
            //לעשות קריאת שרת לראות שהתאריך פנוי ולהוריד אותו מהרשימה
            //לעדכן את הסטטוס
            console.log("add appointments")
            state.appointments.push(action.payload);
            state.status = 'success';
        },
        // removeService(state, action: PayloadAction<string>) {
        //   state.busines = state.services.filter(service => service.serviceId !== action.payload);
        // }
    },
})


// כאן יש את ההגדרה של ה actions
// לכל רדיוסר יש אקשין שממופה אליו
// Action creators are generated for each case reducer function
export const { addAppointment } = appointmentsSlice.actions

export default appointmentsSlice.reducer