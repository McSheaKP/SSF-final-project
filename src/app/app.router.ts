import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent} from './header/header.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const router: Routes = [
    { path: '', component: MainComponent },
    { path: 'login', component: LoginComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'main', component: MainComponent }
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router)