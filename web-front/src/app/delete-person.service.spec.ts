import { TestBed } from '@angular/core/testing';

import { DeletePersonService } from './delete-person.service';

describe('DeletePersonService', () => {
  let service: DeletePersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletePersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
