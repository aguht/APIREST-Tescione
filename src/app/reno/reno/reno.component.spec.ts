import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenoComponent } from './reno.component';

describe('RenoComponent', () => {
  let component: RenoComponent;
  let fixture: ComponentFixture<RenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
