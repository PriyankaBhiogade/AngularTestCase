import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetComponent } from './reset.component';
import { MatCardModule, MatSnackBarModule,MatInputModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('ResetComponent', () => {
  let component: ResetComponent;
  let fixture: ComponentFixture<ResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetComponent ],
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
    fixture = TestBed.createComponent(ResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('For valid and invalid Password field ', () => {

    component.password.setValue('');
    component.password.setValue('priyanka@123');
    component.password.setValue('1224..');

    expect(component.password.invalid).toBeFalsy();
    expect(component.password.valid).toBeTruthy();
  })

  it('For valid and invalid ConfirmPassword field ', () => {

    component.confirmPassword.setValue('');
    component.confirmPassword.setValue('priyanka@123');
    component.confirmPassword.setValue('1224..');

    expect(component.confirmPassword.invalid).toBeFalsy();
    expect(component.confirmPassword.valid).toBeTruthy();
  })
});
