import { TestBed } from '@angular/core/testing';

import { MovieIdService } from './movie-id.service';

describe('MovieIdService', () => {
  let service: MovieIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
