import { Injectable, OnInit, WritableSignal, signal } from '@angular/core';
import { Organization } from '../interfaces/Organization';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppStateService implements OnInit {
  darkMode = signal(window.matchMedia('(prefers-color-scheme: dark)').matches);

  organization: WritableSignal<Organization | null> = signal(
    JSON.parse(localStorage.getItem('organization') as string)
  );

  constructor(private router: Router) {
    console.log('constructor', this.organization());
    if (!this.organization()) {
      this.router.navigate(['/organizations']);
    }
  }
  ngOnInit(): void {
    console.log('on init', this.organization());
    if (!this.organization()) {
      this.router.navigate(['/organizations']);
    }
  }
  setOrganization(organization: Organization) {
    this.organization.set(organization);
    localStorage.setItem('organization', JSON.stringify(organization));
  }
}
