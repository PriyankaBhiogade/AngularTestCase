import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatSnackBarModule,MatInputModule, MatIconModule } from '@angular/material';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[
        MatIconModule,
        MatCardModule,
        FormsModule,RouterModule,
        MatInputModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatSnackBarModule,
        HttpClientModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
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

  it('For valid and invalid Password field ', () => {

    component.password.setValue('');
    component.password.setValue('priyanka@123');
    component.password.setValue('1224..');

    expect(component.password.invalid).toBeFalsy();
    expect(component.password.valid).toBeTruthy();
  })
});
