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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    routes,
    HttpClientModule,
    FormsModule
  ],
  providers: [StockFilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
