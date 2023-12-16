import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkOutCategory } from './models/work-out-category';
import { HomeComponent } from './components/home/home.component';
import { WorkOutCategoryComponent } from './components/work-out-category/work-out-category.component';

const routes: Routes = [
  {
    path:'workoutCategory',
    component:WorkOutCategoryComponent
  },
  {
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
