import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBookFeatureComponent } from './recipe-book-feature.component';

describe('RecipeBookFeatureComponent', () => {
  let component: RecipeBookFeatureComponent;
  let fixture: ComponentFixture<RecipeBookFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeBookFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeBookFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
