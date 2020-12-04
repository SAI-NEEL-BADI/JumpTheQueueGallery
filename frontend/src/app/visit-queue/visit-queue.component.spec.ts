import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitQueueComponent } from './visit-queue.component';

describe('VisitQueueComponent', () => {
  let component: VisitQueueComponent;
  let fixture: ComponentFixture<VisitQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
