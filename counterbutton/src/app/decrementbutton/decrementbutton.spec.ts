import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decrementbutton } from './decrementbutton';

describe('Decrementbutton', () => {
  let component: Decrementbutton;
  let fixture: ComponentFixture<Decrementbutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Decrementbutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Decrementbutton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
