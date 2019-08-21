import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { FormConfigComponent } from './form-config/form-config.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormConfigComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ConfigRoutingModule,
    ReactiveFormsModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormConfigComponent]
})
export class ConfigModule { }
