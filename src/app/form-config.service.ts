import { Injectable } from '@angular/core';
import { SFSchema } from '@delon/form';
import { DynamicForm } from './controls/form';

@Injectable({
  providedIn: 'root'
})
export class FormConfigService {

  form: DynamicForm = new DynamicForm();

  constructor() {
    this.form.controls = [];
   }


}
