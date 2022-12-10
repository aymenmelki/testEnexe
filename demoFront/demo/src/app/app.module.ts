import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentsTableComponent } from './agents-table/agents-table.component';
import { AddAgentModalComponent } from './add-agent-modal/add-agent-modal.component';
import { UpdateAgentModalComponent } from './update-agent-modal/update-agent-modal.component';
import { ActionModalComponent } from './action-modal/action-modal.component';
import {MaterialModule} from "./shared-module/material.module";
import {SharedModule} from "./shared-module/shared-module.module";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../environments/environment";
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentsTableComponent,
    AddAgentModalComponent,
    UpdateAgentModalComponent,
    ActionModalComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
