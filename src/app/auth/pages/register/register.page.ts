import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLinkWithHref } from '@angular/router';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    RouterLinkWithHref,
    RegisterFormComponent,
    LogoComponent,
  ],
})
export class RegisterPage implements OnInit {
  registerData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  };

  showPassword = false;

  constructor() {}

  ngOnInit() {}

  register() {
    // Your registration logic here
  }
}
