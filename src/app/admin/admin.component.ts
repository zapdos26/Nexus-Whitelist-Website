import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  serversDiscord: any = ['Testing (123)'];
  serversMinecraft: any = ['Minecraft Server (124)', 'Test (125)'];
  serversArk: any = ['ArkTest (126)'];
  discordUsername = 'Zapdos26';
  discordDiscriminator = '2632';
  discordAvatar = 'https://cdn.discordapp.com/avatars/136925587120979969/281235cce0fa4399db91c1e16810695e.png';

  showAdminOther = false;
  oppoSuitsForm = this.fb.group({
    name: ['']
  });

  constructor(public fb: FormBuilder) {
  }

  ngOnInit() {
  }

  toggleAdminSettings() {
    this.showAdminOther = !this.showAdminOther;
  }
}
