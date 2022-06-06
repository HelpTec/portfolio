import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesItemComponent } from './redes-item.component';

describe('RedesItemComponent', () => {
  let component: RedesItemComponent;
  let fixture: ComponentFixture<RedesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
