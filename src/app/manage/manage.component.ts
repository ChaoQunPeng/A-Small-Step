import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  dataSet: any;
  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.http.get(`${environment.server_url}/daily`).subscribe(res => {
      this.dataSet = res;
    });
  }

  goDetail(item) {
    this.router.navigateByUrl(`/detail/${item.Id}`)
  }
}
