import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {


    const data$ = new Observable(sub => {
      console.log("Start of Observable");
      sub.next("Observable data 1");
      sub.next("Observable data 2");
      sub.next("Observable data 3");
      // sub.next("Observable data 4");
      setTimeout(() => sub.next("Observable data 4"), 1000);
      sub.next("Observable data 5");
    });

    console.log("Start");

    data$.subscribe(x => {
      console.log("First Subscription :", x);
    });

    console.log("First Subscription ends");

    data$.subscribe(x => {
      console.log("Second Subscription:", x);
    });

    console.log("Second Subscription ends");



    const data = this.normalFunction();

    console.log("Normal Function Data:" + data);


  }

  ngOnInit(): void {
  }


  normalFunction() {
    console.log("Return ouput: 1");
    return 1;
  }




}
