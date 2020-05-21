import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatRadiobuttonComponent } from './mat-radiobutton.component';

describe('MatRadiobuttonComponent', () => {
  let component: MatRadiobuttonComponent;
  let fixture: ComponentFixture<MatRadiobuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatRadiobuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatRadiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
