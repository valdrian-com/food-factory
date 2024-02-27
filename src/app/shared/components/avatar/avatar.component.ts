import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from '../../interfaces/User';
import { PopoverController } from '@ionic/angular';
import { ProfilePopoverComponent } from '../profile-popover/profile-popover.component';

@Component({
  selector: 'app-avatar',
  template: `
    <div
      (click)="presentPopover($event)"
      alt="User dropdown"
      class="relative flex items-center justify-center w-16 h-16 rounded-full overflow-hidden cursor-pointer"
      style="background: --ion-background-color; color: --ion-text-color; border: 1px solid --ion-border-color;"
    >
      <!-- Conditional Rendering -->
      <!-- If there's an image URL, use an img tag -->
      <img
        [src]="authService.user()?.imgUrl"
        *ngIf="authService.user()?.imgUrl"
        alt="User Avatar"
        class="object-cover w-full h-full"
      />
      <!-- Else, display initials -->
      <span
        *ngIf="authService.user() && !authService.user()?.imgUrl"
        class="text-xl font-medium"
      >
        {{ getInitials() }}
      </span>
      <svg
        class="w-2.5 h-2.5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </div>
  `,
  styles: ``,
  standalone: true,
  imports: [CommonModule],
})
export class AvatarComponent implements OnInit {
  user: User | null = null;
  constructor(
    public authService: AuthService,
    public popoverController: PopoverController
  ) {}

  ngOnInit() {
    this.user = this.authService.user();
  }

  getInitials() {
    if (this.user) {
      return this.user.firstName[0] + this.user.lastName[0];
    }
    return '?';
  }

  async presentPopover(event: any) {
    const popover = await this.popoverController.create({
      component: ProfilePopoverComponent,
      event: event,
      translucent: true,
    });
    return await popover.present();
  }
}
