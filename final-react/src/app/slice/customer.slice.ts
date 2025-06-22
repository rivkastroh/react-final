import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { customer } from '../../types/types';
import { serverInstance } from '../../serverInstance';

// סלייס זו יחידה שמכילה חלק מסוים מכל הסטור
// היא אמורה להכיל  את הסטייט ואת הרדיוסרס שלו

// סוג המידע שהסלייס הזה אמור להכיל
export interface customerState {
    customer: customer |null;
    isConnected: boolean;
}


// איתחול של המידע הבסיסי
const initialState: customerState = {
    customer: null,
    isConnected: false
}

// Thunk לאימות לקוח
const loginCustomerThunk = createAsyncThunk(
    'customer/loginCustomer',
    async (payload: customer, { rejectWithValue }) => {
        try {
            await serverInstance.get(`/users/${payload.email}`);
            return payload;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    //   הגדרה של רשימת הארועים שיכולים להיות על הסטייט
    // כל רדיוסר הוא הגדרה של ארוע שיכול להיות על הסטייט
    // והפונקציה של השינוי

    reducers: {
        // ניתן להשאיר רדיוסרים נוספים כאן
    },
    extraReducers: (builder) => {
        builder.addCase(loginCustomerThunk.fulfilled, (state, action: PayloadAction<customer>) => {
            state.customer = action.payload;
            state.isConnected = true;
        });
        builder.addCase(loginCustomerThunk.rejected, (state, action) => {
            state.isConnected = false;
            // אפשר להוסיף טיפול בשגיאה כאן
        });
    },
});

export default customerSlice.reducer;
export { loginCustomerThunk };