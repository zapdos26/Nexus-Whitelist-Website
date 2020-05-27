import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-admin-other',
  templateUrl: './admin-other.component.html',
  styleUrls: ['./admin-other.component.scss']
})
export class AdminOtherComponent implements OnInit {
  hide = true;
  token:string

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }


  onSubmit() {
    this.http.get(environment.apiUrl + '/token/user/generate').subscribe(data => {
        this.token = data['accessToken']
      }
    )
  }


  onClick() {
    if (this.token == undefined) {
      this.http.get(environment.apiUrl + '/token/user').subscribe(data => {
          this.token = data['accessToken']
        }
      )
    }
    this.hide = !this.hide
  }
}
