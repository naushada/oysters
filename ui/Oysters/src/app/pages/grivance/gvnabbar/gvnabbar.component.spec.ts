import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GvnabbarComponent } from './gvnabbar.component';

describe('GvnabbarComponent', () => {
  let component: GvnabbarComponent;
  let fixture: ComponentFixture<GvnabbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GvnabbarComponent]
    });
    fixture = TestBed.createComponent(GvnabbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
