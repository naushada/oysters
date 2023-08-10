import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPtaComponent } from './list-pta.component';

describe('ListPtaComponent', () => {
  let component: ListPtaComponent;
  let fixture: ComponentFixture<ListPtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPtaComponent]
    });
    fixture = TestBed.createComponent(ListPtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
