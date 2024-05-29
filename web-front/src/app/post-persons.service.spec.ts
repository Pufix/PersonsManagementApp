import { TestBed } from '@angular/core/testing';

import { PostPersonsService } from './post-persons.service';

describe('PostPersonsService', () => {
  let service: PostPersonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostPersonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
