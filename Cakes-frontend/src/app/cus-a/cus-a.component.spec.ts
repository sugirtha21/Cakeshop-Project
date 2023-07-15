import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusAComponent } from './cus-a.component';

describe('CusAComponent', () => {
  let component: CusAComponent;
  let fixture: ComponentFixture<CusAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
