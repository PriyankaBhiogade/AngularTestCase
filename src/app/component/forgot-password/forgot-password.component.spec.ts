import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatSnackBarModule,MatInputModule } from '@angular/material';
import { ForgotPasswordComponent } from './forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordComponent ],
      imports:[
         MatCardModule,
        FormsModule,RouterModule,
        MatInputModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatSnackBarModule,
        HttpClientModule,
        BrowserAnimationsModule
      ], 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('For valid and invalid Email field ', () => {

    component.email.setValue('');
    component.email.setValue('pbhiogade93@gmail.com');
    component.email.setValue('pb113@gmail.com');

    expect(component.email.invalid).toBeFalsy();
    expect(component.email.valid).toBeTruthy();
  })

  
});
