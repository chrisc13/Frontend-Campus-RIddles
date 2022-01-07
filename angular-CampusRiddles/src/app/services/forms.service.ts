import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generalResponse } from '../_models/generalResponse.model';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http: HttpClient){
    this.FORMS_URL = 'api/forms'
   }

  readonly FORMS_URL;

  // general function that sends any type of form that only requires a confirmation. 
  // formType is an enum found in common/enums folder and payload is the form value (assuming its a template driven form)
  sendForm(payload: Object, formType: string): Observable<generalResponse> {
  
    let options = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    }

    return this.http.post<generalResponse>(
      `${this.FORMS_URL}/${formType}`,
      JSON.stringify(payload),
      options
    )
  }
}
