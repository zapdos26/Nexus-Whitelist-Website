import {Component, Input, OnInit} from '@angular/core';
import {DiscordServer} from "../../../_models/DiscordServer";
import {ShareDiscordServersService} from "../../../services/share-discord-servers/share-discord-servers.service";
import {DiscordRole} from "../../../_models/DiscordRole";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-discord-role',
  templateUrl: './discord-role.component.html',
  styleUrls: ['./discord-role.component.scss']
})
export class DiscordRoleComponent implements OnInit {

  @Input()
  role: DiscordRole

  servers: DiscordServer[]


  constructor(private sharedDiscordServers: ShareDiscordServersService, private http:HttpClient, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.sharedDiscordServers.sharedServers.subscribe(servers => this.servers = servers)
  }
  onSubmit(): void {
    this.http.put(environment.apiUrl + '/admin/current/discord/role', this.role, {
      headers: {
        "Authorization": `Bearer ${this.cookieService.get('token')}`
      }
    }).subscribe(data => {
      alert('Test')
    })
  }

}
