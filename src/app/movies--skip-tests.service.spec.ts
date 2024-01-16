import { TestBed } from '@angular/core/testing';

import { MoviesSkipTestsService } from './movies--skip-tests.service';

describe('MoviesSkipTestsService', () => {
  let service: MoviesSkipTestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesSkipTestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
