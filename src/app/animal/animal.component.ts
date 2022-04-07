import { Component, OnInit } from '@angular/core';
import { FoxService } from '../services/fox.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  get:any={};
  constructor(private animalService:FoxService) {
    this.animalService.getFox().subscribe((someData)=>{
    this.get=someData
    });
   }

  ngOnInit(): void {
  }
 
}
