import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ClaimComponent } from './components/claim-components/generate-claim/claim.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ClaimDetailsService } from './service/claim-details.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ShowClaimsComponent } from './components/claim-components/show-claims/show-claims.component';
import { UpdateClaimComponent } from './components/claim-components/update-claim/update-claim.component';
import { GenerateSurveyorFeesComponent } from './components/surveyor-components/generate-surveyor-fees/generate-surveyor-fees.component';
import { ShowSurveyorsComponent } from './components/surveyor-components/show-surveyors/show-surveyors.component';
import { ShowPoliciesComponent } from './components/policy-components/show-policies/show-policies.component';
import { AddPolicyComponent } from './components/policy-components/add-policy/add-policy.component';
import { AddSurveyorComponent } from './components/surveyor-components/add-surveyor/add-surveyor.component';
import { UpdatePolicyComponent } from './components/policy-components/update-policy/update-policy.component';
import { UpdateSurveyorComponent } from './components/surveyor-components/update-surveyor/update-surveyor.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ApproveClaimComponent } from './components/claim-components/approve-claim/approve-claim.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ClaimComponent,
    ShowClaimsComponent,
    UpdateClaimComponent,
    GenerateSurveyorFeesComponent,
    ShowSurveyorsComponent,
    ShowPoliciesComponent,
    AddPolicyComponent,
    AddSurveyorComponent,
    UpdatePolicyComponent,
    UpdateSurveyorComponent,
    ApproveClaimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    HttpClientModule,
    MatSelectModule,
    MatSidenavModule,
    MatButtonToggleModule
  ],
  providers: [MatSnackBar, ClaimDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
