import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  comingdate = new Date("Dec 14, 2019 17:00:00");

  d; h; m; s;
  $counter: any;
  constructor() {
  }

  ngOnInit() {
  timer(1000, 1000)
      .subscribe(i => this.getDate());
  }
  getDate() {
    var now = new Date();
    var des = this.comingdate.getTime() - now.getTime();
    var days = Math.floor(des / (1000 * 60 * 60 * 24));
    var hours = Math.floor(des % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var mins = Math.floor(des % (1000 * 60 * 60) / (1000 * 60));
    var secs = Math.floor(des % (1000 * 60) / 1000);

    this.d = this.getTrueNumber(days);
    this.h = this.getTrueNumber(hours);
    this.m = this.getTrueNumber(mins);
    this.s = this.getTrueNumber(secs);
  };

  getTrueNumber(x) {
    if (x < 10) return '0' + x;
    else return x;
  }
}
