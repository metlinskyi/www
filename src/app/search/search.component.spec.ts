import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: AppSearchComponent;
  let fixture: ComponentFixture<AppSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
