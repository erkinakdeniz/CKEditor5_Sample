import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyckeComponent } from './readonlycke.component';

describe('ReadonlyckeComponent', () => {
  let component: ReadonlyckeComponent;
  let fixture: ComponentFixture<ReadonlyckeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadonlyckeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadonlyckeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
