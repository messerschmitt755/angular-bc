import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JediUpdateComponent } from './jedi-update.component';

describe('JediUpdateComponent', () => {
  let component: JediUpdateComponent;
  let fixture: ComponentFixture<JediUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JediUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JediUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
