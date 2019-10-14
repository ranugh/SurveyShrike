import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSurveyPageComponent } from './user-survey-page.component';

describe('UserSurveyPageComponent', () => {
  let component: UserSurveyPageComponent;
  let fixture: ComponentFixture<UserSurveyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSurveyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSurveyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
