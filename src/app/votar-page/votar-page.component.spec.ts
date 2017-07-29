import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotarPageComponent } from './votar-page.component';

describe('VotarPageComponent', () => {
  let component: VotarPageComponent;
  let fixture: ComponentFixture<VotarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
