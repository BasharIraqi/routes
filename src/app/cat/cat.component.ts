import { Component, OnInit } from '@angular/core';
import { CatsService } from '../services/cats.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  status:boolean=false;
  get:any=[];
  constructor(private catService:CatsService) { 
  this.catService.getCat().subscribe((someData)=>{
    this.get=someData
  });
  }

  ngOnInit(): void {
  }
 handleClick(){
   this.status=!this.status;
 }

}
