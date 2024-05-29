import { TestBed } from '@angular/core/testing';

import { FetchPersonsService } from './fetch-persons.service';

describe('FetchPersonsService', () => {
  let service: FetchPersonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchPersonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
