import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Busines, userLogin } from '../../types/types';
import { serverInstance } from '../../serverInstance';

// סלייס זו יחידה שמכילה חלק מסוים מכל הסטור
// היא אמורה להכיל  את הסטייט ואת הרדיוסרס שלו

// סוג המידע שהסלייס הזה אמור להכיל
export interface DateState {
    isConnected: boolean;
    busines: Busines | null;
    token: string | null;
}

// איתחול של המידע הבסיסי
const initialState: DateState = {
    isConnected: false,
    busines: null,
    token: null
}
const loginBusines = createAsyncThunk(
    'busines/login', // שונה מ-'appointment/getAll'
    async (loginData: userLogin, { dispatch }) => {
        try {
            localStorage.setItem("email", loginData.email);
            const response = await serverInstance.post(`/login`, loginData); // שליחת הנתונים
            localStorage.setItem("token", response.data);
            dispatch(fetchBusines(loginData.email));
            return { token: response.data, email: loginData.email };
        } catch (error) {
            console.log(error)
            return Promise.reject(error); // החזרת השגיאה בצורה נכונה
        }
    }
);

const fetchBusines = createAsyncThunk(
    'busines/get', // שונה מ-'appointment/get'
    async (email: string) => { // הוספת פרמטר loginData
        try {
            const response = await serverInstance.get(`/business/${email}`);
            return response.data;
        } catch (error) {
            console.log(error)
            return Promise.reject(error); // החזרת השגיאה בצורה נכונה
        }
    }
);
interface UpdateBusinessParams {
    businessId: string;
    updateData: Busines;
}

const updateBusines = createAsyncThunk(
    'business/put',
    async ({ businessId, updateData }: UpdateBusinessParams) => { // הוסף טיפוס לפרמטרים
        try {
            const response = await serverInstance.patch(`/business/${businessId}`, updateData);
            return response.data;
        } catch (error) {
            console.log(error)
            return Promise.reject(error); // החזרת השגיאה בצורה נכונה
        }
    }
);


export const businesSlice = createSlice({
    name: 'busines',
    initialState,
    //   הגדרה של רשימת הארועים שיכולים להיות על הסטייט
    // כל רדיוסר הוא הגדרה של ארוע שיכול להיות על הסטייט
    // והפונקציה של השינוי
    reducers: {
        updateBusines(state, action: PayloadAction<Busines>) {
            state.busines = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginBusines.fulfilled, (state, action) => {
                state.token = action.payload.token;
                // fetchBusines(action.payload.email);
            })
            .addCase(fetchBusines.fulfilled, (state, action) => {
                state.busines = action.payload;
            })
            .addCase(updateBusines.fulfilled, (state, action) => {
                state.busines = action.payload; // עדכון העסק הקיים
            })
    },
})


// כאן יש את ההגדרה של ה actions
// לכל רדיוסר יש אקשין שממופה אליו
// Action creators are generated for each case reducer function

export default businesSlice.reducer
export { loginBusines, fetchBusines, updateBusines };