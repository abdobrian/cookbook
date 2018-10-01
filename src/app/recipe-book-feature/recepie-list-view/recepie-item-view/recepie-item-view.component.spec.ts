import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieItemViewComponent } from './recepie-item-view.component';

describe('RecepieItemViewComponent', () => {
  let component: RecepieItemViewComponent;
  let fixture: ComponentFixture<RecepieItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepieItemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepieItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
