// src/app/app.routes.ts
import { Routes } from '@angular/router';
import{ FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { UComponent } from './u/u.component';
import { NComponent } from './n/n.component';
import { OComponent } from './o/o.component';
import { ObeseComponent } from './obese/obese.component';
import { LoginComponent } from './login/login.component';
import { AccComponent } from './acc/acc.component';
import { WComponent } from './w/w.component';
export const routes: Routes = [
  { path: '', redirectTo: '/w', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'workouts', component: WorkoutsComponent },
  { path: 'nutrition', component: NutritionComponent },
  { path: 'u', component: UComponent },
  { path: 'n', component: NComponent },
  { path: 'o', component: OComponent },
  { path: 'obese', component: ObeseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'acc', component: AccComponent },
  { path: 'w', component: WComponent }
];
