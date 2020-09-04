import { Injectable } from '@angular/core';
/**import HttpClient and
 * inject it in constructor as (" constructor(private _http: HttpClient) {}") */
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private _http: HttpClient) { }
}
