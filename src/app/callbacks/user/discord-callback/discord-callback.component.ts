import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router"
import {CookieService} from "ngx-cookie-service";
import {environment} from "../../../../environments/environment";



@Component({
  template: '',
  selector: 'app-discord-callback'
})

export class DiscordCallbackComponent {
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private cookieService: CookieService) {
    this.route.queryParams.subscribe(params => {
      if (sessionStorage.getItem('state') != params['state']) return
      this.http.get(environment.apiUrl + '/callback/discord?code=' + params['code'], {observe: 'response'}).subscribe(resp => {
          this.cookieService.set('token', resp.headers.get('token'), .041, '/');
          sessionStorage.setItem('discord', JSON.stringify(resp.body['discord']));
          this.router.navigate(['/dashboard']).then()
        }
      )
    });
  }
}

