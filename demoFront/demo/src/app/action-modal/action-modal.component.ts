import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApplicationServiceService} from "../services/application-service.service";

@Component({
  selector: 'app-action-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: ['./action-modal.component.scss']
})
export class ActionModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ActionModalComponent>,
    private service:ApplicationServiceService,

    @Inject(MAT_DIALOG_DATA) public data?: any,
  ) {
    dialogRef.disableClose = true;
  }

  onNoClick(): void {
    this.service.removeAgent(this.data.userId,this.data).subscribe(()=>{

    });
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
