import { Component } from '@angular/core';
import { ClaimDetailsService } from 'src/app/service/claim-details.service';

@Component({
  selector: 'app-add-surveyor',
  templateUrl: './add-surveyor.component.html',
  styleUrls: ['./add-surveyor.component.css']
})
export class AddSurveyorComponent {
  surveyor= {
    firstName:"",
    lastName:"",
    estimateLimit:""
  }

  apiResponse : any;

  constructor(private claimService: ClaimDetailsService) { }

  onAddSurveyor() {
    if(this.surveyor.firstName=="" || this.surveyor.lastName=="" || this.surveyor.estimateLimit=="") {
      alert("Feilds can not be empty");
      return;
    }
    this.claimService.addSurveyor(this.surveyor).subscribe(
      (response) => {
        this.apiResponse = response;
        alert("New Surveyor Added: " +
        "\nSurveyor ID: "+this.apiResponse.surveyorId +
        "\nSurveyor Name: "+this.apiResponse.firstName + " " + this.apiResponse.lastName +
        "\nEstimate Limit: "+this.apiResponse.estimateLimit
        );
      }, (error)=> {
        alert(error.error.message);
      }
    );
  }
}
