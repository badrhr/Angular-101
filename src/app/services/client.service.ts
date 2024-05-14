import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CLient} from "../models/Client";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  public getCLients(): Observable<Array<CLient>> {
    return this.http.get<Array<CLient>>("http://localhost:8082/clients");
  }
}
