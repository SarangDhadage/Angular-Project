import { Routes } from '@angular/router';
import { LiveComponent } from './pages/live/live.component';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';

export const routes: Routes = [
    
    {
        path:'live',
        component:LiveComponent,
        title:'Live Matches'
       
    },
    {
        path:'home',
        component:HomeComponent,
        title:'Home'
       
    },
    {
        path:"point-table",
        component:PointTableComponent,
        title:'Point Table'
    },
    {   
        path:"history",
        component:HistoryComponent,
        title:'History'
     }
];
