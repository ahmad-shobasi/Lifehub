import { Routes } from "@angular/router";

export const PagesRoutes: Routes = [
    {
        path:'',
        loadComponent:()=>import('./dashboard/dashboard').then(m=> m.Dashboard)
    },
    {
        path:'calendar',
        loadComponent:()=>import('./calendar/calendar').then(m=> m.Calendar)
    },
    {
        path:'tasks',
        loadComponent:()=>import('./tasks/tasks').then(m=> m.Tasks)
    },
    {
        path:'goals',
        loadComponent:()=>import('./goals/goals').then(m=> m.Goals)
    },
    {
        path:'notes',
        loadComponent:()=>import('./notes/notes').then(m=> m.Notes)
    },
]