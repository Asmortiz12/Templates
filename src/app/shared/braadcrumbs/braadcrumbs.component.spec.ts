import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraadcrumbsComponent } from './braadcrumbs.component';

describe('BraadcrumbsComponent', () => {
  let component: BraadcrumbsComponent;
  let fixture: ComponentFixture<BraadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BraadcrumbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BraadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
