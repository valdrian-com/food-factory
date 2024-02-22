import { Injectable, WritableSignal, signal } from '@angular/core';
import { catchError, map, switchMap, tap } from 'rxjs';
import { LoginForm, RegisterForm, User } from '../shared/interfaces/User';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.apiUrl;

  accessToken: WritableSignal<string> = signal(
    localStorage.getItem('accessToken') || ''
  );
  refreshToken: WritableSignal<string> = signal(
    localStorage.getItem('refreshToken') || ''
  );
  user: WritableSignal<User | null> = signal(
    JSON.parse(localStorage.getItem('user') as string)
  );

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(form: LoginForm): void {
    this.httpClient
      .post<{ accessToken: string; refreshToken: string; user: User }>(
        `${this.url}/login`,
        form
      )
      .pipe(
        tap(({ accessToken, refreshToken, user }) => {
          this.accessToken.set(accessToken);
          this.refreshToken.set(refreshToken);
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          localStorage.setItem('user', JSON.stringify(user));
          this.user.set(user);
          this.router.navigate(['/'], { replaceUrl: true });
        }),
        // error on first or second call
        catchError((e) => {
          console.log(e.error);
          // TODO - the interceptor cath error
          // console.error('An error occurred: ', e.details);
          // if you want to handle this error and return some empty data use:
          // return of({});
          // otherwise:
          // throw new Error('Error: ' + e.message);
          return e.message;
        })
      )
      .subscribe();
  }

  logout(): void {
    // TODO - check if is necessary a backend logout
    this.httpClient
      .post<string>(`${this.url}/logout`, this.refreshToken)
      .subscribe();
    this.user.set(null);
    this.accessToken.set('');
    this.refreshToken.set('');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  register(form: RegisterForm): void {
    this.httpClient
      .post<{ accessToken: string; refreshToken: string; user: User }>(
        `${this.url}/register`,
        form
      )
      .pipe(
        tap(({ accessToken, refreshToken, user }) => {
          this.accessToken.set(accessToken);
          this.refreshToken.set(refreshToken);
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          localStorage.setItem('user', JSON.stringify(user));
          this.user.set(user);
          this.router.navigate(['/'], { replaceUrl: true });
        }),
        catchError((e) => {
          // TODO - the interceptor cath error
          console.error(e);
          // if you want to handle this error and return some empty data use:
          // return of({});
          // otherwise:
          throw new Error('Error: ' + e.message);
        })
      )
      .subscribe();
  }

  refresh(): void {
    this.httpClient
      .post<{ accessToken: string; refreshToken: string }>(
        `${this.url}/refresh-token`,
        {
          refresh: this.refreshToken,
        }
      )
      .pipe(
        tap((data) => {
          this.accessToken.set(data.accessToken);
          this.refreshToken.set(data.refreshToken);
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);
        }),
        catchError((e) => {
          console.error('An error occurred: ', e);
          // if you want to handle this error and return some empty data use:
          // return of({});
          // otherwise:
          throw new Error('Error: ' + e.message);
        })
      )
      .subscribe();
  }

  // TODO - redirect after data save
  resetPassword(email: string) {
    this.httpClient
      .post<{ accessToken: string; refreshToken: string; user: User }>(
        `${this.url}/send-reset-password`,
        {
          email,
        }
      )
      .pipe(
        tap(({ accessToken, refreshToken, user }) => {
          this.accessToken.set(accessToken);
          this.refreshToken.set(refreshToken);
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          localStorage.setItem('user', JSON.stringify(user));
          this.user.set(user);
          this.router.navigate(['/'], { replaceUrl: true });
        }),
        // error on first or second call
        catchError((e) => {
          console.log(e.error);
          return e.message;
        })
      )
      .subscribe();
  }

  savePassword(id: string, token: string, newPassword: string) {
    this.httpClient
      .post(`${this.url}/reset-password`, {
        userId: id,
        token,
        newPassword,
      })
      .subscribe();
  }
}
