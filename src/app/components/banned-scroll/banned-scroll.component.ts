import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-banned-scroll',
  templateUrl: './banned-scroll.component.html',
  styleUrls: ['./banned-scroll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class BannedScrollComponent implements OnInit {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor() {
  }

  ngOnInit() {
  }

}
