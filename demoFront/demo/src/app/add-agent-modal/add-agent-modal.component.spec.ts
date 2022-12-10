import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAgentModalComponent } from './add-agent-modal.component';

describe('AddAgentModalComponent', () => {
  let component: AddAgentModalComponent;
  let fixture: ComponentFixture<AddAgentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAgentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAgentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
