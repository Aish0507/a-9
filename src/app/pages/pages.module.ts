import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { WidgetModule } from '@shared/widget/widget.module';
import { UIModule } from '@shared/ui/ui.module';

import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    UIModule,
    WidgetModule
  ]
})
export class PagesModule { }
