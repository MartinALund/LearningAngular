import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPlaygroundComponent } from './mat-playground.component';

describe('MatPlaygroundComponent', () => {
  let component: MatPlaygroundComponent;
  let fixture: ComponentFixture<MatPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
