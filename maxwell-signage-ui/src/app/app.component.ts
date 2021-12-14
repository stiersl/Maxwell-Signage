import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maxwell-signage';
  interval!: any;
  timeleft: number = 60;
  duration: number = 60;
  
  ngOnInit(): void {
    this.startAutoRefresh();
  }
  // Start a timer which will fire off once each second, once the timer
  // reaches its auto refresh duration (like 60 secs) run the refreshTimeCalcs
  // method.
  startAutoRefresh() {
    this.interval = setInterval(() => {
      if(this.timeleft > 0) {
        this.timeleft--;
      } else {
        this.timeleft = this.duration;
      };
    },1000)
  }

};
