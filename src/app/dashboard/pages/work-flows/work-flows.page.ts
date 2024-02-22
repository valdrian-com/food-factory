import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-work-flows',
  templateUrl: './work-flows.page.html',
  styleUrls: ['./work-flows.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class WorkFlowsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
