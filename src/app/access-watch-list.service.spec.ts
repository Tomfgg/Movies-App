import { TestBed } from '@angular/core/testing';

import { AccessWatchListService } from './access-watch-list.service';

describe('AccessWatchListService', () => {
  let service: AccessWatchListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessWatchListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
