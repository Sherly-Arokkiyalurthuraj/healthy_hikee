import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { UComponent } from './u/u.component';
import { NComponent } from './n/n.component';
import { OComponent } from './o/o.component';
import { ObeseComponent } from './obese/obese.component';
import { LoginComponent } from './login/login.component';
import { AccComponent } from './acc/acc.component';
import { WComponent } from './w/w.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    WorkoutsComponent,
    NutritionComponent, 
    UComponent,
    NComponent,
    OComponent,
    ObeseComponent,
    LoginComponent,
    AccComponent,
    WComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgbModule,
    NgbAccordionModule,// Add AppRoutingModule here
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
