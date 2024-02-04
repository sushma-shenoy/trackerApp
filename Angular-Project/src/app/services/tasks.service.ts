import { Injectable } from '@angular/core';
import {Tasks} from './../mock-tasks';
import {Task} from './../Task'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
private apiUrl = 'http://localhost:3000/tasks'
  constructor(private http: HttpClient) { }
  getTasks():Observable<Task[]>{
    return of(Tasks);
  }
  getTaskList():Observable<Task[]>{
   return this.http.get<Task[]>(this.apiUrl)
  }
  deleteTask(task:Task):Observable<any>{
  return   this.http.delete<Task>(`${this.apiUrl}/${task.id}`)
  }
  updateTaskReminder(task):Observable<Task>{
    const header = new HttpHeaders({
      'content-type' : 'application/json'
    })
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`,task,{headers:header})
  }
  addTask(task:Task):Observable<any>{
    const header=  new HttpHeaders({
      'content-type':'application/json'
    })
return this.http.post(this.apiUrl,task,{
  headers:header
})
  }
}
