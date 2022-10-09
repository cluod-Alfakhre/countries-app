import { TestBed } from '@angular/core/testing';

import { PassItemService } from './pass-item.service';

describe('PassItemService', () => {
  let service: PassItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
