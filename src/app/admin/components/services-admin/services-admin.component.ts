import {Component, Input, OnInit} from '@angular/core';
import {MatExpansionPanel} from "@angular/material/expansion";

@Component({
  selector: 'app-services-admin',
  templateUrl: './services-admin.component.html',
  styleUrls: ['./services-admin.component.scss'],
  viewProviders: [MatExpansionPanel]

})
export class ServicesAdminComponent implements OnInit {
  twitchURL= 'http://twitch.tv'

  @Input()
  patreonComplete: boolean = false

  @Input()
  twitchComplete: boolean =false

  @Input()
  mixerComplete: boolean =false

  constructor() { }

  ngOnInit(): void {
  }

}
