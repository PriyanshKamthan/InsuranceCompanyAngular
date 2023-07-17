import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSurveyorsComponent } from './show-surveyors.component';

describe('ShowSurveyorsComponent', () => {
  let component: ShowSurveyorsComponent;
  let fixture: ComponentFixture<ShowSurveyorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSurveyorsComponent]
    });
    fixture = TestBed.createComponent(ShowSurveyorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
