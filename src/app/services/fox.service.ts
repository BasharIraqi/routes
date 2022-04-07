import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoxService {

  constructor(private client:HttpClient) { }

  getFox(){
    return this.client.get('https://randomfox.ca/floof/?ref=apilist.fun');
  }
}
