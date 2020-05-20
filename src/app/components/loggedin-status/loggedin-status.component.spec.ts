import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoggedinStatusComponent} from './loggedin-status.component';

describe('LoginStatusComponent', () => {
  let component: LoggedinStatusComponent;
  let fixture: ComponentFixture<LoggedinStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoggedinStatusComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedinStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
