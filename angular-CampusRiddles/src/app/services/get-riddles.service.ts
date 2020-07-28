import { Injectable } from '@angular/core';
import { WebRequestsService } from './web-requests.service';

@Injectable({
  providedIn: 'root'
})
export class GetRiddlesService {

  constructor(private webReqService: WebRequestsService) { }

  getAll(){
    return this.webReqService.get('/Riddles');
  }
}
