import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupDownloadComponent } from './startup-download.component';

describe('StartupDownloadComponent', () => {
  let component: StartupDownloadComponent;
  let fixture: ComponentFixture<StartupDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StartupDownloadComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
