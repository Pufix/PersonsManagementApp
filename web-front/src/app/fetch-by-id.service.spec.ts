import { TestBed } from '@angular/core/testing';

import { FetchByIdService } from './fetch-by-id.service';

describe('FetchByIdService', () => {
  let service: FetchByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
