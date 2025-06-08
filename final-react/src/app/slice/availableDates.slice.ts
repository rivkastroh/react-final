import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AvailableDates } from '../../types/types';

// סלייס זו יחידה שמכילה חלק מסוים מכל הסטור
// היא אמורה להכיל  את הסטייט ואת הרדיוסרס שלו

// סוג המידע שהסלייס הזה אמור להכיל
export interface DateState {
  availableDates: AvailableDates;
}

// איתחול של המידע הבסיסי
const initialState: DateState = {
  availableDates: [
    "2023-10-02",
    "2023-10-04",
    "2023-10-06",
    "2023-10-07"
  ]
}

export const counterSlice = createSlice({
  name: 'availableDates',
  initialState,
  //   הגדרה של רשימת הארועים שיכולים להיות על הסטייט
  // כל רדיוסר הוא הגדרה של ארוע שיכול להיות על הסטייט
  // והפונקציה של השינוי
  reducers: {
    // // הסטייט שמתקבל כפרמטר, הוא אוביקט מהסוג של ה initialState
    // addTask(state, action: PayloadAction<Task>) {
    //   // בתוך הרדיוסר יש לבצע את השינוי הנדרש
    //   state.tasks.push(action.payload);
    // },
    // removeTask(state, action: PayloadAction<string>) {
    //   state.tasks = state.tasks.filter(task => task.id !== action.payload);
    // }
  },
})


// כאן יש את ההגדרה של ה actions
// לכל רדיוסר יש אקשין שממופה אליו
// Action creators are generated for each case reducer function
// export const { addTask, removeTask } = counterSlice.actions

export default counterSlice.reducer