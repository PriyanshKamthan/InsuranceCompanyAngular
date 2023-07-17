import { Component } from '@angular/core';
import { ClaimDetailsService } from 'src/app/service/claim-details.service';

@Component({
  selector: 'app-update-claim',
  templateUrl: './update-claim.component.html',
  styleUrls: ['./update-claim.component.css']
})
export class UpdateClaimComponent {

  constructor(private claimService: ClaimDetailsService) { }

  claimIdInput = ""

  claimDetails = {
    claimId: "",
    policy: {
      policyNo: "",
      insuredFirstName: "",
      insuredLastName: "",
      dateOfInsurance: "",
      emailId: "",
      vehicleNo: "",
      status: ""
    },
    claimStatus: "",
    estimatedLoss: "",
    dateOfAccident: "",
    surveyor: {
      surveyorId: "",
      firstName: "",
      lastName: "",
      estimateLimit: ""
    }
  }

  claim: any;

  onUpdateClaim() {
    this.claimDetails.claimId = this.claimIdInput;

    if (this.claimDetails.claimStatus == "open") {
      this.claimDetails.claimStatus = "false";
    } else if (this.claimDetails.claimStatus == "closed") {
      this.claimDetails.claimStatus = "true";
    }
    this.claimService.updateClaim(this.claimIdInput, this.claimDetails).subscribe(
      (response) => {
        this.claim = response;
        alert("Claim Updated for ClaimId: " + this.claim.claimId);
      }, (error) => {
        alert("Updation unsuccessful: "+error.error.message);
      }
    );
  }

  onSearchClaim() {
    if(this.claimIdInput == "") {
      alert("Please mention claim ID");
      return;
    }
    this.claimService.getClaimByClaimId(this.claimIdInput).subscribe(
      (response) => {
        this.claim = response;
        this.claimDetails.policy.policyNo = this.claim.policy.policyNo;
        this.claimDetails.surveyor.surveyorId = this.claim.surveyor.surveyorId;
        this.claimDetails.claimStatus = this.claim.claimStatus;
        this.claimDetails.estimatedLoss = this.claim.estimatedLoss;
        this.claimDetails.dateOfAccident = this.claim.dateOfAccident;

        if (this.claimDetails.claimStatus) {
          this.claimDetails.claimStatus = "closed";
        } else {
          this.claimDetails.claimStatus = "open";
        }
      }, error => {
        alert("Failed to add claim: " + error.message);
      }
    )
  }
}
