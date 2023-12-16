import { Component } from '@angular/core';
import { WorkOutCategory } from '../../models/work-out-category';
import { WorkOut } from '../../models/work-out';
import {  OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { state } from '@angular/animations';

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

  navigationExtras: NavigationExtras = {
    state: {
      data: {}
    }
  };

  constructor(private router:Router,private route:ActivatedRoute) {
    this.workOutCategoryList=[
      {categoryId:"1",categoryName:"chest and Triceps",description:"push day",
      workOutsList:[
        {workOutName:"dumbell bench press",workOutSets:[]},
        {workOutName:"inclined dumbell bench press",workOutSets:[]},
        {workOutName:"Overhead tricep extension",workOutSets:[]}
    ]}
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

  goToRecordSets(category:any) {
    let WorkOutCategoryrouterData=this.navigationExtras
    WorkOutCategoryrouterData.state={
      data:{category}
    }
    console.log(this.navigationExtras)
    this.router.navigateByUrl('/workoutCategory',WorkOutCategoryrouterData)
  }
}
