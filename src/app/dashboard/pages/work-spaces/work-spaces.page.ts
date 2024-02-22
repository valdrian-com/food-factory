import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-work-spaces',
  templateUrl: './work-spaces.page.html',
  styleUrls: ['./work-spaces.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class WorkSpacesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
