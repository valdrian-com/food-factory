import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { tap, catchError, Observable } from 'rxjs';
import {
  Organization,
  OrganizationInput,
} from 'src/app/shared/interfaces/Organization';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrganizationsService {
  url = environment.apiUrl;

  organizations: WritableSignal<Organization[] | []> = signal([]);
  organization: WritableSignal<Organization | null> = signal(null);

  constructor(private httpClient: HttpClient) {}

  getOrganizations(): void {
    this.httpClient
      .get<Organization[]>(`${this.url}/clients`)
      .pipe(
        tap((organizations) => {
          this.organizations.set(organizations);
        }),

        catchError((e) => {
          console.log(e.error);
          return e.message;
        })
      )
      .subscribe();
  }

  getOrganization(id: string): Observable<Organization> {
    return this.httpClient.get<Organization>(`${this.url}/clients/${id}`);
  }

  createOrganization(form: OrganizationInput): Observable<Organization> {
    return this.httpClient.post<Organization>(`${this.url}/clients`, form);
  }

  deleteOrganization(id: string): Observable<Organization> {
    return this.httpClient.delete<Organization>(`${this.url}/clients/${id}`);
  }

  inviteUserToOrganization(email: string): void {
    this.httpClient.post(`${this.url}/clients/invite`, { email }).subscribe();
  }
}
