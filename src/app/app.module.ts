import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { IntroComponent } from './intro/intro.component';

import { MessageService } from './message.service';
import { ReminderService } from './reminder/reminder.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MessageService,
    ReminderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
