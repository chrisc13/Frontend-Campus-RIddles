import { Injectable } from '@angular/core';
import { WebRequestsService } from './web-requests.service';

@Injectable({
  providedIn: 'root',
})
export class PostRiddleService {
  constructor(private webReqService: WebRequestsService) {}

  newRiddle(uri: string, obj: Object) {
    return this.webReqService.post(uri, obj);
  }
}
