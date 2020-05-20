import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-service-status',
  templateUrl: './service-status.component.html',
  styleUrls: ['./service-status.component.scss']
})
export class ServiceStatusComponent implements OnInit {

  @Input()
  serviceName: string;
  @Input()
  serviceLogo: string;
  @Input()
  serviceColor: string;
  @Input()
  serviceLink: string;

  constructor() {
  }

  private _serviceLinked = true;

  @Input('serviceLinked')
  get serviceLinked(): boolean {
    return this._serviceLinked;
  }

  set serviceLinked(value: boolean) {
    this._serviceLinked = '' + value !== 'false';
  }

  ngOnInit() {

  }

}
