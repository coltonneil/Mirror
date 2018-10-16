import { TestBed } from '@angular/core/testing';

import { FooterLinksService } from './footer-links.service';

describe('FooterLinksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FooterLinksService = TestBed.get(FooterLinksService);
    expect(service).toBeTruthy();
  });
});
