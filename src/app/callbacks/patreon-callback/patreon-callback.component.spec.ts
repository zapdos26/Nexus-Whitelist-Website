import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatreonCallbackComponent } from './patreon-callback.component';

describe('PatreonCallbackComponent', () => {
  let component: PatreonCallbackComponent;
  let fixture: ComponentFixture<PatreonCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatreonCallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatreonCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
