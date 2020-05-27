import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatreonCallbackAdminComponent } from './patreon-callback-admin.component';

describe('PatreonCallbackAdminComponent', () => {
  let component: PatreonCallbackAdminComponent;
  let fixture: ComponentFixture<PatreonCallbackAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatreonCallbackAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatreonCallbackAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
