import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private client:HttpClient) { }


  getCat(){
    return this.client.get('https://cat-fact.herokuapp.com/facts');
  }
}
