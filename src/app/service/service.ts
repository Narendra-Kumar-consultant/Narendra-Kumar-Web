import { Injectable } from '@angular/core';
import { data } from './data';
import {Data} from './dataInterface';
@Injectable({
    providedIn: 'root',
  })
  export class dataService
{

    constructor() { }
getData():Data[]{return data;}
}