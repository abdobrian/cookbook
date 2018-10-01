import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieListViewComponent } from './recepie-list-view.component';

describe('RecepieListViewComponent', () => {
  let component: RecepieListViewComponent;
  let fixture: ComponentFixture<RecepieListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepieListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepieListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
