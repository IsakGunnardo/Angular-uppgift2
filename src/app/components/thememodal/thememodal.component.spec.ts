import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThememodalComponent } from './thememodal.component';

describe('ThememodalComponent', () => {
  let component: ThememodalComponent;
  let fixture: ComponentFixture<ThememodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThememodalComponent]
    });
    fixture = TestBed.createComponent(ThememodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
