import { TestBed } from '@angular/core/testing';

import { MenuPermitionsService } from './menu-permitions.service';

describe('MenuPermitionsService', () => {
  let service: MenuPermitionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuPermitionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
