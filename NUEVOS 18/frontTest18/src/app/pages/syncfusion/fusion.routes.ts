import { RouterModule, Routes } from '@angular/router';
import { TestFusionComponent } from './test-fusion/test-fusion.component';
import { NgModule } from '@angular/core';


export const routesFusion: Routes = [
    {
        path: '',
        component: TestFusionComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forChild(routesFusion)],
    exports: [RouterModule]
})

export class FusionRoutingModule { }
