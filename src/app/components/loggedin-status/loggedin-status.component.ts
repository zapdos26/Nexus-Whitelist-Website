import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-loggedin-status',
  templateUrl: './loggedin-status.component.html',
  styleUrls: ['./loggedin-status.component.scss']
})
export class LoggedinStatusComponent implements OnInit {


  @Input()
  discordUsername: string;

  @Input()
  discordDiscriminator: string;

  @Input()
  discordAvatar: string;

  constructor() {
  }

  ngOnInit() {
  }

}
