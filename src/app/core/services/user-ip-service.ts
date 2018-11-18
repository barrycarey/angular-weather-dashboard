import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {UserData} from '../models/user-data';

@Injectable({
  providedIn: 'root'
})
export class UserIpService {
  constructor(private http: HttpClient) {

  }


  getUserIpAddress(): Observable<UserData> {
    this.log('Fetching user data');
    return this.http.get<UserData>('https://ipapi.co/json').pipe(
      tap( location => {
        this.log(`Fetched User Location Data `);
        console.log(location);
      }),
      catchError(this.handleError<UserData>('getUserIpAddress'))
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
