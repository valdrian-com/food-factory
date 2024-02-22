import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkSpacePage } from './work-space.page';

describe('WorkSpacePage', () => {
  let component: WorkSpacePage;
  let fixture: ComponentFixture<WorkSpacePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WorkSpacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
