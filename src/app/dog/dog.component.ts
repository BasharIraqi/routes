import { Component, OnInit } from '@angular/core';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  show:boolean=false;
  get:any={};
  constructor(private dogService:DogsService) {
    this.dogService.getDog().subscribe((someData)=>{
      this.get=someData
    });
   }

  ngOnInit(): void {
  }

  handleClick(){
    this.show=!this.show;
    return this.get.message;
  }

}
