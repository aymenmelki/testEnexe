import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApplicationServiceService} from "../services/application-service.service";

@Component({
  selector: 'app-add-agent-modal',
  templateUrl: './add-agent-modal.component.html',
  styleUrls: ['./add-agent-modal.component.scss']
})
export class AddAgentModalComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddAgentModalComponent>,
              private service:ApplicationServiceService,
@Inject(MAT_DIALOG_DATA) public data?: any,
  ) {

    this.formGroup = this.formBuilder.group({
      userId: [(Math.floor(Math.random()*90000) + 10000).toString(), []],
      username: [null, [Validators.required]],
      fullname: [
        null,
        [Validators.required],
      ],
      gender: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      dateOfBirth: [null, [Validators.required]],
      createdAt: [new Date(), []],
      userAddress:this.formBuilder.group({
        country:[null, Validators.required],
        state:[null, Validators.required],
        addressLine:[null, Validators.required],
        zipCode:[null, Validators.required],
      }),
      userContact:this.formBuilder.group({
        phonePrefix:[null, Validators.required],
        phoneNumber:[null, Validators.required],
        landlinePr:[null, []],
        landlineNumber:[null, []],
      })
    });
    dialogRef.disableClose = true;

  }

  ngOnInit(): void {

  }
  save(): void {
    this.service.addAgent(this.formGroup.value).subscribe(()=>{
     this.dialogRef.close();
    },err=>{
      console.error(err)
      this.dialogRef.close();
    })

  }
}
