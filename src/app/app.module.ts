import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "@clr/angular";
import { StockFilterService } from './stockfilter.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { routes } from './app.router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { RegisterComponent } from './register/register.component';
import { AppUserService } from './app-user.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    routes,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [StockFilterService, AppUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
