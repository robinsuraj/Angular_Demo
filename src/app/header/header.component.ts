import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() loggedIn;
  constructor() { }

  ngOnInit() {
    console.log(this.loggedIn);
  }

}
