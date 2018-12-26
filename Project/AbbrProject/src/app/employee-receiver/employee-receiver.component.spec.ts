import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReceiverComponent } from './employee-receiver.component';

describe('EmployeeReceiverComponent', () => {
  let component: EmployeeReceiverComponent;
  let fixture: ComponentFixture<EmployeeReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
