import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import { environment } from '../../environments/environment'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  patreonUrl = 'https://www.patreon.com/oauth2/authorize?response_type=code' +
    '&client_id='+ environment.patreonClientId +
    '&redirect_uri=' + environment.domain + '/callback/patreon' +
    '&scope=identity%20identity.memberships%20campaigns&state=' + sessionStorage.getItem('state');
  twitchURL= 'https://id.twitch.tv/oauth2/authorize?response_type=code&force_verify=true&' +
    'client_id=' + environment.twitchClientId +
    '&redirect_uri=' + environment.domain +'/callback/twitch' +
    '&state=' + sessionStorage.getItem('state');
  mixerURL= 'https://mixer.com/oauth/authorize?response_type=code&scope=subscription:view:self&force_verify=true' +
    '&client_id=' + environment.mixerClientId +
    '&redirect_uri=' + environment.domain + '/callback/mixer' +
    '&state=' + sessionStorage.getItem('state');

  userData: Object = {twitchId:null, patreonId:null,minecraftId:null,steamId:null,mixerId:null,youtubeId:null};

  constructor( private http: HttpClient, private cookieService: CookieService) {
    this.http.get(environment.apiUrl + '/users/current', {
      headers: {
        "Authorization": `Bearer ${cookieService.get('token')}`
      }
    }).subscribe(data => this.userData = data)
  }

  ngOnInit() {

  }

}
