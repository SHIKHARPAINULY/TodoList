import { Component, OnInit, AfterViewChecked, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TaskService } from '../bid-service';
// import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewChecked, DoCheck {

  constructor( public router : Router, private route : ActivatedRoute, public TaskService : TaskService) { }
  public Tasks = [];
  public unDoneListShow ;

  ngOnInit() {
    this.getTaskLists();
  }

  ngAfterViewChecked(){}

  ngDoCheck() {
    let id = this.route.snapshot.paramMap.get('id');

      if(id == "undone" && !this.unDoneListShow ) {
        this.getTaskLists();
        this.unDoneListShow = true;
      } else if(id == "done" && this.unDoneListShow) {
        this.getTaskLists();
        this.unDoneListShow = false;
      } 
  }

  checked(task){
    task.checked == true ? task.checked = false : task.checked = true;
    this.TaskService.editTask(task);
    this.getTaskLists();
    console.log(task)
  }

  getTaskLists () {
    this.TaskService.publishTaskArray().subscribe( res => {
      this.Tasks = [];
      this.Tasks = res;
    }) ;
  }
}
