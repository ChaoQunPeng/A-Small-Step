import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../app.animation';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class IndexComponent implements OnInit {
  dailies: any;
  curDate: string;
  nextDate: string;
  currentClasses: {};
  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.getAllData();
  }

  done(daily) {
    daily.Status = !daily.Status;
    this.http.put(`${environment.server_url}/daily`, daily).subscribe(res => {
      this.getAllData();
      console.log(this.dailies);
    });
  }

  clearData() {
    localStorage.removeItem("DailyStorage");
  }

  getAllData() {
    this.http.get(`${environment.server_url}/daily`).subscribe(res => {
      this.dailies = res;
    });
  }
  //#endregion
}
