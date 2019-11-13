import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Kunde} from '../model/kunde';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Policy} from '../model/Policy';

@Injectable({
    providedIn: 'root'
})
export class KundenstammApiService {
    baseUrl = 'http://localhost:8080/kundenstamm_vbam/rest/';

    constructor(private httpClient: HttpClient) {}

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };



    // Handle API errors
    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }

    public getAllCustomers(): Observable<Kunde[]> {
        return this.httpClient.get<Kunde[]>(this.baseUrl + 'customers');
    }

    // Create a new item
    createItem(item: Kunde): Observable<Kunde> {
        return this.httpClient
            .post<Kunde>(this.baseUrl + 'customer', JSON.stringify(item), this.httpOptions)
            .pipe(retry(2), catchError(this.handleError));
    }

    // Create a new item
    getCustomer(id: Number): Observable<Kunde> {
        console.log("get Customer: " + id);
        return this.httpClient
            .get<Kunde>(this.baseUrl + 'customer/' + id, this.httpOptions)
            .pipe(retry(2), catchError(this.handleError));
    }

    getPoliciesForCustomer(customerId: Number): Observable<Policy[]> {
        console.log("Policies for customer: " + customerId);
        return this.httpClient.get<Policy[]>(this.baseUrl + 'customer/' + customerId + "/policies");
    }
}
