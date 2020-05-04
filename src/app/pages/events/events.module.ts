import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { UIModule } from '@shared/ui/ui.module';
import { AllMaterialModule } from '@shared/all-material/all-material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    UIModule,
    AllMaterialModule,
    NgxDatatableModule
  ]
})
export class EventsModule { }
