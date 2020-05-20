import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MinecraftServerComponent} from './minecraft-server.component';

describe('MinecraftServerComponent', () => {
  let component: MinecraftServerComponent;
  let fixture: ComponentFixture<MinecraftServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MinecraftServerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinecraftServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
