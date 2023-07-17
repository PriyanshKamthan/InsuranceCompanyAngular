import { Component } from '@angular/core';
import { ClaimDetailsService } from 'src/app/service/claim-details.service';

@Component({
  selector: 'app-generate-surveyor-fees',
  templateUrl: './generate-surveyor-fees.component.html',
  styleUrls: ['./generate-surveyor-fees.component.css']
})
export class GenerateSurveyorFeesComponent {

  constructor(private claimService:ClaimDetailsService){}
  
  claimId = "";
  apiResponse : any;
  onReleaseSurveyorFees() {
    this.claimService.getSurveyorFees(this.claimId).subscribe(
      (response)=>{
        this.apiResponse = response;
        alert("Surveyor payment is "+this.apiResponse.message);
      },(error)=>{
        alert("Payment generation failed: "+error.error.message);
      }
    );
  }
}
