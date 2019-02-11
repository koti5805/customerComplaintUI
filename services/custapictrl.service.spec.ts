import { TestBed } from '@angular/core/testing';

import { CustapictrlService } from './custapictrl.service';

describe('CustapictrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustapictrlService = TestBed.get(CustapictrlService);
    expect(service).toBeTruthy();
  });
});
