import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface FlightInfoPayload {
  airline: string;
  arrivalDate: string;
  arrivalTime: string;
  flightNumber: string;
  numOfGuests: number;
  comments?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private apiUrl = 'https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge';


  constructor(private http: HttpClient) { }

  submitFlightDetails(flightDetails: FlightInfoPayload): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': 'WW91IG11c3QgYmUgdGhlIGN1cmlvdXMgdHlwZS4gIEJyaW5nIHRoaXMgdXAgYXQgdGhlIGludGVydmlldyBmb3IgYm9udXMgcG9pbnRzICEh',
      'candidate': 'Paul Qin'
    });

    return this.http.post(this.apiUrl, flightDetails, { headers });
  }


  
}
