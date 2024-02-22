import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../../auth.service';
import { addIcons } from 'ionicons';
import { eyeOffOutline, eyeOutline } from 'ionicons/icons';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    LogoComponent,
  ],
})
export class NewPasswordPage implements OnInit {
  showPassword = false;
  inputType: string = 'password';
  password!: string;
  id!: string | null;
  token!: string | null;

  constructor(private authService: AuthService, private route: ActivatedRoute) {
    addIcons({ eyeOutline, eyeOffOutline });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.token = params['token'];

      console.log(this.id, this.token);
    });
  }

  save() {
    console.log(this.id, this.token, this.password);
    this.authService.savePassword(
      this.id as string,
      this.token as string,
      this.password
    );
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
    this.inputType = this.showPassword ? 'text' : 'password';
  }
}
