import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-work-space',
  templateUrl: './work-space.page.html',
  styleUrls: ['./work-space.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class WorkSpacePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
