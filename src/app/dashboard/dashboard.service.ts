import { Injectable, WritableSignal, signal } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  url = environment.apiUrl;

  organization: WritableSignal<Organization | null> = signal(
    JSON.parse(localStorage.getItem('organization') as string)
  );

  constructor() {}
}
