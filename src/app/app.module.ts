import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Account/login/login.component';
import { SignupComponent } from './Components/Account/signup/signup.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/partial/navbar/navbar.component';
import { FooterComponent } from './Components/partial/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
