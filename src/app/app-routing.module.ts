import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './components/main-pages/welcome-page/welcome-page.component';
import { SignUpComponent } from './components/main-pages/sign-up/sign-up.component';
import { SignInComponent } from './components/main-pages/sign-in/sign-in.component';
import { DashboardComponent } from './components/home-pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home-pages/dashboard/home/home.component';
import { SettingsComponent } from './components/home-pages/dashboard/settings/settings.component';
import { InformationComponent } from './components/home-pages/dashboard/information/information.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
    { path: 'home', component: HomeComponent},
    { path: 'settings', component: SettingsComponent},
    { path: 'information', component: InformationComponent}
  ]},
  { path: '**', redirectTo: ''}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
