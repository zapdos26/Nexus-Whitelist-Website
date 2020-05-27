import { TestBed } from '@angular/core/testing';

import { ShareGameServersService } from './share-game-servers.service';

describe('ShareGameServersService', () => {
  let service: ShareGameServersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareGameServersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
