import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidaServiceComponent } from './aida-service.component';

describe('AidaServiceComponent', () => {
  let component: AidaServiceComponent;
  let fixture: ComponentFixture<AidaServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidaServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
