import { Component, OnInit } from '@angular/core';
import {ApplicationServiceService} from "../services/application-service.service";
import {Observable} from "rxjs";
import {AddAgentModalComponent} from "../add-agent-modal/add-agent-modal.component";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {UpdateAgentModalComponent} from "../update-agent-modal/update-agent-modal.component";
import {ActionModalComponent} from "../action-modal/action-modal.component";

@Component({
  selector: 'app-agents-table',
  templateUrl: './agents-table.component.html',
  styleUrls: ['./agents-table.component.scss']
})
export class AgentsTableComponent implements OnInit {
  public agents$: Observable<any[]>;

  constructor(private service:ApplicationServiceService,    private route: Router,
              public dialog: MatDialog) {
    this.agents$ = this.service.getAgents();

  }

  ngOnInit(): void {
  }



  updateAgent(agent:any):void{
    const dialogRef = this.dialog.open(UpdateAgentModalComponent, {
      width: '80%',
      data: agent,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == undefined) {
        this.agents$ = this.service.getAgents();
        console.log(result)
      }
    });
  }
  DeleteAgent(agent:any):void{
    const dialogRef = this.dialog.open(ActionModalComponent, {
      width: '25%',
      data: agent,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == undefined) {

        this.agents$ = this.service.getAgents();
        console.log(result)
      }
    });
  }
  addAgent():void{
    const dialogRef = this.dialog.open(AddAgentModalComponent, {
      width: '80%',
      data: { name: 'Class Room', action: 'delete' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == undefined) {
        this.agents$ = this.service.getAgents();
        console.log(result)
      }
    });
  }

}
