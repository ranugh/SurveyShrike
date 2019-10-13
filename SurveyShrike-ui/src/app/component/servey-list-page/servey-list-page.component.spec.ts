import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyListPageComponent } from './servey-list-page.component';

describe('ServeyListPageComponent', () => {
  let component: ServeyListPageComponent;
  let fixture: ComponentFixture<ServeyListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServeyListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
