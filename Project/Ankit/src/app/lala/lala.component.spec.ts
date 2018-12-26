import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LalaComponent } from './lala.component';

describe('LalaComponent', () => {
  let component: LalaComponent;
  let fixture: ComponentFixture<LalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
