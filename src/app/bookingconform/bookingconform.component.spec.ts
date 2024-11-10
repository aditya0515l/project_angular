import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingconformComponent } from './bookingconform.component';

describe('BookingconformComponent', () => {
  let component: BookingconformComponent;
  let fixture: ComponentFixture<BookingconformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingconformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingconformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
