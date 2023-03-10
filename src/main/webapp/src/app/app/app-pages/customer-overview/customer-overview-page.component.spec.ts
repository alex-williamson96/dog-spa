import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOverviewPageComponent } from './customer-overview-page.component';

describe('CustomerOverviewPageComponent', () => {
  let component: CustomerOverviewPageComponent;
  let fixture: ComponentFixture<CustomerOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOverviewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
