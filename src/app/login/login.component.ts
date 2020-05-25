import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  checked = false;
  currentColor = '#D3D3D3';
  url = "https://discord.com/api/oauth2/authorize?client_id=678441195927502872" +
    "&redirect_uri=http%3A%2F%2Flvh.me%2Fcallback%2Fdiscord" +
    "&response_type=code&scope=identify email&state=" + sessionStorage.getItem('state')

  constructor() {
  }

  ngOnInit() {
  }

  onCheck() {
    this.checked = !this.checked;
    this.currentColor = (this.checked === true) ? 'white' : '#D3D3D3';
  }
}
