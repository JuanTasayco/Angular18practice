import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeadNavComponent } from './shared/head-nav/head-nav.component';

@NgModule({
  declarations: [
    AppComponent

  ],
  /*   HomeComponent,
    VideogamesComponent,
    AllComponent */
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
