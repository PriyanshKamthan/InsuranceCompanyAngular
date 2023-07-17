import { Component } from '@angular/core';
import { ClaimDetailsService } from 'src/app/service/claim-details.service';

@Component({
  selector: 'app-update-policy',
  templateUrl: './update-policy.component.html',
  styleUrls: ['./update-policy.component.css']
})
export class UpdatePolicyComponent {
  constructor(private claimService: ClaimDetailsService) { }

  policyNoInput = "";
  apiResponse : any;

  policy = {
    policyNo : "",
    insuredFirstName : "",
    insuredLastName : "",
    dateOfInsurance : "",
    emailId : "",
    vehicleNo : "",
    status : ""
  }

  onSearchPolicy() {
    if(this.policyNoInput== "") {
      alert("Please mention policy number");
      return;
    }
    this.claimService.getPolicyByPolicyNo(this.policyNoInput).subscribe(
      (response) => {
        this.apiResponse = response;
        this.policy.insuredFirstName = this.apiResponse.insuredFirstName;
        this.policy.insuredLastName = this.apiResponse.insuredLastName;
        this.policy.dateOfInsurance = this.apiResponse.dateOfInsurance;
        this.policy.emailId = this.apiResponse.emailId;
        this.policy.vehicleNo = this.apiResponse.vehicleNo;
        if(this.apiResponse.status) {
          this.policy.status = "open";
        } else {
          this.policy.status = "closed";
        }
      }, (error) => {
        alert("Failed to search policy: " + error.error.message);
      }
    );
  }

  onUpdatePolicy() {
    this.policy.policyNo = this.policyNoInput;
    if(this.policy.status == "open") {
      this.policy.status = "true";
    } else {
      this.policy.status = "false";
    }
    this.claimService.updatePolicy(this.policyNoInput, this.policy).subscribe(
      (response) => {
        this.apiResponse = response;
        alert("Policy updated: "+this.apiResponse.policyNo);
      }, (error) => {
        alert("Updation unsuccessful: "+error.error.message);
      }
    );
  }
}
