import { Component } from '@angular/core';
import { ClaimDetailsService } from 'src/app/service/claim-details.service';

@Component({
  selector: 'app-show-policies',
  templateUrl: './show-policies.component.html',
  styleUrls: ['./show-policies.component.css']
})
export class ShowPoliciesComponent {
  allPolicies: any;
  displayedColumns: string[] = ['policyNo', 'insuredFirstName','insuredLastName', 'dateOfInsurance','emailId','vehicleNo','status']
  constructor(private claimService: ClaimDetailsService) {
    claimService.getAllPolicies().subscribe(
      (data) => {
        this.allPolicies = data;
      }, (error) => {
        console.log(error.error.message);
        
      }
    );
  }
}
