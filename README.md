# React Final Project

פרויקט סיום בריאקט

---

## 📖 Overview

This project is a modern **React** application bootstrapped with **Vite** and written primarily in **TypeScript**. It employs a robust tech stack for building interactive, maintainable, and scalable web applications.

---

## 🛠️ Main Technologies

- **React**: UI library for building interactive user interfaces.
- **TypeScript**: Strongly-typed superset of JavaScript for safer and more robust code.
- **Vite**: Fast build tool and development server.
- **Redux Toolkit**: State management solution (using both `redux` and `@reduxjs/toolkit`), with React bindings via `react-redux`.
- **React Router DOM**: Client-side routing for single-page applications.
- **Material UI (MUI)**: Modern component library for building visually appealing UIs.
- **Emotion**: CSS-in-JS solution used by Material UI (`@emotion/react` and `@emotion/styled`).
- **Axios**: Promise-based HTTP client for communicating with APIs.
- **ESLint**: Linting for code quality and consistency.
- **Jest / Testing Library** (if added): For testing React components (not explicitly listed but recommended).

---

## 📦 Project Structure

- `src/` - Application source code (components, pages, hooks, store, etc.)
- `public/` - Static files
- `vite.config.ts` - Project configuration for Vite and React plugin
- `package.json` - Project metadata, dependencies, and scripts
- `tsconfig.*.json` - TypeScript configuration files

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rivkastroh/react-final.git
cd react-final/final-react
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

- The application will typically be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build locally

```bash
npm run preview
```

### 6. Lint the code

```bash
npm run lint
```

---

## 📝 Usage & Customization

- All app source code is under the `src/` directory.
- State management is handled using Redux Toolkit.
- Routing is managed with React Router DOM.
- UI components are built using Material UI and styled with Emotion.
- API calls are handled by Axios. Configure API endpoints as needed.

---

## ⚙️ TypeScript Configuration

- `tsconfig.app.json` - Main app TypeScript config (strict mode, React JSX, bundler module resolution).
- `tsconfig.node.json` - Config for Node/Vite-related files.
- Both configs enforce strict typing and modern JavaScript features.

---

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Material UI](https://mui.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [ESLint Rules](https://eslint.org/docs/latest/rules/)

---

---

# פרויקט סיום בריאקט - תיעוד בעברית

## סקירה כללית

זהו פרויקט צד לקוח שנבנה עם React, בעזרת Vite, ובשפת TypeScript. מטרת הפרויקט היא לבנות אפליקציית ווב מודרנית, אינטראקטיבית, וקלה לתחזוקה.

## טכנולוגיות עיקריות

- **React** – בניית ממשקי משתמש דינמיים
- **TypeScript** – הרחבה טיפוסית ל-JavaScript לקבלת קוד בטוח וחזק
- **Vite** – כלי פיתוח והרצה מהיר
- **Redux Toolkit** – ניהול מצב גלובלי באפליקציה (עם redux ו-react-redux)
- **React Router DOM** – ניתוב (Router) בצד הלקוח
- **Material UI** – ספריית קומפוננטות מתקדמת לממשק משתמש מודרני
- **Emotion** – עיצוב CSS ב-JS (בשילוב עם MUI)
- **Axios** – קריאות HTTP לשרתים ואפיון API
- **ESLint** – שמירה על איכות קוד ואחידות

## מבנה הפרויקט

- `src/` – כל קוד המקור של האפליקציה (קומפוננטות, דפים, hooks, store וכו')
- `public/` – קבצים סטטיים
- `vite.config.ts` – קונפיגורציה ל-Vite ולתוסף React
- `package.json` – תלויות, גרסאות וסקריפטים
- `tsconfig.*.json` – קבצי קונפיגורציה ל-TypeScript

## כיצד מתחילים

1. לשכפל את המאגר:

   ```bash
   git clone https://github.com/rivkastroh/react-final.git
   cd react-final/final-react
   ```

2. התקנת תלויות:

   ```bash
   npm install
   ```

3. להריץ שרת פיתוח:

   ```bash
   npm run dev
   ```

   (ברירת מחדל: http://localhost:5173)

4. בניית גרסה לפרודקשן:

   ```bash
   npm run build
   ```

5. תצוגה של גרסת פרודקשן מקומית:

   ```bash
   npm run preview
   ```

6. בדיקת איכות קוד (לינטינג):

   ```bash
   npm run lint
   ```

## הערות נוספות

- לוגיקת ניהול מצב (סטייט) מתבצעת בעזרת Redux Toolkit.
- ראוטינג (ניתוב) מתבצע עם React Router DOM.
- כל עיצוב הממשק באמצעות Material UI ו-Emotion.
- פניות לשרת/REST מבוצעות עם Axios.
- כל קוד המקור נמצא בתיקיית `src/`.

---

בהצלחה!
