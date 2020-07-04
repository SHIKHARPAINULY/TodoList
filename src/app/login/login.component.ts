import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder , Validators} from '@angular/forms';
import { Router, ParamMap, ActivatedRoute} from '@angular/router';
import { TaskService } from '../bid-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router : Router, private route: ActivatedRoute , public fb : FormBuilder, public TaskService : TaskService ) { }

  public Taskform = this.fb.group({
         "taskName": ['', Validators.required],
         "taskDescription": ['', Validators.required],
         "repeatTask": ['', Validators.required],

        })

  submit() {
    // length is required
    if (this.Taskform.valid && this.Taskform.value.taskName && this.Taskform.value.taskDescription) {
      let Task = {
        taskName : this.Taskform.value.taskName,
        taskDescription : this.Taskform.value.taskDescription,
        repeatTask : this.Taskform.value.repeatTask,
        checked : false
      }
      this.TaskService.addTasks(Task);
      this.router.navigate(['board', { id: 'undone' }]);
    }
  }

  ngOnInit() {}

}
