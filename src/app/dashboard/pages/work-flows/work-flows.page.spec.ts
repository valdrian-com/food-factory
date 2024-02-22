import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkFlowsPage } from './work-flows.page';

describe('WorkFlowsPage', () => {
  let component: WorkFlowsPage;
  let fixture: ComponentFixture<WorkFlowsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WorkFlowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
