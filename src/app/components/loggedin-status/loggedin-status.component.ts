import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-loggedin-status',
  templateUrl: './loggedin-status.component.html',
  styleUrls: ['./loggedin-status.component.scss']
})
export class LoggedinStatusComponent implements OnInit {
  discordUsername:string;
  discordDiscriminator:string;
  discordAvatar:string;

  constructor(private router:Router, private cookieService:CookieService) {
    const user = JSON.parse(sessionStorage.getItem('discord'))
    this.discordUsername = user.username
    this.discordDiscriminator= user.discriminator
    this.discordAvatar = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
  }

  ngOnInit() {
  }

  logout() {
    this.cookieService.delete('token', '/')
    this.router.navigate(['/login']).then()
  }

}
