import {Component, Input, OnInit} from '@angular/core';
import {DiscordServer} from "../../../_models/DiscordServer";
import {ShareDiscordServersService} from "../../../services/share-discord-servers/share-discord-servers.service";
import {DiscordRole} from "../../../_models/DiscordRole";

@Component({
  selector: 'app-discord-server',
  templateUrl: './discord-server.component.html',
  styleUrls: ['./discord-server.component.scss']
})
export class DiscordServerComponent implements OnInit {
  @Input()
  server: DiscordServer

  servers: DiscordServer[]
  selectedRole: DiscordRole



  constructor(private sharedDiscordServers: ShareDiscordServersService) { }

  ngOnInit(): void {
    this.sharedDiscordServers.sharedServers.subscribe(servers => this.servers = servers)
  }

}
