import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveClaimComponent } from './approve-claim.component';

describe('ApproveClaimComponent', () => {
  let component: ApproveClaimComponent;
  let fixture: ComponentFixture<ApproveClaimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproveClaimComponent]
    });
    fixture = TestBed.createComponent(ApproveClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
