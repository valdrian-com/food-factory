import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  RouterLink,
  RouterLinkActive,
  RouterLinkWithHref,
} from '@angular/router';
import { addIcons } from 'ionicons';
import { DomController, IonicModule } from '@ionic/angular';
import {
  businessOutline,
  businessSharp,
  barChartOutline,
  barChartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  heartOutline,
  heartSharp,
  archiveOutline,
  archiveSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  bookmarkOutline,
  bookmarkSharp,
  pencilOutline,
} from 'ionicons/icons';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from 'src/app/auth/auth.service';
import { OrganizationsService } from '../../pages/organizations/organizations.service';
import { AppStateService } from 'src/app/shared/services/app-state.service';
import { AvatarComponent } from 'src/app/shared/components/avatar/avatar.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    LogoComponent,
    TranslateModule,
    RouterLinkWithHref,
    AvatarComponent,
  ],
})
export class MenuComponent {
  organizationId!: string | undefined;

  public appPages = [
    { title: 'Dashboard', url: '/info', icon: 'bar-chart' },
    { title: 'Organizations', url: '/organizations', icon: 'business' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  constructor(
    public authService: AuthService,
    public organizationService: OrganizationsService,
    public appStateService: AppStateService
  ) {
    addIcons({
      businessOutline,
      businessSharp,
      barChartOutline,
      barChartSharp,
      mailOutline,
      mailSharp,
      paperPlaneOutline,
      paperPlaneSharp,
      heartOutline,
      heartSharp,
      archiveOutline,
      archiveSharp,
      trashOutline,
      trashSharp,
      warningOutline,
      warningSharp,
      bookmarkOutline,
      bookmarkSharp,
      pencilOutline,
    });
  }

  onOrganizationChange($event: any) {
    console.log('onOrganizationChange', $event);
    this.organizationId = $event.detail.value.id;
    this.appStateService.setOrganization($event.detail.value);
  }
}
