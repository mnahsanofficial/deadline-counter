import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DeadlineCounterComponent } from './deadline-counter/deadline-counter.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DeadlineCounterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
