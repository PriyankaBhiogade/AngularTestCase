import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appMaterial } from './app.module.appMaterial';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetComponent } from './component/reset/reset.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,appMaterial,
    BrowserAnimationsModule,MatIconModule,
    MatDividerModule,MatCardModule,MatFormFieldModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
