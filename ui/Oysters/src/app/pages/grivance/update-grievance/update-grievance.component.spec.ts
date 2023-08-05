import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGrievanceComponent } from './update-grievance.component';

describe('UpdateGrievanceComponent', () => {
  let component: UpdateGrievanceComponent;
  let fixture: ComponentFixture<UpdateGrievanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateGrievanceComponent]
    });
    fixture = TestBed.createComponent(UpdateGrievanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
