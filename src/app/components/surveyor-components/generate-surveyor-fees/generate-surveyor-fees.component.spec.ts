import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateSurveyorFeesComponent } from './generate-surveyor-fees.component';

describe('GenerateSurveyorFeesComponent', () => {
  let component: GenerateSurveyorFeesComponent;
  let fixture: ComponentFixture<GenerateSurveyorFeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateSurveyorFeesComponent]
    });
    fixture = TestBed.createComponent(GenerateSurveyorFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
