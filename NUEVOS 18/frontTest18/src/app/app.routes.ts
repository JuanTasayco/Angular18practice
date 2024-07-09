import { Routes } from '@angular/router';
import { MaterialDesignsComponent } from './pages/material-designs/material-designs.component';
import { AnimationsComponent } from './pages/animations/animations.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/syncfusion/syncfusion.module').then(m => m.SyncfusionModule)
    }
];
