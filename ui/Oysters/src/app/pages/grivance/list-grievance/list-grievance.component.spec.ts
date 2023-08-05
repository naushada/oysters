import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGrievanceComponent } from './list-grievance.component';

describe('ListGrievanceComponent', () => {
  let component: ListGrievanceComponent;
  let fixture: ComponentFixture<ListGrievanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListGrievanceComponent]
    });
    fixture = TestBed.createComponent(ListGrievanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
