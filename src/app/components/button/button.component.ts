import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input() color:string;
@Input() text:string;
@Output() btnclick= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onClick(event:Event){
this.btnclick.emit(event)
  }
}
