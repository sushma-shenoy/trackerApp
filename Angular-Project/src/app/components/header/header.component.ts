import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Tracker';
  showAddTask: boolean = false;
  constructor(private uiService: UiService,public router:Router) {
    this.router.url =='/'
this.uiService.onToggle().subscribe((data:any)=>{
  this.showAddTask = data
  })
  }

  ngOnInit(): void {
  }
  btnclicked(event) {
    console.log(event);
    this.uiService.toggleAddTask()
  }
}
