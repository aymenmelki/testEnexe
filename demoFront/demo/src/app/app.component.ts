import { Component } from '@angular/core';
import {AddAgentModalComponent} from "./add-agent-modal/add-agent-modal.component";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  constructor(

  ) {}

}
