import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RawMaterialPage } from './raw-material.page';

describe('RawMaterialPage', () => {
  let component: RawMaterialPage;
  let fixture: ComponentFixture<RawMaterialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RawMaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
