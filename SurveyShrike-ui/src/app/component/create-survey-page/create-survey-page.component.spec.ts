import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSurveyPageComponent } from './create-survey-page.component';

describe('CreateSurveyPageComponent', () => {
  let component: CreateSurveyPageComponent;
  let fixture: ComponentFixture<CreateSurveyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSurveyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSurveyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
