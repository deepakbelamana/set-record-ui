import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOutCategoryComponent } from './work-out-category.component';

describe('WorkOutCategoryComponent', () => {
  let component: WorkOutCategoryComponent;
  let fixture: ComponentFixture<WorkOutCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOutCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkOutCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
