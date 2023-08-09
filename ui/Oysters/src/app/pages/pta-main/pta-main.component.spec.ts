import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtaMainComponent } from './pta-main.component';

describe('PtaMainComponent', () => {
  let component: PtaMainComponent;
  let fixture: ComponentFixture<PtaMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PtaMainComponent]
    });
    fixture = TestBed.createComponent(PtaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
