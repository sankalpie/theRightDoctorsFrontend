import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private apiUrl = 'http://localhost:3000/person'; // Express API base URL

  constructor(private http: HttpClient) {}

  // Get all people
  getPeople(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get a single person by ID
  getPersonById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Create a person
  createPerson(person: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, person);
  }

  // Update a person
  updatePerson(id: string, person: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, person);
  }

  // Delete a person
  deletePerson(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
