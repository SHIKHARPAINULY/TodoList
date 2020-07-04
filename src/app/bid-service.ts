import {Injectable, ɵbypassSanitizationTrustStyle } from'@angular/core';
import {Observable, BehaviorSubject,Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class TaskService {

    constructor(){
        this.pushTasksInArray();
    }
    private TaskArray = new BehaviorSubject([]);

    public task = [
       {
            taskName: 'Create Art',
            taskDescription : ' This is Creative Art created ',
            repeatTask : true,
            checked : true
       },
       {
            taskName: 'delete Art',
            taskDescription : ' This is  Art deleted ',
            repeatTask : false,
            checked : false
        },
        {
            taskName: 'Task NewArt',
            taskDescription : ' This is Creative Art created ',
            repeatTask : true,
            checked : true
       },
       {
            taskName: 'Task Old Art',
            taskDescription : ' This is  Art deleted ',
            repeatTask : false,
            checked : false
        },
        {
            taskName: 'Done Task',
            taskDescription : ' This is Creative Art created ',
            repeatTask : true,
            checked : true
       },
       {
            taskName: 'Undone task',
            taskDescription : ' This is  Art deleted ',
            repeatTask : false,
            checked : false
        },
    ]

     
    pushTasksInArray() {
        this.TaskArray.next(this.task);
        console.log(this.TaskArray);
    }


    publishTaskArray(): Observable<any> {
        return this.TaskArray.asObservable();

    }

    addTasks(task){
        this.task.push(task);
        console.log(this.TaskArray);
    } 

    editTask(val) {
        this.task.filter(element => { 
            element.taskName == val.taskName ? element.checked = val.checked : false ;  
        });
        this.TaskArray.next(this.task);
    }
    
}