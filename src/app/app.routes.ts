import { Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path : 'home', component : HomeComponent},
    { path: 'about', component: AboutUsComponent },
    { path: 'contact', component: ContactusComponent },
];
