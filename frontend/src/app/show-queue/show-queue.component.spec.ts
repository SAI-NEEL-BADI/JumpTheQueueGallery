import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQueueComponent } from './show-queue.component';

describe('ShowQueueComponent', () => {
  let component: ShowQueueComponent;
  let fixture: ComponentFixture<ShowQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
