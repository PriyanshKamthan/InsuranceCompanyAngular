import { Component } from '@angular/core';
import { ClaimDetailsService } from 'src/app/service/claim-details.service';

@Component({
  selector: 'app-approve-claim',
  templateUrl: './approve-claim.component.html',
  styleUrls: ['./approve-claim.component.css']
})
export class ApproveClaimComponent {
  claimIdInput = ""
  amtApproved = ""
  apiresponse : any;

  constructor(private claimService: ClaimDetailsService) { }

  onApproveClaim() { 
    if (this.claimIdInput == "" || this.amtApproved == "") {
      alert("Feilds can not be empty");
      return;
    }
    this.claimService.approveClaim(this.claimIdInput, this.amtApproved).subscribe(
      (response) => {
        alert("Approved claim for: "+this.claimIdInput);
      }, (error) => {
        alert("Approval failed: "+error.error.message);
      }
    );
  }
  
  onSearchClaim() {
    if (this.claimIdInput == "") {
      alert("Please enter claim Id");
      return;
    }
    this.claimService.getClaimByClaimId(this.claimIdInput).subscribe(
      (response) => {
        this.apiresponse = response;
        alert("Estimated Loss of "+this.claimIdInput+" is: "+this.apiresponse.estimatedLoss);
      }, (error) => {
        alert("Update unsuccessfull: "+error.error.message);
      }
    );
  }
}
