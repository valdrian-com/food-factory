import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { addIcons } from 'ionicons';
import {
  add,
  addCircleOutline,
  addOutline,
  close,
  closeCircle,
  create,
  createOutline,
  pencil,
  search,
} from 'ionicons/icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, TranslateModule, FormsModule],
})
export class TableComponent implements OnInit {
  @Input() data: any;
  @Input() title!: any;

  selectedColumns!: string[];
  columns!: string[];
  search: any = [];

  constructor() {
    addIcons({
      add,
      close,
      pencil,
      search,
      closeCircle,
      createOutline,
      addCircleOutline,
    });
  }

  ngOnInit() {
    this.columns = this.extractKeysFromJson(this.data) as string[];

    this.selectedColumns = this.extractKeysFromJson(this.data).slice(0, 3);
  }

  extractKeysFromJson<T extends object>(jsonData: T[]): (keyof T)[] {
    // Check if jsonData is an array and not empty
    if (Array.isArray(jsonData) && jsonData.length > 0) {
      return Object.keys(jsonData[0]) as (keyof T)[];
    } else {
      return [];
    }
  }

  objectEntries(obj: object) {
    return Object.entries(obj);
  }

  searchData() {
    console.log(this.search);
  }

  clearInput(col: string) {
    this.search[col] = '';
  }

  deleteItem(item: object) {
    console.log(item);
  }
  editItem(item: object) {
    console.log(item);
  }

  createItem() {
    console.log('create');
  }
}
