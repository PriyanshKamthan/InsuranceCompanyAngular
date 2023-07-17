import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPoliciesComponent } from './show-policies.component';

describe('ShowPoliciesComponent', () => {
  let component: ShowPoliciesComponent;
  let fixture: ComponentFixture<ShowPoliciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPoliciesComponent]
    });
    fixture = TestBed.createComponent(ShowPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
