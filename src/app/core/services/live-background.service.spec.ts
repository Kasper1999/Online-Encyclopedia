import { TestBed, inject } from '@angular/core/testing';

import { LiveBackgroundService } from './live-background.service';

describe('LiveBackgroundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiveBackgroundService]
    });
  });

  it('should be created', inject([LiveBackgroundService], (service: LiveBackgroundService) => {
    expect(service).toBeTruthy();
  }));
});
