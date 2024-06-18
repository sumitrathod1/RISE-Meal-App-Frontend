import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResetPassword } from '../models/reset-password.model';

@Injectable({
  providedIn: 'root',
})
export class RestPasswordService {private baseUrl: string = 'https://localhost:7205/api/User';
constructor(private http: HttpClient) {}

sendRestPasswordLink(email: string) {
  return this.http.post<any>(`${this.baseUrl}/send-reset-email/${email}`, {});
}

resetPassword(resetPasswordObj: ResetPassword) {
  return this.http.post<any>(
    `${this.baseUrl}/reset-password`,
    resetPasswordObj
  );
}
}
