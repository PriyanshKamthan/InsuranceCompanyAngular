import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimComponent } from './components/claim-components/generate-claim/claim.component';
import { HomeComponent } from './components/home/home.component';
import { ShowClaimsComponent } from './components/claim-components/show-claims/show-claims.component';
import { UpdateClaimComponent } from './components/claim-components/update-claim/update-claim.component';
import { GenerateSurveyorFeesComponent } from './components/surveyor-components/generate-surveyor-fees/generate-surveyor-fees.component';
import { ShowSurveyorsComponent } from './components/surveyor-components/show-surveyors/show-surveyors.component';
import { ShowPoliciesComponent } from './components/policy-components/show-policies/show-policies.component';
import { AddPolicyComponent } from './components/policy-components/add-policy/add-policy.component';
import { AddSurveyorComponent } from './components/surveyor-components/add-surveyor/add-surveyor.component';
import { UpdatePolicyComponent } from './components/policy-components/update-policy/update-policy.component';
import { UpdateSurveyorComponent } from './components/surveyor-components/update-surveyor/update-surveyor.component';
import { ApproveClaimComponent } from './components/claim-components/approve-claim/approve-claim.component';

const routes: Routes = [
  {
    path: "surveyor",
    component: ShowSurveyorsComponent,
    pathMatch: "full"
  },
  {
    path: "surveyor/update",
    component: UpdateSurveyorComponent,
    pathMatch: "full"
  },
  {
    path: "surveyor/new",
    component: AddSurveyorComponent,
    pathMatch: "full"
  },
  {
    path: "policy",
    component: ShowPoliciesComponent,
    pathMatch: "full"
  },
  {
    path: "policy/new",
    component: AddPolicyComponent,
    pathMatch: "full"
  },
  {
    path: "policy/update",
    component: UpdatePolicyComponent,
    pathMatch: "full"
  },
  {
    path: "show-claims",
    component: ShowClaimsComponent,
    pathMatch: "full"
  },
  {
    path: "claim/new",
    component: ClaimComponent,
    pathMatch: "full"
  },
  {
    path: "claim/update",
    component: UpdateClaimComponent,
    pathMatch: "full"
  },
  {
    path: "claim/approve",
    component: ApproveClaimComponent,
    pathMatch: "full"
  },
  {
    path: "generate-surveyor-fees",
    component: GenerateSurveyorFeesComponent,
    pathMatch: "full"
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
