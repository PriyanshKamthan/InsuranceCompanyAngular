import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClaimDetailsService } from 'src/app/service/claim-details.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent {

  claimDetails = {
    policy: {
      policyNo: ""
    },
    claimStatus: "",
    estimatedLoss: "",
    dateOfAccident: "",
    surveyor: {
      surveyorId: ""
    }
  }

  surveyors:any;
  apiResponse:any;

  constructor(private claimService: ClaimDetailsService, private snak: MatSnackBar) {
  }

  onAddClaim() {
    if (this.claimDetails.policy.policyNo == "" || this.claimDetails.estimatedLoss == "" 
    || this.claimDetails.dateOfAccident == "" || this.claimDetails.claimStatus =="") {
      this.snak.open("Feilds can not be empty", "OK");
      return;
    }
        
    if(this.claimDetails.claimStatus=="Open") {
      this.claimDetails.claimStatus="true";
    } else {
      this.claimDetails.claimStatus="false";
    }

    

    // this.claimDetails.surveyor.surveyorId = "1";
    this.claimService.getSurveyor(this.claimDetails.estimatedLoss).subscribe(
      response=> {
        this.surveyors = response;
        this.claimDetails.surveyor.surveyorId = this.surveyors[0].surveyorId;
        this.claimService.addClaim(this.claimDetails).subscribe(
          response => {
            this.apiResponse = response;
            alert("New claim added successfully"
            + "\nClaimId:" + this.apiResponse.claimId
            + "\nSurveyorId: "+this.apiResponse.surveyor.surveyorId
            + "\nSurveyorName: "+this.apiResponse.surveyor.firstName +" "+this.apiResponse.surveyor.lastName
            + "\nOn Policy No: "+this.apiResponse.policy.policyNo
            );
          }, error => {
            alert("Failed to add claim: " + error.error.message);
          }
        );
      }, error => {
        alert("Failed to add claim: " + error.error.message);
        return;
      }
    );
    
    
  }
}
