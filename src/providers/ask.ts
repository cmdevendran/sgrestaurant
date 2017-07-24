import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AskProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AskProvider {
restid: string;
restname: string;
  constructor(public http: Http) {
    console.log('Hello AskProvider Provider');
  }



}
