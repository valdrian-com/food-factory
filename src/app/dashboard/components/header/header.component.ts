import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  RouterLink,
  RouterLinkActive,
  RouterLinkWithHref,
} from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from 'src/app/auth/auth.service';
import { addIcons } from 'ionicons';
import { personCircle, personOutline } from 'ionicons/icons';

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
  constructor(public authService: AuthService) {
    addIcons({
      personOutline,
      personCircle,
    });
  }

  ngOnInit() {}
}
