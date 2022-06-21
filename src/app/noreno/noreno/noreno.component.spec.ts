import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorenoComponent } from './noreno.component';

describe('NorenoComponent', () => {
  let component: NorenoComponent;
  let fixture: ComponentFixture<NorenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NorenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
