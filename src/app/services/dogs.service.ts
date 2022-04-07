import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private client:HttpClient) { }

  getDog(){
    return this.client.get('https://dog.ceo/api/breeds/image/random');
  }
}
