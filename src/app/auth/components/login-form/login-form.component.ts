import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLinkWithHref } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginForm } from 'src/app/shared/interfaces/User';
import { AuthService } from '../../auth.service';
import { addIcons } from 'ionicons';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterLinkWithHref,
    CommonModule,
    FormsModule,
    TranslateModule,
  ],
})
export class LoginFormComponent implements OnInit {
  loginData: LoginForm = {
    email: '',
    password: '',
  };

  showPassword = false;
  inputType: string = 'password';

  constructor(private authService: AuthService) {
    addIcons({ eyeOutline, eyeOffOutline });
  }

  ngOnInit() {}

  login() {
    this.authService.login(this.loginData);
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
    this.inputType = this.showPassword ? 'text' : 'password';
  }
}
