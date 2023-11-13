import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemodalComponent } from './sidemodal.component';

describe('SidemodalComponent', () => {
  let component: SidemodalComponent;
  let fixture: ComponentFixture<SidemodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidemodalComponent]
    });
    fixture = TestBed.createComponent(SidemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
