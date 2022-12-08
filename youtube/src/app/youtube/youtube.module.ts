import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { VideogamesComponent } from './pages/videogames/videogames.component';
import { AllComponent } from './pages/all/all.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    VideogamesComponent,
    AllComponent],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    SharedModule
  ]
})
export class YoutubeModule { }
