import { TestBed } from '@angular/core/testing';

import { FilteredFetchPersonsService } from './filtered-fetch-persons.service';

describe('FilteredFetchPersonsService', () => {
  let service: FilteredFetchPersonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilteredFetchPersonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
