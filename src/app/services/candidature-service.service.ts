import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidature } from '../models/candidature';
import { Etape } from 'src/app/models/etape';

@Injectable({
  providedIn: 'root'
})
export class CandidatureServiceService {

  urlBack: string = environment.urlBack + '/candidature';

  constructor(
    private http: HttpClient
  ) { }

  findById(id: number): Observable<Candidature> {
    return this.http.get<Candidature>(this.urlBack + '/' +id);
  }

  saveCandidature(candidature: Candidature): Observable<Candidature> {
    return this.http.post<Candidature>(this.urlBack, candidature);
  }

  editCandidature(candidature: Candidature): Observable<Candidature> {
    return this.http.put<Candidature>(this.urlBack, candidature);
  }

  findAll(): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.urlBack);
  }

  filter(ch: string): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.urlBack + '/filter/' + ch);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete<any>(this.urlBack + '/' + id);
  }

  addEtape(id: number, etape: Etape): Observable<any> {
    return this.http.post<any>(this.urlBack + '/' + id + '/etape', etape);
  }
}
