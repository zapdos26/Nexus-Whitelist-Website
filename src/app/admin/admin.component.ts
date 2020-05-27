import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {DiscordServer} from "../_models/DiscordServer";
import {ShareDiscordServersService} from "../services/share-discord-servers/share-discord-servers.service";
import {ShareGameServersService} from "../services/share-game-servers/share-game-servers.service";
import {GameServer} from "../_models/GameServer";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  admin: Object = {patreonAccessToken: 0, twitchAccessToken:0, mixerAccessToken: 0}
  discordServers: DiscordServer[]
  gameServers: GameServer[]

  constructor(private http:HttpClient, private router: Router,private cookieService: CookieService,
              private sharedDiscordServers: ShareDiscordServersService,
              private sharedGameServers: ShareGameServersService) {
    this.http.get(environment.apiUrl+ '/admin/current' ,{
      headers: {
        "Authorization": `Bearer ${this.cookieService.get('token')}`
      }
    }).subscribe(data => {
      if (data['admin'] != true) {
        this.router.navigate(['/admin/agreement']).then()
      }
      this.admin = data
    })
  }

  ngOnInit() {
    this.sharedDiscordServers.sharedServers.subscribe(servers => this.discordServers = servers)
    this.sharedGameServers.sharedServers.subscribe(servers => this.gameServers = servers)
    this.http.get(environment.apiUrl+ '/admin/current/discord/servers' ,{
      headers: {
        "Authorization": `Bearer ${this.cookieService.get('token')}`
      }
    }).subscribe(data => {
      this.sharedDiscordServers.nextMessage(<DiscordServer[]> data)
    })
    this.http.get(environment.apiUrl+ '/admin/current/game/all' ,{
      headers: {
        "Authorization": `Bearer ${this.cookieService.get('token')}`
      }
    }).subscribe(data => {
      this.sharedGameServers.nextMessage(<GameServer[]> data)
    })
  }
}
