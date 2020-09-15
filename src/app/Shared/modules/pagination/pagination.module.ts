import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './component/pagination.component';



@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule,RouterModule],
  exports: [PaginationComponent],
})
export class PaginationModule {}
