import { TestBed } from '@angular/core/testing';

import { LeaveQueueService } from './leave-queue.service';

describe('LeaveQueueService', () => {
  let service: LeaveQueueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveQueueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
