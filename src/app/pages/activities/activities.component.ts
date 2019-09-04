import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  tabIndex=1;
  constructor() { }

  ngOnInit() {


  }
  openFunction(tabIndex, functions) {
    var i, x, tablinks;
    x = document.getElementsByClassName("function");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(functions).style.display = "block";
    this.tabIndex=Number(tabIndex);
  }
}
