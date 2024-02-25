import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Client, ClientsInput } from 'src/app/shared/interfaces/Organization';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  url = environment.apiUrl;

  clients: WritableSignal<Client[] | []> = signal([]);

  constructor(private httpClient: HttpClient) {}

  getClients(): void {
    this.httpClient
      .get<Client[]>(`${this.url}/clients`)
      .pipe(
        tap((clients) => {
          this.clients.set(clients);
        }),

        catchError((e) => {
          console.log(e.error);
          return e.message;
        })
      )
      .subscribe();
  }

  getClient(id: string): Observable<Client> {
    return this.httpClient.get<Client>(`${this.url}/clients/${id}`);
  }

  createClient(form: ClientsInput): Observable<Client> {
    return this.httpClient.post<Client>(`${this.url}/clients`, form);
  }

  deleteClient(id: string): Observable<Client> {
    return this.httpClient.delete<Client>(`${this.url}/clients/${id}`);
  }

  inviteUserToClient(email: string): void {
    this.httpClient.post(`${this.url}/clients/invite`, { email }).subscribe();
  }
}
