import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioIndicatorComponent } from './radio-indicator.component';

describe('RadioIndicatorComponent', () => {
  let component: RadioIndicatorComponent;
  let fixture: ComponentFixture<RadioIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioIndicatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
