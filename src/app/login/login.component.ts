import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  checked = false;
  currentColor = '#D3D3D3';
  borderColor = '#667fd7';

  constructor() {
  }

  ngOnInit() {
  }

  onCheck() {
    this.checked = !this.checked;
    this.currentColor = (this.checked === true) ? 'white' : '#D3D3D3';
  }
}
