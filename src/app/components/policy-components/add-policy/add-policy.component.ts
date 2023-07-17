import { Component } from '@angular/core';
import { ClaimDetailsService } from 'src/app/service/claim-details.service';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent {
  policy = {
    policyNo: "",
    insuredFirstName: "",
    insuredLastName: "",
    dateOfInsurance: "",
    emailId: "",
    vehicleNo: "",
    status: "true"
  }

  apiResponse: any;

  constructor(private claimService: ClaimDetailsService) { }

  onAddPolicy() {
    if (this.policy.insuredFirstName == "" || this.policy.insuredLastName == "" || this.policy.dateOfInsurance == "" || this.policy.emailId == "" || this.policy.vehicleNo == "") {
      alert("Feilds can not be empty");
      return;
    }

    this.claimService.addPolicy(this.policy).subscribe(
      (response) => {
        this.apiResponse = response;
        alert("New policy is generated:" +
          "\nPolicyNo: " + this.apiResponse.policyNo +
          "\nInsured Name: " + this.apiResponse.insuredFirstName + " " + this.apiResponse.insuredLastName +
          "\nDate of insurance: " + this.apiResponse.dateOfInsurance +
          "\nEmail Id: " + this.apiResponse.emailId +
          "\nVehicle No: " + this.apiResponse.vehicleNo);
      }, (error) => {
        alert(error.error.message);
      }
    );
  }
}
