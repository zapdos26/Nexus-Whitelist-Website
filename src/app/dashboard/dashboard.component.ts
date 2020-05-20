import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  discordUsername = 'Zapdos26';
  discordDiscriminator = '2632';
  discordAvatar = 'https://cdn.discordapp.com/avatars/136925587120979969/281235cce0fa4399db91c1e16810695e.png';


  constructor() {
  }

  ngOnInit() {
  }

}
