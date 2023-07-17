import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ClaimDetailsService } from 'src/app/service/claim-details.service';

@Component({
  selector: 'app-show-claims',
  templateUrl: './show-claims.component.html',
  styleUrls: ['./show-claims.component.css']
})
export class ShowClaimsComponent {
  allClaims: any;
  pageHeading = "";

  // showClaimSelection = new FormControl('');
  
  displayedColumns: string[] = ['claimId', 'policyNo',
    'estimatedLoss', 'dateOfAccident', 'claimStatus', 'surveyorName',
    'amtApprovedBySurveyor', 'insuranceCompanyApproval', 'withdrawClaim', 'surveyorFees']
  
    constructor(private claimService: ClaimDetailsService) {
    this.onShowAllClaims();
  }

  onShowAllClaims() {
    // document.getElementById("page-head") = "All Claims"
    this.pageHeading = "All Claims"
    this.claimService.getAllClaims().subscribe(
      (data) => {
        this.allClaims = data;
      },(error) => {
        console.log(error.error.message);
      }
    );
  }

  onShowOpenClaims() {
    this.pageHeading = "Open Claims"
    this.claimService.getOpenClaims().subscribe(
      (data) => {
        this.allClaims = data;
      },(error) => {
        console.log(error.error.message);
      }
    );
  }
}
