import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachesComponent } from './beaches.component';

describe('BeachesComponent', () => {
  let component: BeachesComponent;
  let fixture: ComponentFixture<BeachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeachesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
