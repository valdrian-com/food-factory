import { Injectable, OnInit, WritableSignal, signal } from '@angular/core';
import { Client } from '../interfaces/Client';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppStateService implements OnInit {
  darkMode = signal(window.matchMedia('(prefers-color-scheme: dark)').matches);

  client: WritableSignal<Client | null> = signal(
    JSON.parse(localStorage.getItem('client') as string)
  );

  constructor(private router: Router) {
    console.log(this.client());
    if (!this.client()) {
      this.router.navigate(['/clients']);
    }
  }
  ngOnInit(): void {
    console.log(this.client());
    if (!this.client()) {
      this.router.navigate(['/clients']);
    }
  }
  setClient(client: Client) {
    this.client.set(client);
    localStorage.setItem('client', JSON.stringify(client));
  }
}
