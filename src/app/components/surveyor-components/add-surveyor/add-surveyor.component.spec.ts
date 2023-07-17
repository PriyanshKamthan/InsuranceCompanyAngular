import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSurveyorComponent } from './add-surveyor.component';

describe('AddSurveyorComponent', () => {
  let component: AddSurveyorComponent;
  let fixture: ComponentFixture<AddSurveyorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSurveyorComponent]
    });
    fixture = TestBed.createComponent(AddSurveyorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
