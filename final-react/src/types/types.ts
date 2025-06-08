export type AvailableDates = string[]; // מערך של תאריכים זמינים בפורמט YYYY-MM-DD

export interface Appointment {
    appointmentId: string;     // מזהה ייחודי של הפגישה
    serviceId: string;         // מזהה השירות שקשור לפגישה
    customerEmail: string;     // דוא"ל של הלקוח
    date: string;                // תאריך הפגישה
}

export interface Service {
    serviceId: string;    // מזהה ייחודי של השירות
    // businessId: string;   // מזהה בעל העסק שאליו שייך השירות
    serviceName: string;  // שם השירות
    description: string;   // תיאור השירות
}

export interface Busines {
    // businessId: string;  // מזהה ייחודי של בעל העסק
    username: string;     // שם המשתמש של בעל העסק
    // password: string;     // סיסמת בעל העסק (מומלץ לא לחשוף)
    name: string;         // שם העסק
    address: string;      // כתובת העסק
    email: string;        // דוא"ל של בעל העסק
    phone: string;        // טלפון של בעל העסק
}

export interface userLogin {
    name: string,
    password: string
}

export interface customer {
    name: string;         // שם הלקוח
    email: string;        // דוא"ל של הלקוח
    phone: string;        // טלפון של הלקוח
}
export type Status = 'loading' | 'success' | 'error' | 'before';

