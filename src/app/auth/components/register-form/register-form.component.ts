import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLinkWithHref } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service';
import { RegisterForm } from 'src/app/shared/interfaces/User';
import { addIcons } from 'ionicons';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TranslateModule,
    RouterLinkWithHref,
  ],
})
export class RegisterFormComponent implements OnInit {
  registerData: RegisterForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  showPassword = false;
  inputType: string = 'password';

  constructor(private authService: AuthService) {
    addIcons({ eyeOutline, eyeOffOutline });
  }

  ngOnInit() {}

  register() {
    this.authService.register(this.registerData);
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
    this.inputType = this.showPassword ? 'text' : 'password';
  }
}
