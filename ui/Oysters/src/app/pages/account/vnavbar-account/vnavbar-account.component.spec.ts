import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VnavbarAccountComponent } from './vnavbar-account.component';

describe('VnavbarAccountComponent', () => {
  let component: VnavbarAccountComponent;
  let fixture: ComponentFixture<VnavbarAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VnavbarAccountComponent]
    });
    fixture = TestBed.createComponent(VnavbarAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
