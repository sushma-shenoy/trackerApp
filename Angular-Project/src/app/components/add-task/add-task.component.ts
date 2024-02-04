import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
text:string;
reminder:boolean;
day:string;
showAddTask:boolean;
@Output() onAddTask: EventEmitter<any> = new EventEmitter()
  constructor(private uiService:UiService) {
    this.uiService.onToggle().subscribe((data:any)=>{
      this.showAddTask = data
      })   }

  ngOnInit(): void {
  }
onSubmit(){
  if (!this.text) {
    alert('Please add a task!');
    return;
  }

  const newTask: Task = {
    text: this.text,
    day: this.day,
    reminder: this.reminder,
  };

  this.onAddTask.emit(newTask);
  this.text = '';
this.day = '';
this.reminder = false;
}
}
