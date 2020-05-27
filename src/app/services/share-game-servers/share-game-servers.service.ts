import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {GameServer} from "../../_models/GameServer";

@Injectable({
  providedIn: 'root'
})
export class ShareGameServersService {

  private servers = new BehaviorSubject([]);
  sharedServers = this.servers.asObservable()

  constructor() { }

  nextMessage(servers: GameServer[]) {
    this.servers.next(servers)
  }
}
