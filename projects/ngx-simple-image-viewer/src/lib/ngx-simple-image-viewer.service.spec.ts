import { TestBed } from '@angular/core/testing';

import { NgxSimpleImageViewerService } from './ngx-simple-image-viewer.service';

describe('NgxSimpleImageViewerService', () => {
  let service: NgxSimpleImageViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSimpleImageViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
