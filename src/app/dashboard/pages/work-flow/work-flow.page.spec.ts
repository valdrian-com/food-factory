import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkFlowPage } from './work-flow.page';

describe('WorkFlowPage', () => {
  let component: WorkFlowPage;
  let fixture: ComponentFixture<WorkFlowPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WorkFlowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
