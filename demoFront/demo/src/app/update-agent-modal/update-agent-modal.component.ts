import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApplicationServiceService} from "../services/application-service.service";

@Component({
  selector: 'app-update-agent-modal',
  templateUrl: './update-agent-modal.component.html',
  styleUrls: ['./update-agent-modal.component.scss']
})
export class UpdateAgentModalComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<UpdateAgentModalComponent>,
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
      createdAt: [null, []],
      userAddress:[],
      userContact:[]
    });
    dialogRef.disableClose = true;

  }

  ngOnInit(): void {
this.formGroup.setValue(this.data);
  }

  update():void{
    this.service.updateAgent(this.data.userId,this.formGroup.value).subscribe(()=>{
      this.dialogRef.close();
    },err=>{
      console.error(err)
      this.dialogRef.close();
    })
  }

}
