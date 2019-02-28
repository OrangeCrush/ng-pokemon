import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Could reduce page in size by importing only what I need
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IvcalcComponent } from './ivcalc/ivcalc.component';

@NgModule({
  declarations: [
    AppComponent,
    IvcalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

