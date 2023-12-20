import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { WorkOut } from '../../models/work-out';
import { WorkOutCategory } from '../../models/work-out-category';
import { SetRecordApiService } from '../../services/set-record-api.service';
import { WorkOutSet } from '../../models/work-out-set';

@Component({
  selector: 'app-work-out-category',
  templateUrl: './work-out-category.component.html',
  styleUrl: './work-out-category.component.css',
})
export class WorkOutCategoryComponent {



  routerData: any;
  newWorkOutName: string = '';
  workOutSet=new WorkOutSet();
  weight:number=0;
  reps:number=0;

  workOutCategory: WorkOutCategory = {
    categoryId: '',
    categoryName: '',
    description: '',
    workOutsList: [],
  };

  selectedWorkOut:WorkOut=new WorkOut();

  enableWorkOutForm: boolean = false;

  enableAddWorkOutSet: boolean = false;

  selectedWorkOutindex:number=0;

  constructor(private route: ActivatedRoute, private router: Router,  private apiService : SetRecordApiService) {
    this.selectedWorkOut.workOutName="";
    this.routerData = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.routerData);
    this.workOutCategory = this.routerData.data.category;
    if (this.workOutCategory.workOutsList == null) {
      this.workOutCategory.workOutsList=[]
    }
      console.log(this.workOutCategory);
  }

  ngOnInit(): void {}

  addWorkOut() {
    this.enableWorkOutForm = !this.enableWorkOutForm;
  }

  saveNewWorkOut() {
    let updatedWorkOutCategory=new WorkOutCategory();
    updatedWorkOutCategory=this.workOutCategory
    updatedWorkOutCategory.workOutsList.push({workOutName:this.newWorkOutName,workOutSets:[]})
    this.updateWorkOutCategory(updatedWorkOutCategory);
  }

  updateWorkOutCategory(updatedWorkOutCategory:WorkOutCategory) {
    this.apiService.updateWorkOutCategory(updatedWorkOutCategory).subscribe((res:any)=> {
      this.workOutCategory=res;
      console.log(this.workOutCategory);
      alert(`saved ${this.newWorkOutName}`);
      this.enableWorkOutForm=!this.enableWorkOutForm;
    },(err=>{
      alert("error saving the record, try again!");
      console.log(err)
    }))

  }

  addWorkOutSet() {
      this.enableAddWorkOutSet=!this.enableAddWorkOutSet
  }
  saveWorkOutSet() {
      this.workOutSet.weight=this.weight;
      this.workOutSet.rep=this.reps;
      this.selectedWorkOut.workOutSets.push(this.workOutSet)
      this.workOutCategory.workOutsList[this.selectedWorkOutindex]=this.selectedWorkOut;
      this.updateWorkOutCategory(this.workOutCategory);
  }

  onSelectedWorkOut(workOut:WorkOut,index:number) {
      this.selectedWorkOut=workOut;
      this.selectedWorkOutindex=index;
      this.enableAddWorkOutSet=!this.enableAddWorkOutSet
  }
}
