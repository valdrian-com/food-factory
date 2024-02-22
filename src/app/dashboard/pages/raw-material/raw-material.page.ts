import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.page.html',
  styleUrls: ['./raw-material.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RawMaterialPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
