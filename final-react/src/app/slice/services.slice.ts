import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Service } from '../../types/types';

// סלייס זו יחידה שמכילה חלק מסוים מכל הסטור
// היא אמורה להכיל  את הסטייט ואת הרדיוסרס שלו

// סוג המידע שהסלייס הזה אמור להכיל
export interface DateState {
    services: Service[];
}

// איתחול של המידע הבסיסי
const initialState: DateState = {
    services: [{
        serviceId: '1',
        serviceName: 'שירות ראשון',
        description: 'תיאור של השירות הראשון'
    },
    {
        serviceId: '2',
        serviceName: 'שירות שני',
        description: 'תיאור של השירות השני'
    },
    {
        serviceId: '3',
        serviceName: 'שירות שלישי',
        description: 'תיאור של השירות השלישי'
    },
    {
        serviceId: '4',
        serviceName: 'שירות רביעי',
        description: 'תיאור של השירות הרביעי'
    },
    {
        serviceId: '5',
        serviceName: 'שירות חמישי',
        description: 'תיאור של השירות החמישי'
    }]
}

export const servicesSlice = createSlice({
    name: 'services',
    initialState,
    //   הגדרה של רשימת הארועים שיכולים להיות על הסטייט
    // כל רדיוסר הוא הגדרה של ארוע שיכול להיות על הסטייט
    // והפונקציה של השינוי
    reducers: {
        // הסטייט שמתקבל כפרמטר, הוא אוביקט מהסוג של ה initialState
        addService(state, action: PayloadAction<Service>) {
          // בתוך הרדיוסר יש לבצע את השינוי הנדרש
          state.services.push(action.payload);
        },
        removeService(state, action: PayloadAction<string>) {
          state.services = state.services.filter(service => service.serviceId !== action.payload);
        }
    },
})


// כאן יש את ההגדרה של ה actions
// לכל רדיוסר יש אקשין שממופה אליו
// Action creators are generated for each case reducer function
export const { addService, removeService } = servicesSlice.actions

export default servicesSlice.reducer