import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenntComponentComponent } from './parennt-component.component';

describe('ParenntComponentComponent', () => {
  let component: ParenntComponentComponent;
  let fixture: ComponentFixture<ParenntComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParenntComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenntComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
