import {Component, OnInit} from '@angular/core';
import {DiscordRole} from '../../_models/DiscordRole';
import {DiscordServer} from '../../_models/DiscordServer';


@Component({
  selector: 'app-discord-server',
  templateUrl: './discord-server.component.html',
  styleUrls: ['./discord-server.component.scss']
})
export class DiscordServerComponent implements OnInit {
  discordRole1: DiscordRole = {
    role: {id: 12345, name: 'Test1234', color: '#0000ff'},
    moderator: false,
    patreonMinimum: 10,
    patreonMaximum: 20,
    twitchFollow: false,
    twitchPrime: false,
    twitch1000: false,
    twitch2000: false,
    twitch3000: false,
    mixerFollow: false,
    mixerSubscribe: false,
    youtubeSubscribe: false,
    youtubeMember: false,
    minecraftRegistered: false,
    steamRegistered: false,
    patreonRegistered: false,
    twitchRegistered: false,
    mixerRegistered: false,
    youtubeRegistered: true,
  };
  discordRole2: DiscordRole = {
    role: {id: 12345, name: 'Test9876', color: '#ffffff'},
    moderator: false,
    patreonMinimum: 10,
    patreonMaximum: 20,
    twitchFollow: false,
    twitchPrime: false,
    twitch1000: false,
    twitch2000: false,
    twitch3000: false,
    mixerFollow: false,
    mixerSubscribe: false,
    youtubeSubscribe: false,
    youtubeMember: false,
    minecraftRegistered: false,
    steamRegistered: false,
    patreonRegistered: false,
    twitchRegistered: false,
    mixerRegistered: false,
    youtubeRegistered: true,
  };

  discordServer: DiscordServer = {
    server: {id: 12342, name: 'Test Server'},
    roles: [this.discordRole1, this.discordRole2]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
