import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form/form.component';
import { DelonFormModule } from '@delon/form';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    NgZorroAntdModule,
    DelonFormModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DynamicFormModule { }
