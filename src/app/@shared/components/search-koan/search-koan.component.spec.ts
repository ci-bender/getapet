import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchKoanComponent } from './search-koan.component';

describe('SearchKoanComponent', () => {
  let component: SearchKoanComponent;
  let fixture: ComponentFixture<SearchKoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchKoanComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchKoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
