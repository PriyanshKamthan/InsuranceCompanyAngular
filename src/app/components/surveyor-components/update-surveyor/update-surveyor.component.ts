import { Component } from '@angular/core';
import { ClaimDetailsService } from 'src/app/service/claim-details.service';

@Component({
  selector: 'app-update-surveyor',
  templateUrl: './update-surveyor.component.html',
  styleUrls: ['./update-surveyor.component.css']
})
export class UpdateSurveyorComponent {

  constructor(private claimService: ClaimDetailsService) {}

  surveyorIdInput = "";
  apiResponse : any;

  surveyor = {
    surveyorId: "",
    firstName: "",
    lastName: "",
    estimateLimit: ""
  }

  onSearchSurveyor() {
    if(this.surveyorIdInput=="") {
      alert("Please mention the surveyor Id");
      return;
    }
    this.claimService.getSurveyorBySurveyorId(this.surveyorIdInput).subscribe(
      (response)=>{
        this.apiResponse = response;
        this.surveyor.firstName =  this.apiResponse.firstName;
        this.surveyor.lastName = this.apiResponse.lastName;
        this.surveyor.estimateLimit = this.apiResponse.estimateLimit;
      },(error)=>{
        alert("Failed to search surveyor: "+error.error.message);
      }
    );
  }

  onUpdateSurveyor() {
    this.surveyor.surveyorId = this.surveyorIdInput;
    this.claimService.updateSurveyor(this.surveyorIdInput, this.surveyor).subscribe(
      (response)=> {
        this.apiResponse = response;
        alert("Surveyor updated: "+this.apiResponse.surveyorId);
      }, (error)=> {
        alert("Failed to update surveyor: "+error.error.message);
      }
    );
  }
}
