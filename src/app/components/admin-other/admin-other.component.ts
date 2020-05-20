import {Component, Input, OnInit} from '@angular/core';
import {AdminSettings} from '../../_models/AdminSettings';

@Component({
  selector: 'app-admin-other',
  templateUrl: './admin-other.component.html',
  styleUrls: ['./admin-other.component.scss']
})
export class AdminOtherComponent implements OnInit {

  settings: AdminSettings = {
    token: 'TEST!@$%$#@#T$@R#!'
  };

  @Input()
  showAdminOther: boolean;

  hide = true;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.settings.token = 'TEWDFDGTRWSDWE';
  }

}
