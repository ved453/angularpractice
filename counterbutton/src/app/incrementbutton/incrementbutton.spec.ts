import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Incrementbutton } from './incrementbutton';

describe('Incrementbutton', () => {
  let component: Incrementbutton;
  let fixture: ComponentFixture<Incrementbutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Incrementbutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Incrementbutton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
