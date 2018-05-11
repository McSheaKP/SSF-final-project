import { TestBed, inject } from '@angular/core/testing';

import { StockfilterService } from './stockfilter.service';

describe('StockfilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockfilterService]
    });
  });

  it('should be created', inject([StockfilterService], (service: StockfilterService) => {
    expect(service).toBeTruthy();
  }));
});
