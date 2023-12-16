import { Component } from '@angular/core';
import { WorkOutCategory } from '../../models/work-out-category';
import { WorkOut } from '../../models/work-out';
import {  OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { state } from '@angular/animations';
import { SetRecordApiService } from '../../services/set-record-api.service';

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
  newCategoryName:string="";
  newCategoryDescription:string="";
  enableNewCategoryForm:boolean=false
  navigationExtras: NavigationExtras = {
    state: {
      data: {}
    }
  };

  constructor(private router:Router,
    private route:ActivatedRoute,
    private newWorkOutCategory:WorkOutCategory,
    private apiService : SetRecordApiService
    ) {
      this.apiService.getAllWorkOutCategories().subscribe((res:any)=> {
      this.workOutCategoryList=res
     })
  }
  ngOninit():void {

  }



  goToRecordSets(category:any) {
    let WorkOutCategoryrouterData=this.navigationExtras
    WorkOutCategoryrouterData.state={
      data:{category}
    }
    console.log(this.navigationExtras)
    this.router.navigateByUrl('/workoutCategory',WorkOutCategoryrouterData)
  }
  addNewCatergory(){
    this.enableNewCategoryForm=!this.enableNewCategoryForm
  }
  saveNewWorkOutCategory() {
    this.newWorkOutCategory.categoryName=this.newCategoryName
    this.newWorkOutCategory.description=this.newCategoryDescription
    this.apiService.addNewWorkOutCategory(this.newWorkOutCategory).subscribe((res:any)=> {
        this.newWorkOutCategory=res
        alert(`Added ${this.newWorkOutCategory.categoryName}`);
        window.location.reload();
        this.enableNewCategoryForm=!this.enableNewCategoryForm
    })

  }
}
