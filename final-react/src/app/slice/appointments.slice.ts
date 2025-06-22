import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Appointment, Status } from '../../types/types';
import { serverInstance } from '../../serverInstance';

// סלייס זו יחידה שמכילה חלק מסוים מכל הסטור
// היא אמורה להכיל  את הסטייט ואת הרדיוסרס שלו

// סוג המידע שהסלייס הזה אמור להכיל
export interface AppointmentsState {
    status: Status;
    appointments: Appointment[] | null,
}

// איתחול של המידע הבסיסי
const initialState: AppointmentsState = {
    status: 'before',
    appointments: null,
}
const fetchData = createAsyncThunk(
    'appointments/getAll', // שונה מ-'appointment/getAll'
    async () => {
        try {
            const responce = await serverInstance.get(`/meeting`);
            return responce.data;
        } catch (error) {
            return error;
        }
    }
);
const addAppointment = createAsyncThunk(
    'appointments/add',
    async (appointmentData :Appointment) => { // הוסף פרמטרים אם יש צורך
        try {
            const response = await serverInstance.post(`/meeting`, appointmentData);
            return response.data;
        } catch (error) {
            return Promise.reject(error); // החזרת השגיאה בצורה נכונה
        }
    }
);


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
            if (state.appointments)
                state.appointments.push(action.payload);
            else
                fetchData();
            state.status = 'success';
        },
        // removeService(state, action: PayloadAction<string>) {
        //   state.busines = state.services.filter(service => service.serviceId !== action.payload);
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action: PayloadAction<Appointment[]>) => {
                state.appointments = action.payload;
                state.status = 'success';
            })
            .addCase(fetchData.rejected, (state) => {
                state.status = 'error';
            })
            .addCase(addAppointment.fulfilled, (state, action) => {
                state.appointments?.push(action.payload); // הוספת הפגישה לרשימה
                state.status="success"
            })
            .addCase(addAppointment.rejected, (state, action) => {
                state.status = "error";
            }).addCase(addAppointment.pending, (state, action) => {
                state.status = 'loading';
            })
    },
})


// כאן יש את ההגדרה של ה actions
// לכל רדיוסר יש אקשין שממופה אליו
// Action creators are generated for each case reducer function

export default appointmentsSlice.reducer
export { fetchData,addAppointment };