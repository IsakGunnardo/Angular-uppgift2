import { TestBed } from '@angular/core/testing';

import { BloggService } from './blogg.service';

describe('BloggService', () => {
  let service: BloggService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloggService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
