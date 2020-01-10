import {Injectable} from '@angular/core';
import {Httpclient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: Httpclient) {}

  getBikes() {
    return this.http.get('/server/api/v1/bikes');
  }

}
