import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Etape } from '../models/etape';

@Injectable({
  providedIn: 'root'
})
export class EtapeService {

  urlBack: string = environment.urlBack + '/etape';

  constructor(
    private http: HttpClient
  ) { }

  editEtape(etape: Etape): Observable<Etape> {
    return this.http.put<Etape>(this.urlBack, etape);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete<any>(this.urlBack + '/' + id);
  }

}
