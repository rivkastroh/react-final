import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AvailableDates} from '../../types/types';

// סלייס זו יחידה שמכילה חלק מסוים מכל הסטור
// היא אמורה להכיל  את הסטייט ואת הרדיוסרס שלו

// סוג המידע שהסלייס הזה אמור להכיל
export interface DateState {
  availableDates: AvailableDates;
}
// איתחול של המידע הבסיסי
const initialState: DateState = {
  availableDates: [
    '2023-10-01T00:00:00',
    '2023-10-02T00:00:00',
  ]
}

export const counterSlice = createSlice({
  name: 'availableDates',
  initialState,
  //   הגדרה של רשימת הארועים שיכולים להיות על הסטייט
  // כל רדיוסר הוא הגדרה של ארוע שיכול להיות על הסטייט
  // והפונקציה של השינוי
  reducers: {
    // הסטייט שמתקבל כפרמטר, הוא אוביקט מהסוג של ה initialState

    // removeTask(state, action: PayloadAction<string>) {
    //   state.tasks = state.tasks.filter(task => task.id !== action.payload);
    // }
  },
})


// כאן יש את ההגדרה של ה actions
// לכל רדיוסר יש אקשין שממופה אליו
// Action creators are generated for each case reducer function
//export const { addAppointment } = counterSlice.actions

export default counterSlice.reducer