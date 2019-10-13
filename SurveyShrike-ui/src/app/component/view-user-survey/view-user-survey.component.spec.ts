import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserSurveyComponent } from './view-user-survey.component';

describe('ViewUserSurveyComponent', () => {
  let component: ViewUserSurveyComponent;
  let fixture: ComponentFixture<ViewUserSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
