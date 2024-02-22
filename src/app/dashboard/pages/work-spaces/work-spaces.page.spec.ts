import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkSpacesPage } from './work-spaces.page';

describe('WorkSpacesPage', () => {
  let component: WorkSpacesPage;
  let fixture: ComponentFixture<WorkSpacesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WorkSpacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
