import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSenderComponent } from './employee-sender.component';

describe('EmployeeSenderComponent', () => {
  let component: EmployeeSenderComponent;
  let fixture: ComponentFixture<EmployeeSenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
