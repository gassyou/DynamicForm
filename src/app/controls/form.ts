import { ControlInterface } from './contol.interface';
import { SFSchema, SFUISchemaItem, SFSchemaType } from '@delon/form';

export class DynamicForm {

  grid = 1;
  controls: ControlInterface[];

  getForm(): SFSchema {

    const form: SFSchema = {properties: {}, ui: {}, required: []};
    const formUI: SFUISchemaItem = {grid: {span: 1}};

    this.controls.forEach(
      item => {

        const control: SFSchema =  {
          title: item.title,
          type: item.type as SFSchemaType,
          enum: item.enum,
          ui: item.ui
        };

        form.properties[item.key] = control;

        if (item.isRequired) {
          form.required.push(item.key);
        }
      }
    );

    formUI.grid.span = 24 / this.grid;
    form.ui = formUI;

    return form;

  }


}
