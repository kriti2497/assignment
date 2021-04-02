import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }


  getAllItems(){
    return this.http.get(`https://jsonplaceholder.typicode.com/todos`);
  }

  getParticularItem(id){
    return this.http.get(`https://jsonplaceholder.typicode.com/todos?id=`+id);
  }
}
