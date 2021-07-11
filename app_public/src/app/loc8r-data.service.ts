import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Location, Review } from './location';

@Injectable({
  providedIn: 'root'
})
export class Loc8rDataService {

  constructor(private http: HttpClient) { 

  }

  private apiBaseUrl = environment.apiBaseUrl;

  public getLocations(lat: number, lng: number): Promise<Location []> {
    const maxDistance = 20000;

    const url: string = `${this.apiBaseUrl}/locations?lng=${lng}&lat=${lat}&maxDistance=${maxDistance}`;

    return this.http
            .get(url)
            .toPromise()
            .then(response => response as Location[])
            .catch(this.handleError);
  }

  public getLocationById(locationid: string): Promise<Location []> {
    const url: string = `${this.apiBaseUrl}/locations/${locationid}`;

    return this.http
            .get(url)
            .toPromise()
            .then(response => response as Location[])
            .catch(this.handleError);
  }

  public doReviewByLocationId(locationId: string, formData: Review): Promise<Review> {
    const url: string = `${this.apiBaseUrl}/locations/${locationId}/reviews`
    return this.http
          .post(url, formData)
          .toPromise()
          .then(response => response as Review)
          .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
