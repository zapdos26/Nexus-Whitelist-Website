import {Component, Input, OnInit} from '@angular/core';
import {GameServer} from "../../../_models/GameServer";
import {ShareGameServersService} from "../../../services/share-game-servers/share-game-servers.service";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-game-server',
  templateUrl: './game-server.component.html',
  styleUrls: ['./game-server.component.scss']
})
export class GameServerComponent implements OnInit {

  @Input()
  server: GameServer = new GameServer()

  servers: GameServer[]

  constructor(private sharedGameServers: ShareGameServersService, private http: HttpClient, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.sharedGameServers.sharedServers.subscribe(servers => this.servers = servers)
    console.log(this.server)
  }

  onSubmit() {
    if (this.server.id == null) {
      this.http.post(environment.apiUrl + '/admin/current/game/', this.server, {
        headers: {
          "Authorization": `Bearer ${this.cookieService.get('token')}`
        }
      }).subscribe(data => {
        alert('Game Server Added')
        window.location.reload()
      })
    }
    else {
      this.http.patch(environment.apiUrl + '/admin/current/game/', this.server, {
        headers: {
          "Authorization": `Bearer ${this.cookieService.get('token')}`
        }
      }).subscribe(data => {
        alert('Game Server Edited')
        const servers = this.servers.filter(server => server.id != this.server.id)
        servers.push(this.server)
        this.sharedGameServers.nextMessage(servers)
      })
    }
  }

  onDelete() {
    if (confirm("Are you sure you want to delete the following game server?")) {
      this.http.delete(environment.apiUrl + '/admin/current/game/', {
        headers: {
          "Authorization": `Bearer ${this.cookieService.get('token')}`
        },
        params: {
          id: this.server.id
        }
      }).subscribe(data => {
        alert('Game Server Deleted')
        window.location.reload()
      })
    }
  }
}
