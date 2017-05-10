import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MessageService } from './message/message.service';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'chat', component: ChatComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
