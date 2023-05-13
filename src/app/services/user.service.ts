import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }


  getUserList(): Observable<any> {
 
    return this.http.get(`user/getUserList`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }



  getUserData(userId: Number): Observable<any> {
    return this.http.get(`user/getUser/` + userId);
  }


  handleError(error: HttpErrorResponse) {

    let errorMessage = "";
    if (error.status == 0) {
      console.log("Error Occurred :" + error.error);
    } else {
      errorMessage = `API returned code - ${error.status}  - ${error.statusText}. Error Message : ${error.message}`
    }

    if (errorMessage == "") {
      errorMessage = 'Something bad happened; Please try again.';
    }
    return throwError(() => new Error(errorMessage));
  }


}
