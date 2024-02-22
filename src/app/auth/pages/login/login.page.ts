import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLinkWithHref } from '@angular/router';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterLinkWithHref,
    CommonModule,
    FormsModule,
    TranslateModule,
    LoginFormComponent,
    LogoComponent,
  ],
})
export class LoginPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
