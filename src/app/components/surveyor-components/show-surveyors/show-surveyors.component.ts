import { Component } from '@angular/core';
import { ClaimDetailsService } from 'src/app/service/claim-details.service';

@Component({
  selector: 'app-show-surveyors',
  templateUrl: './show-surveyors.component.html',
  styleUrls: ['./show-surveyors.component.css']
})
export class ShowSurveyorsComponent {
  allSurveyors: any;
  displayedColumns: string[] = ['surveyorId', 'firstName','lastName', 'estimateLimit']
  constructor(private claimService: ClaimDetailsService) {
    claimService.getAllSurveyors().subscribe(
      (data) => {
        this.allSurveyors = data;
      }, (error) => {
        console.log(error.error.message);
      }
    );
  }
}
