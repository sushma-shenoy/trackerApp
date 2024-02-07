import { Component, OnInit } from '@angular/core';
import{Task} from './../../Task'
import { Tasks } from 'src/app/mock-tasks';
import { TasksService } from 'src/app/services/tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks: Task[] = [];
  constructor(private taskService:TasksService) { }

  ngOnInit(): void {
    this.getTasks()
  }
getTasks(){
 this.taskService.getTaskList().subscribe((data)=>{
  this.tasks = data;

  })
}
onDelete(task:Task){
  this.taskService.deleteTask(task).subscribe(()=>(this.tasks = this.tasks.filter(d=>d.id != task.id)))
}
onToggleReminder(task:Task){
  task.reminder = !task.reminder;

  this.taskService.updateTaskReminder(task).subscribe()
}
onTaskAdd(event:Task){
console.log(event)
this.taskService.addTask(event).subscribe(data=>this.tasks.push(data))
}
}
