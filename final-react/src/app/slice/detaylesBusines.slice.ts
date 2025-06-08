import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Busines, userLogin } from '../../types/types';

// סלייס זו יחידה שמכילה חלק מסוים מכל הסטור
// היא אמורה להכיל  את הסטייט ואת הרדיוסרס שלו

// סוג המידע שהסלייס הזה אמור להכיל
export interface DateState {
    isConnected: boolean;
    busines: Busines;
}

// איתחול של המידע הבסיסי
const initialState: DateState = {
    isConnected: false,
    busines: {
        name: "hfk lb",
        address:"dgbufin",
        email:"k@gf",
        phone:"0459",
        username:"gf"
    }
}

export const businesSlice = createSlice({
    name: 'busines',
    initialState,
    //   הגדרה של רשימת הארועים שיכולים להיות על הסטייט
    // כל רדיוסר הוא הגדרה של ארוע שיכול להיות על הסטייט
    // והפונקציה של השינוי
    reducers: {
        loginBusines(state , action: PayloadAction<userLogin>){
            state.isConnected= true;
        }
        // removeService(state, action: PayloadAction<string>) {
        //   state.busines = state.services.filter(service => service.serviceId !== action.payload);
        // }
    },
})


// כאן יש את ההגדרה של ה actions
// לכל רדיוסר יש אקשין שממופה אליו
// Action creators are generated for each case reducer function
export const { loginBusines } = businesSlice.actions

export default businesSlice.reducer