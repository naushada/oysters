import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePtaComponent } from './create-pta.component';

describe('CreatePtaComponent', () => {
  let component: CreatePtaComponent;
  let fixture: ComponentFixture<CreatePtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePtaComponent]
    });
    fixture = TestBed.createComponent(CreatePtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
