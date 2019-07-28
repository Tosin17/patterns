import { TestBed } from '@angular/core/testing';

import { DecoratorService } from './decorator.service';

describe('DecoratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DecoratorService = TestBed.get(DecoratorService);
    expect(service).toBeTruthy();
  });
});
