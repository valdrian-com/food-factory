import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  RouterLink,
  RouterLinkActive,
  RouterLinkWithHref,
} from '@angular/router';
import { IonicModule, PopoverController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from 'src/app/auth/auth.service';
import { addIcons } from 'ionicons';
import { personCircle, personOutline } from 'ionicons/icons';
import { ProfilePopoverComponent } from '../profile-popover/profile-popover.component';
import { AppStateService } from 'src/app/shared/services/app-state.service';
import { OrganizationsService } from '../../pages/organizations/organizations.service';
import { Organization } from 'src/app/shared/interfaces/Organization';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    TranslateModule,
    RouterLinkWithHref,
  ],
})
export class HeaderComponent implements OnInit {
  @Input() title!: string;
  @Input() backUrl!: string;

  organizationId!: string | undefined;

  constructor(
    public authService: AuthService,
    public organizationService: OrganizationsService,
    public popoverController: PopoverController,
    public appStateService: AppStateService
  ) {
    addIcons({
      personOutline,
      personCircle,
    });
  }

  ngOnInit() {
    this.organizationId = this.appStateService.organization()?.id;
  }

  async presentPopover(event: any) {
    const popover = await this.popoverController.create({
      component: ProfilePopoverComponent,
      event: event,
      translucent: true,
    });
    return await popover.present();
  }

  onOrganizationChange($event: any) {
    console.log('onOrganizationChange', $event);
    this.organizationId = $event.detail.value.id;
    this.appStateService.setOrganization($event.detail.value);
  }
}
