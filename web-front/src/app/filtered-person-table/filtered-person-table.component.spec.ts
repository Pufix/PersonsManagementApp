import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredPersonTableComponent } from './filtered-person-table.component';

describe('FilteredPersonTableComponent', () => {
  let component: FilteredPersonTableComponent;
  let fixture: ComponentFixture<FilteredPersonTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteredPersonTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilteredPersonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
