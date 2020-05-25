import {Component, OnInit} from '@angular/core';
import {MinecraftServer} from '../../_models/MinecraftServer';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-minecraft-server',
  templateUrl: './minecraft-server.component.html',
  styleUrls: ['./minecraft-server.component.scss']
})
export class MinecraftServerComponent implements OnInit {

  server: MinecraftServer = {
    name: 'Test123',
    ip: '127.0.0.1',
    port: 80,
    password: 'Test',
    patreon: {autosync: true, minimum: 0},
    twitch: {autosync: false, follow: 0, prime: 0, 1000: 0, 2000: 1, 3000: 1},
    mixer: {autosync: false, follow: 0, subscribe: 1},
    youtube: {autosync: true, subscribe: 1, member: 0}
  };

  serverForm: FormGroup = new FormGroup({
    name: new FormControl(this.server.name,
      [Validators.required]
    ),
    ip: new FormControl(this.server.ip,
      [Validators.required]
    ),
    port: new FormControl(this.server.port,
      [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]
    ),
    password: new FormControl(this.server.password,
      [Validators.required, Validators.minLength(8)]
    ),
    patreonAutosync: new FormControl(this.server.patreon.autosync),
    patreonMinimum: new FormControl(this.server.patreon.minimum,
      [Validators.min(0)]
    ),
    twitchAutosync: new FormControl(this.server.twitch.autosync),
    twitchFollow: new FormControl(this.server.twitch.follow),
    twitchPrime: new FormControl(this.server.twitch.prime),
    twitch1000: new FormControl(this.server.twitch['1000']),
    twitch2000: new FormControl(this.server.twitch['2000']),
    twitch3000: new FormControl(this.server.twitch['3000']),
    mixerAutosync: new FormControl(this.server.mixer.autosync),
    mixerFollow: new FormControl(this.server.mixer.follow),
    mixerSubscribe: new FormControl(this.server.mixer.subscribe),
    youtubeAutosync: new FormControl(this.server.youtube.autosync),
    youtubeSubscribe: new FormControl(this.server.youtube.subscribe),
    youtubeMember: new FormControl(this.server.youtube.member),
  });
  hide = true;

  constructor() {
  }

  get passwordInput() {
    return this.serverForm.get('password');
  }

  ngOnInit() {
  }

  onRegisterSubmit() {
    console.warn(this.serverForm.value);
  }
}
