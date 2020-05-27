import {Component, OnInit} from '@angular/core';
import {DiscordServer} from "../../../_models/DiscordServer";
import {FormControl} from "@angular/forms";
import {ShareDiscordServersService} from "../../../services/share-discord-servers/share-discord-servers.service";

@Component({
  selector: 'app-discord-servers',
  templateUrl: './discord-servers.component.html',
  styleUrls: ['./discord-servers.component.scss']
})
export class DiscordServersComponent implements OnInit {

  servers: DiscordServer[]
  selectedServer: DiscordServer

  constructor(private sharedDiscordServers: ShareDiscordServersService) {
  }

  ngOnInit(): void {
    this.sharedDiscordServers.sharedServers.subscribe(servers => this.servers = servers)
  }

  addBot(): void {
    window.location.href = 'https://www.google.com'
  }
}
