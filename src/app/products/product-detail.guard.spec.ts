import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ProductDetailGuard } from './product-detail.guard';

describe('productDetailGuard', () => {
  let guard: ProductDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
