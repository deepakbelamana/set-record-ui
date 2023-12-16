import { TestBed } from '@angular/core/testing';

import { SetRecordApiService } from './set-record-api.service';

describe('SetRecordApiService', () => {
  let service: SetRecordApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetRecordApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
