import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordServersComponent } from './discord-servers.component';

describe('DiscordServersComponent', () => {
  let component: DiscordServersComponent;
  let fixture: ComponentFixture<DiscordServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscordServersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscordServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
