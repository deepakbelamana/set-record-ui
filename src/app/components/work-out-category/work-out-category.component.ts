import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { WorkOut } from '../../models/work-out';
import { WorkOutCategory } from '../../models/work-out-category';
import { SetRecordApiService } from '../../services/set-record-api.service';

@Component({
  selector: 'app-work-out-category',
  templateUrl: './work-out-category.component.html',
  styleUrl: './work-out-category.component.css',
})
export class WorkOutCategoryComponent {
  routerData: any;
  newWorkOutName: string = '';

  workOutCategory: WorkOutCategory = {
    categoryId: '',
    categoryName: '',
    description: '',
    workOutsList: [],
  };

  enableWorkOutForm: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router,  private apiService : SetRecordApiService) {
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
    this.apiService.updateWorkOutCategory(updatedWorkOutCategory).subscribe((res:any)=> {
      this.workOutCategory=res;
      console.log(this.workOutCategory);
      alert(`saved ${this.newWorkOutName}`);
      this.enableWorkOutForm=!this.enableWorkOutForm;
    },(err=>{
      alert("error saving the record, try again!");
    }))

  }
}
