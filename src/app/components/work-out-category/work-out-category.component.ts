import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { WorkOut } from '../../models/work-out';

@Component({
  selector: 'app-work-out-category',
  templateUrl: './work-out-category.component.html',
  styleUrl: './work-out-category.component.css'
})
export class WorkOutCategoryComponent {

  routerData:any;
  workOutList:WorkOut[]=[{
    workOutName:"",
    workOutSets:[]
  }]
  constructor(private route:ActivatedRoute,private router:Router){
   this.routerData=this.router.getCurrentNavigation()?.extras.state
   console.log(this.routerData)
   this.workOutList=this.routerData.data.category?.workOutsList
   console.log(this.workOutList)
  }

  ngOnInit(): void {

  }



}
