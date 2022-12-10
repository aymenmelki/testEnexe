import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApplicationServiceService {

  constructor(private http: HttpClient) { }

  addAgent(agent: any): Observable<any> {
    return this.http.post<any>('api/v1/agent', agent);
  }

  getAgents(): Observable<any[]> {
    return this.http.get<any[]>('api/v1/agents');
  }

  updateAgent(userId:number,agent:any): Observable<any> {
    return this.http.put<any>(`api/v1/updateAgent/${userId}`,agent);
  }

  removeAgent(userId:number,agent:any): Observable<any> {
    return this.http.delete<any>(`api/v1/removeAgent/${userId}`,agent);
  }
}
