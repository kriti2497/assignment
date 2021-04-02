import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './services/app.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'my-app';

  data: any;
  response: any;
  selectedItem: Todo;
  constructor(private apiService: AppService){}


  ngOnInit(){
    this.apiService.getAllItems().subscribe((res)=> {
      // console.log(res);
      this.data = res;
    })
  }


  getItem(id: number){
    console.log('hello')
    this.apiService.getParticularItem(id).subscribe((res)=> {
      console.log(res);
      this.response = res;
      this.selectedItem = res[0]
      console.log(this.selectedItem)
    })
  }

}
