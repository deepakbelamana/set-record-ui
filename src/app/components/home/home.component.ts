import { Component } from '@angular/core';
import { WorkOutCategory } from '../../models/work-out-category';
import { WorkOut } from '../../models/work-out';
import {  OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  enableAddWorkOutInput:boolean = false;
  newWorkOut:string ="";
  workOutCategoryList: WorkOutCategory[]=[];
  workOut: WorkOut = new WorkOut;
  workOutCategory : WorkOutCategory= new WorkOutCategory;
  
  constructor() {
    this.workOutCategoryList=[
      {categoryId:"1",categoryName:"chest and Triceps",description:"push day",workOutsList:[]}
    ]
  }
  ngOninit():void {
   
  }
  addWorkOut(workOutCategory:WorkOutCategory) {
    if(this.newWorkOut === "") {
      this.enableAddWorkOutInput=!this.enableAddWorkOutInput
    } else {
      this.workOut.workOutName=this.newWorkOut;
      workOutCategory.workOutsList.push(this.workOut);
      alert("work out added to category")
      console.log(workOutCategory)
    }
    
  }
}
