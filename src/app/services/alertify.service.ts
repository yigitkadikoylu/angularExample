import { Injectable } from '@angular/core';
declare let alertify:any;

@Injectable()
export class AlertifyService {

  constructor() { }
  success(messagesucces:string){
    alertify.success(messagesucces)
  }
  error(messageerror:string){
    alertify.error(messageerror)
  }
  warning(messagewarning:string){
    alertify.warning(messagewarning)
  }
  
}
