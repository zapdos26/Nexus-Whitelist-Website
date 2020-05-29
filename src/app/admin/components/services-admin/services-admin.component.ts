import {Component, Input, OnInit} from '@angular/core';
import {MatExpansionPanel} from "@angular/material/expansion";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-services-admin',
  templateUrl: './services-admin.component.html',
  styleUrls: ['./services-admin.component.scss'],
  viewProviders: [MatExpansionPanel]

})
export class ServicesAdminComponent implements OnInit {

  patreonURL = 'https://www.patreon.com/oauth2/authorize?response_type=code' +
    '&client_id='+ environment.patreonClientId +
    '&redirect_uri=' + environment.domain + '/callback/patreon/admin' +
    '&scope=scope=campaigns campaigns.members&state=' + sessionStorage.getItem('state');
  twitchURL= 'https://id.twitch.tv/oauth2/authorize?response_type=code&force_verify=true' +
    '&scope=channel:read:subscriptions' +
    '&client_id=' + environment.twitchClientId +
    '&redirect_uri=' + environment.domain +'/callback/twitch/admin' +
    '&state=' + sessionStorage.getItem('state');
  mixerURL= 'https://mixer.com/oauth/authorize?response_type=code' +
    '&scope=channel:details:self' +
    '&client_id=' + environment.mixerClientId +
    '&redirect_uri=' + environment.domain + '/callback/mixer/admin' +
    '&state=' + sessionStorage.getItem('state');

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
