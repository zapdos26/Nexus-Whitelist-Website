import {Component, Input, OnInit} from '@angular/core';
import {MatExpansionPanel} from "@angular/material/expansion";

@Component({
  selector: 'app-services-admin',
  templateUrl: './services-admin.component.html',
  styleUrls: ['./services-admin.component.scss'],
  viewProviders: [MatExpansionPanel]

})
export class ServicesAdminComponent implements OnInit {

  patreonUrl = 'https://www.patreon.com/oauth2/authorize?response_type=code' +
    '&client_id=wT0CTsYu5hvXD0M5DAUAISew45xou02kTdVT_VeqPZRV4EIa-mLCSQ__OogH9Tom' +
    '&redirect_uri=http://lvh.me/callback/patreon/admin&scope=campaigns campaigns.members&state='
    + sessionStorage.getItem('state');

  twitchURL= 'https://id.twitch.tv/oauth2/authorize?client_id=l86bxjwk6une4y7xt4x9cmqtz69ese' +
    '&redirect_uri=http://lvh.me/callback/twitch/admin&response_type=code&force_verify=true&scope=channel:read:subscriptions&state=' + sessionStorage.getItem('state')

  @Input()
  patreonComplete: boolean = false

  @Input()
  twitchComplete: boolean = false

  @Input()
  mixerComplete: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
