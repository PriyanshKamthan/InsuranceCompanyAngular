import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSurveyorComponent } from './update-surveyor.component';

describe('UpdateSurveyorComponent', () => {
  let component: UpdateSurveyorComponent;
  let fixture: ComponentFixture<UpdateSurveyorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSurveyorComponent]
    });
    fixture = TestBed.createComponent(UpdateSurveyorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
