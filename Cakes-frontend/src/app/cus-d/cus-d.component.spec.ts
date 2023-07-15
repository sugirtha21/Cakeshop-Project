import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusDComponent } from './cus-d.component';

describe('CusDComponent', () => {
  let component: CusDComponent;
  let fixture: ComponentFixture<CusDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
