import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../components/header/header.component';
import { TranslateService } from '@ngx-translate/core';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.page.html',
  styleUrls: ['./organizations.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderComponent,
    TableComponent,
  ],
})
export class OrganizationsPage implements OnInit {
  // title = this.translateService.instant('Organization');

  columns = ['name', 'id', 'date'];

  data = [
    {
      id: 1,
      name: 'Name1',
      email: 'user1@example.com',
    },
    {
      id: 2,
      name: 'Name2',
      email: 'user2@example.com',
    },
    {
      id: 3,
      name: 'Name3',
      email: 'user3@example.com',
    },
    {
      id: 4,
      name: 'Name4',
      email: 'user4@example.com',
    },
    {
      id: 5,
      name: 'Name5',
      email: 'user5@example.com',
    },
    {
      id: 6,
      name: 'Name6',
      email: 'user6@example.com',
    },
    {
      id: 7,
      name: 'Name7',
      email: 'user7@example.com',
    },
    {
      id: 8,
      name: 'Name8',
      email: 'user8@example.com',
    },
    {
      id: 9,
      name: 'Name9',
      email: 'user9@example.com',
    },
    {
      id: 10,
      name: 'Name10',
      email: 'user10@example.com',
    },
  ];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {}
}
