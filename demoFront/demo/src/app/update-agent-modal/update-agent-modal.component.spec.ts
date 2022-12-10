import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAgentModalComponent } from './update-agent-modal.component';

describe('UpdateAgentModalComponent', () => {
  let component: UpdateAgentModalComponent;
  let fixture: ComponentFixture<UpdateAgentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAgentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAgentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
