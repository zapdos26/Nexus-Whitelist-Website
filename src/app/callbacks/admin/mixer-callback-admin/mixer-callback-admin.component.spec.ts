import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixerCallbackAdminComponent } from './mixer-callback-admin.component';

describe('MixerCallbackAdminComponent', () => {
  let component: MixerCallbackAdminComponent;
  let fixture: ComponentFixture<MixerCallbackAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixerCallbackAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixerCallbackAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
