import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateDailyComponent } from './create-daily/create-daily.component';
import { HttpClientModule  } from "@angular/common/http";

import {HashLocationStrategy , LocationStrategy} from '@angular/common';
import { InputRequiredDirective } from './shared/input-required.directive';
import { ManageComponent } from './manage/manage.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateDailyComponent,
    InputRequiredDirective,
    ManageComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
