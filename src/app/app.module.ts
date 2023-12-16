import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { WorkOutCategoryComponent } from './components/work-out-category/work-out-category.component'
import { FormsModule } from '@angular/forms';
import { WorkOutCategory } from './models/work-out-category';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { SetRecordApiService } from './services/set-record-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkOutCategoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,MatGridListModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [WorkOutCategory,SetRecordApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
