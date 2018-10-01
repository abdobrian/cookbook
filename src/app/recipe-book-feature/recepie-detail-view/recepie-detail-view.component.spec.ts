import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieDetailViewComponent } from './recepie-detail-view.component';

describe('RecepieDetailViewComponent', () => {
  let component: RecepieDetailViewComponent;
  let fixture: ComponentFixture<RecepieDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepieDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepieDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
