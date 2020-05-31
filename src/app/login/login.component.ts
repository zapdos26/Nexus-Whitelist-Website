import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  checked = false;
  currentColor = '#D3D3D3';
  url = "https://discord.com/api/oauth2/authorize?&response_type=code&scope=identify email" +
    "&client_id=" + environment.discordClientId +
    "&redirect_uri=" + environment.domain +  "/callback%2Fdiscord" +
    "&state=" + sessionStorage.getItem('state')

  constructor() {
  }

  ngOnInit() {
  }

  onCheck() {
    this.checked = !this.checked;
    this.currentColor = (this.checked === true) ? 'white' : '#D3D3D3';
  }
}
