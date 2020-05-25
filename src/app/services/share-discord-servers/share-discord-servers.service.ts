import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {DiscordServer} from "../../_models/DiscordServer";

@Injectable({
  providedIn: 'root'
})
export class ShareDiscordServersService {

  private servers = new BehaviorSubject([]);
  sharedServers = this.servers.asObservable()

  constructor() { }

  nextMessage(servers: DiscordServer[]) {
    this.servers.next(servers)
  }
}
