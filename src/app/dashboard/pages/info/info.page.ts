import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../components/header/header.component';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent],
})
export class InfoPage implements OnInit {
  toastService: ToastService = inject(ToastService);

  setOpen(isOpen: boolean) {
    this.toastService.isToastOpen.set(isOpen);
    this.toastService.toastType.set('success');
  }

  constructor() {}

  ngOnInit() {}
}
