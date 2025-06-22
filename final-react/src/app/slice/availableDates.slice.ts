import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AvailableDates } from '../../types/types';
import { serverInstance } from '../../serverInstance';

// סלייס זו יחידה שמכילה חלק מסוים מכל הסטור
// היא אמורה להכיל  את הסטייט ואת הרדיוסרס שלו

// סוג המידע שהסלייס הזה אמור להכיל
export interface DateState {
  availableDates: AvailableDates | null;
}
// איתחול של המידע הבסיסי
const initialState: DateState = {
  availableDates: null
}
const fetchAvailable = createAsyncThunk(
  'appoitments-available',
  async () => {
    try {
      const responce = await serverInstance.get(`/appoitments-available`);
      return responce.data;
    } catch (error) {
      return error;
    }
  }
);

export const counterSlice = createSlice({
  name: 'availableDates',
  initialState,
  //   הגדרה של רשימת הארועים שיכולים להיות על הסטייט
  // כל רדיוסר הוא הגדרה של ארוע שיכול להיות על הסטייט
  // והפונקציה של השינוי
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAvailable.fulfilled, (state, action: PayloadAction<AvailableDates>) => {
      state.availableDates = action.payload;
    })
  }
})


// כאן יש את ההגדרה של ה actions
// לכל רדיוסר יש אקשין שממופה אליו
// Action creators are generated for each case reducer function
//export const { addAppointment } = counterSlice.actions

export default counterSlice.reducer
export { fetchAvailable }