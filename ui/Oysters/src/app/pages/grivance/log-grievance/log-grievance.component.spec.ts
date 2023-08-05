import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogGrievanceComponent } from './log-grievance.component';

describe('LogGrievanceComponent', () => {
  let component: LogGrievanceComponent;
  let fixture: ComponentFixture<LogGrievanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogGrievanceComponent]
    });
    fixture = TestBed.createComponent(LogGrievanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
