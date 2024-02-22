import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-work-flow',
  templateUrl: './work-flow.page.html',
  styleUrls: ['./work-flow.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class WorkFlowPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
