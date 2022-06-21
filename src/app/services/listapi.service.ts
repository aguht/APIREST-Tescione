import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ListapiService {
  root_url='https://62ae42b1645d00a28a06711d.mockapi.io/api/v1/users/'

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<User[]>{
    return this.http.get<User[]>(this.root_url) 
  }
}
