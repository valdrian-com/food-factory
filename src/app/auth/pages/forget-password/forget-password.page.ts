import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLinkWithHref } from '@angular/router';
import { AuthService } from '../../auth.service';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    RouterLinkWithHref,
    LogoComponent,
  ],
})
export class ForgetPasswordPage implements OnInit {
  email!: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  send() {
    this.authService.resetPassword(this.email);
  }
}
