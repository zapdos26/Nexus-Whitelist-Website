import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent implements OnInit {
  checked = new FormControl('', [Validators.requiredTrue])
  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.http.patch(environment.apiUrl + '/admin/current/agree', {},{
      headers: {
        "Authorization": `Bearer ${this.cookieService.get('token')}`
      }
    }).subscribe(data => {
      this.router.navigate(['/admin']).then()
    })
  }

}
