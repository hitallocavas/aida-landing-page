import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tabChoosed:String = '';
  constructor() { }

  ngOnInit() {
  }

  tabChoose(choosed){
    this.tabChoosed = choosed;
  }

}
