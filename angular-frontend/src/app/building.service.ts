import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Building } from './building';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  private baseURL = "http://localhost:8080/api/v1/buildings";

  constructor(private httpClient: HttpClient) { }

  getBuildingsList(): Observable<Building[]>{
    return this.httpClient.get<Building[]>(`${this.baseURL}`);
  }

  createBuilding(building: Building): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, building);
  }

  getBuildingById(id: number): Observable<Building>{
    return this.httpClient.get<Building>(`${this.baseURL}/${id}`);
  }

  updateBuilding(id: number, building: Building): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, building);
  }

  deleteBuilding(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
