import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Service } from '../../types/types';
import { serverInstance } from '../../serverInstance';

// סלייס זו יחידה שמכילה חלק מסוים מכל הסטור
// היא אמורה להכיל  את הסטייט ואת הרדיוסרס שלו

// סוג המידע שהסלייס הזה אמור להכיל
export interface DateState {
    services: Service[] | null;
}

// איתחול של המידע הבסיסי
const initialState: DateState = {
    services: null
}
const fetchServices = createAsyncThunk(
    'services/getAll',
    async () => {
        try {
            const responce = await serverInstance.get(`/services`);
            return responce.data;
        } catch (error) {
            return error;
        }
    }
);
const addService = createAsyncThunk(
    'services/add',
    async (serviceData:Service) => { // הוסף פרמטר עבור נתוני השירות
        try {
            const response = await serverInstance.post(`/services`, serviceData); // שלח את נתוני השירות
            return response.data;
        } catch (error) {
            return error;
        }
    }
);

const removeService = createAsyncThunk(
    'services/remove',
    async (serviceId) => { // הוסף פרמטר עבור ה-ID של השירות
        try {
            const response = await serverInstance.delete(`/services/${serviceId}`); // השתמש בשיטה DELETE
            return response.data; // החזר את התגובה מהשרת
        } catch (error) {
            return error;
        }
    }
);

export const servicesSlice = createSlice({
    name: 'services',
    initialState,
    //   הגדרה של רשימת הארועים שיכולים להיות על הסטייט
    // כל רדיוסר הוא הגדרה של ארוע שיכול להיות על הסטייט
    // והפונקציה של השינוי
    reducers: {
        // הסטייט שמתקבל כפרמטר, הוא אוביקט מהסוג של ה initialState
        // addService(state, action: PayloadAction<Service>) {
        //     // בתוך הרדיוסר יש לבצע את השינוי הנדרש
        //     state.services!.push(action.payload);
        // },
        // removeService(state, action: PayloadAction<string>) {
        //     state.services = state.services!.filter(service => service.serviceId !== action.payload);
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchServices.fulfilled, (state, action: PayloadAction<Service[]>) => {
                state.services = action.payload;
            })
            .addCase(addService.fulfilled, (state, action) => {
                state.services!.push(action.payload); // הוסף את השירות החדש למערך השירותים
            })
            .addCase(removeService.fulfilled, (state, action) => {
                state.services = state.services!.filter(service => service.serviceId !== action.payload.meta.arg); // הסר את השירות מהמערך
            })
    }
})


// כאן יש את ההגדרה של ה actions
// לכל רדיוסר יש אקשין שממופה אליו
// Action creators are generated for each case reducer function

export default servicesSlice.reducer
export {addService ,removeService,fetchServices}