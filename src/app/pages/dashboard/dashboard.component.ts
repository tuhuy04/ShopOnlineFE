import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {}

  openMap: { [name: string]: boolean } = {
    sub1: true,
    sub2: false,
    sub3: false
  };

  openHandler(value: string): void {
    console.log(value);

    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }

  openHandler1(value: string): void {
    console.log(value);
    // for (const key in this.openMap) {
    //   if (key !== value) {
    //     this.openMap[key] = false;
    //   }
    // }
  }


}
