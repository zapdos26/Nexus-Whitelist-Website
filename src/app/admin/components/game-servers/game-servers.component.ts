import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {DiscordServer} from "../../../_models/DiscordServer";
import {GameServer} from "../../../_models/GameServer";
import {ShareGameServersService} from "../../../services/share-game-servers/share-game-servers.service";

@Component({
  selector: 'app-game-servers',
  templateUrl: './game-servers.component.html',
  styleUrls: ['./game-servers.component.scss']
})
export class GameServersComponent implements OnInit {

  servers: GameServer[]
  selectedServer: GameServer
  newServer: GameServer = new GameServer()


  constructor(private sharedGameServers: ShareGameServersService) { }

  ngOnInit(): void {
    this.sharedGameServers.sharedServers.subscribe(servers => this.servers = servers)
  }
}
