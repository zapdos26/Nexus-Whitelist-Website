import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchCallbackAdminComponent } from './twitch-callback-admin.component';

describe('TwitchCallbackAdminComponent', () => {
  let component: TwitchCallbackAdminComponent;
  let fixture: ComponentFixture<TwitchCallbackAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitchCallbackAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchCallbackAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
