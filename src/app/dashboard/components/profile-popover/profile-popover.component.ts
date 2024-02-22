import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule, PopoverController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile-popover',
  template: ` <ion-list>
    <ion-item
      button
      (click)="popoverController.dismiss()"
      routerLink="/profiles/{{ authService.user()?.id }} "
      >{{ 'Profile' | translate }}</ion-item
    >
    <ion-item
      button
      (click)="popoverController.dismiss()"
      routerLink="/notifications/{{ authService.user()?.id }}"
      >{{ 'Notifications' | translate }}</ion-item
    >
    <ion-item button (click)="logout()">Logout</ion-item>
  </ion-list>`,
  styles: ``,
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    TranslateModule,
  ],
})
export class ProfilePopoverComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public popoverController: PopoverController
  ) {}

  ngOnInit() {}
  logout() {
    this.authService.logout();
    this.popoverController.dismiss();
  }
}
