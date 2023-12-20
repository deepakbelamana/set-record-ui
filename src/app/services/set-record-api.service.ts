import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetRecordApiService {

  constructor(private http: HttpClient) { }

  readonly serverURL : string="http://localhost:9092/";

  getAllWorkOutCategories() {
    return this.http.get(this.serverURL+"category");
  }

  addNewWorkOutCategory(category:any) {
    return this.http.post(this.serverURL+"category",category);
  }

  updateWorkOutCategory(category:any) {
    return this.http.post(this.serverURL+"category/update",category)
  }
}
