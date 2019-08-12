import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from "@angular/router";
import { slideInAnimation } from '../app.animation';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-create-daily',
  templateUrl: './create-daily.component.html',
  styleUrls: ['./create-daily.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    slideInAnimation
  ]
})
export class CreateDailyComponent implements OnInit {
  eventName = "";

  constructor(
    public router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {

  }

  /**
   * 添加日常
   */
  createDaily() {
    this.http.post(`${environment.server_url}/daily`, { Name: this.eventName }).subscribe(res => {
      this.router.navigateByUrl("/index");
      console.log(res);
    });
  }

  compareNumbers(a, b) { // 这个方法可以按照降序排
    return a - b;
  }

  checkBlank() {
    return this.eventName.replace(/\s*/g, "") == "" ? true : false;
  }
}