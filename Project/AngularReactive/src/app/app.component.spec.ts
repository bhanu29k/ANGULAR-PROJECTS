import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
describe('AppComponent', () => {
  let comp:AppComponent;
  let fixture:ComponentFixture<AppComponent>;

  beforeEach(()=>{

    TestBed.configureTestingModule({
      declarations:[AppComponent],  
      imports:[FormsModule,ReactiveFormsModule],
      providers:[AppComponent,FormBuilder]
    });
    fixture=TestBed.createComponent(AppComponent);
    comp=fixture.componentInstance;
  });

  it('is app-component defined',()=>{

    expect(comp).toBeDefined();
  });

  //it('form invalid when empty', () => {
    //expect(comp.registrationForm.valid).toBeFalsy();
  //});

  it('Is username valid',()=>{
  let username=comp.registrationForm.controls['userName'];
  username.setValue("Bhanu");
  expect(username.valid).toBeTruthy();
  });

  it('Is Pincode valid',()=>{
      
      let pinCode=comp.registrationForm.controls['address'];
      pinCode.setValue({pincode:567656,city:"deeg",street:"Gharbara"});
      expect(pinCode.valid).toBeTruthy();
      });
  
      
});
