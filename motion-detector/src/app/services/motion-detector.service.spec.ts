import { TestBed } from '@angular/core/testing';

import { MotionDetectorService } from './motion-detector.service';

describe('MotionDetectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotionDetectorService = TestBed.get(MotionDetectorService);
    expect(service).toBeTruthy();
  });
});
