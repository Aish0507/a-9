import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbCollapseModule, NgbDatepickerModule, NgbTimepickerModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';

import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { RouterModule } from '@angular/router';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [PagetitleComponent, MaintenanceComponent],
  imports: [
    CommonModule,
    FormsModule,
    ClickOutsideModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbDropdownModule,
    RouterModule
  ],
  // tslint:disable-next-line: max-line-length
  exports: [PagetitleComponent, MaintenanceComponent]
})
export class UIModule { }
