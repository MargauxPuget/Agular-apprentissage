import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private token = 'MyFaketoken';

  getToken(): string {
    return this.token;
  }
}
