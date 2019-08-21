import { ControlInterface } from './contol.interface';
import { SFUISchemaItem, SFNumberWidgetSchema } from '@delon/form';

export class InputNumberControl implements ControlInterface {
  key: string;
  title: string;
  type: string;
  isRequired: boolean;
  enum: any[];
  readonly ui: SFUISchemaItem;

  constructor() {
    this.ui = { widget: 'number' };
  }
}
