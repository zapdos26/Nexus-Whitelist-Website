import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import { environment } from '../../../../environments/environment'


@Component({
  selector: 'app-patreon-callback',
  template:''
})
export class PatreonCallbackComponent {

  constructor(private route: ActivatedRoute, private http: HttpClient, private router:Router,private cookieService: CookieService ) {
    this.route.queryParams.subscribe(params => {
      if (sessionStorage.getItem('state') != params['state']) return
      this.http.get(environment.apiUrl + '/callback/patreon?code=' + params['code'], {
        observe: 'response',
        headers: {
          "Authorization": `Bearer ${cookieService.get('token')}`
        }
      }).subscribe(resp => {
        this.cookieService.set( 'token', resp.headers.get('token'), .041,'/');
        this.router.navigate(['/dashboard']).then()
      },
        error => this.router.navigate(['/error'],{state:error}))
    })
  }
}
