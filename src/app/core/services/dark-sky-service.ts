import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

import {catchError, tap} from "rxjs/operators";
import {DarkSkyApiResponse} from '../models/dark-sky-api-response';
import {UserData} from '../models/user-data';

const apiUrl = 'http://192.168.1.208:3000/weatherdata';

@Injectable({
  providedIn: 'root'
})
export class DarkSkyService {

  constructor(
    private http: HttpClient
  ) { }

  getWeatherData(userData: UserData): Observable<DarkSkyApiResponse> {
    const url = `${apiUrl}?latitude=${userData.latitude}&longitude=${userData.longitude}`;
    this.log(`Longitude: ${userData.longitude}`);
    this.log(`Latitude: ${userData.latitude}`);
    return this.http.get<DarkSkyApiResponse>(url).pipe(
      tap(_ => this.log('Fetched Weather Data')),
      catchError(this.handleError<DarkSkyApiResponse>('getWeatherData'))
    );
  }


  private log(message: string) {
    console.log(`GhostPanelApiService:  ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
