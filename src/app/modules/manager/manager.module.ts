import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { ManagerRoutingModule } from "./manager-routing.module";
import { ManagerComponent } from "./manager.component";
import { NgLetModule } from 'ng-let';
import { ManagerNavComponent } from "./nav/manager-nav.component";
import { BBRegisterComponent } from "./pages/bb-register/bb-register.component";
import { FeedbackComponent } from "./pages/feedback/feedback.component";
import { BloodBankService } from "./services/blood-bank.service";
import { ManagerService } from "./services/manager.service";
import { GenericDataService } from "./services/generic-data.service";

@NgModule({
  providers:[BloodBankService, ManagerService, GenericDataService],
  declarations: [
    ManagerComponent, 
    FeedbackComponent,
    BBRegisterComponent,
    ManagerNavComponent,
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    NgLetModule
  ]
})
export class ManagerModule { }