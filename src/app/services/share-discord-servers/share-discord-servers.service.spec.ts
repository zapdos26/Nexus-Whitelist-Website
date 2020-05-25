import { TestBed } from '@angular/core/testing';

import { ShareDiscordServersService } from './share-discord-servers.service';

describe('ShareDiscordServersService', () => {
  let service: ShareDiscordServersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareDiscordServersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
