import { configureStore } from '@reduxjs/toolkit';
import dateRedusers from './slice/availableDates.slice';
import serviceRedusers from './slice/services.slice'
import  businesRedusers  from './slice/detaylesBusines.slice';

// יצירה של סטור - מעין המיכל שאמור להכיל את כל הדטה - כל הסטייט של רידקס/ של המערכת
export const store = configureStore({
  reducer: {
    dateState: dateRedusers,
    serviceState: serviceRedusers,
    businesState: businesRedusers,
  },
})


// הגדרות של טייפים עבור טייפסקריפט

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch