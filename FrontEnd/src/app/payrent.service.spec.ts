import { TestBed } from '@angular/core/testing';

import { PayrentService } from './payrent.service';

describe('PayrentService', () => {
  let service: PayrentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayrentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
