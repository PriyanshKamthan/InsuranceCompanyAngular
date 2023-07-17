import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClaimDetailsService {
  
  private baseurl: string = "http://localhost:8080/api"
  constructor(private http: HttpClient) { }
  addClaim(claimDetails: any) {
    return this.http.post(`${this.baseurl}/claims/new`, claimDetails);
  }

  getAllClaims() {
    return this.http.get(`${this.baseurl}/claims/all`)
  }

  getOpenClaims() {
    return this.http.get(`${this.baseurl}/claims`)
  }

  getSurveyor(estimatedLoss: string) {
    return this.http.get(`${this.baseurl}/surveyors/${estimatedLoss}`);
  }

  getClaimByClaimId(claimId: string) {
    return this.http.get(`${this.baseurl}/claims/${claimId}`)
  }

  updateClaim(claimId: string, claimDetails: any) {
    return this.http.put(`${this.baseurl}/claims/${claimId}/update`,claimDetails)
  }

  approveClaim(claimId: string, approvedAmt:string) {
    return this.http.put(`${this.baseurl}/claims/${claimId}/${approvedAmt}/update`,null);
  }

  getSurveyorFees(claimId: string) {
    return this.http.get(`${this.baseurl}/surveyorfees/${claimId}`)
  }

  getAllSurveyors() {
    return this.http.get(`${this.baseurl}/surveyor/all`)
  }

  addSurveyor(surveyor: any) {
    return this.http.post(`${this.baseurl}/surveyor/new`,surveyor)
  }

  getSurveyorBySurveyorId(surveyorId: string) {
    return this.http.get(`${this.baseurl}/surveyor/${surveyorId}`)
  }

  updateSurveyor(surveyorId:string, surveyor:any) {
    return this.http.put(`${this.baseurl}/surveyor/${surveyorId}/update`,surveyor);
  }

  getAllPolicies() {
    return this.http.get(`${this.baseurl}/policy/all`)
  }

  addPolicy(policy: any) {
    return this.http.post(`${this.baseurl}/policy/new`,policy)
  }

  getPolicyByPolicyNo(policyNo: string) {
    return this.http.get(`${this.baseurl}/policy/${policyNo}`)
  }

  updatePolicy(policyNo:string , policy:any) {
    return this.http.put(`${this.baseurl}/policy/${policyNo}/update`,policy);
  }
}
