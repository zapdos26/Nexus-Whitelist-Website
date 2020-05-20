import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BannedScrollComponent} from './banned-scroll.component';

describe('BannedScrollComponent', () => {
  let component: BannedScrollComponent;
  let fixture: ComponentFixture<BannedScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BannedScrollComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannedScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
