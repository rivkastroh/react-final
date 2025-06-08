export type AvailableDates = string[]; // מערך של תאריכים זמינים בפורמט YYYY-MM-DD

export interface Appointment {
    appointmentId: string;     // מזהה ייחודי של הפגישה
    serviceId: string;         // מזהה השירות שקשור לפגישה
    customerName: string;      // שם הלקוח
    customerEmail: string;     // דוא"ל של הלקוח
    date: Date;                // תאריך הפגישה
    status: string;            // סטטוס הפגישה (כגון: מאושר, ממתין, מבוטל)
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
