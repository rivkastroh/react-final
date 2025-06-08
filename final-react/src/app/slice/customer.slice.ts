import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import type { customer } from '../../types/types';

// סלייס זו יחידה שמכילה חלק מסוים מכל הסטור
// היא אמורה להכיל  את הסטייט ואת הרדיוסרס שלו

// סוג המידע שהסלייס הזה אמור להכיל
export interface customerState {
    customer: customer;
    isConnected: boolean;
}

// איתחול של המידע הבסיסי
const initialState: customerState = {
    customer: {
        name: "",
        email: "",
        phone: ""
    },
    isConnected: false
}

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    //   הגדרה של רשימת הארועים שיכולים להיות על הסטייט
    // כל רדיוסר הוא הגדרה של ארוע שיכול להיות על הסטייט
    // והפונקציה של השינוי
    reducers: {
        loginCustomer(state , action: PayloadAction<customer>){
            //יש לאמת מול השרת
            state.customer = action.payload;
            state.isConnected= true;
        }
    },
})


// כאן יש את ההגדרה של ה actions
// לכל רדיוסר יש אקשין שממופה אליו
// Action creators are generated for each case reducer function
export const { loginCustomer } = customerSlice.actions

export default customerSlice.reducer