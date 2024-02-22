import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  template: `
    <ion-content>
      <router-outlet></router-outlet>
    </ion-content>
  `,
  styles: ``,
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    TranslateModule,
  ],
})
export class AuthPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
