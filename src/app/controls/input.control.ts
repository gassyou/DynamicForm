import { ControlInterface } from './contol.interface';
import { SFUISchemaItem } from '@delon/form';

export class InputControl implements ControlInterface {
  key: string;
  title: string;
  type: string;
  isRequired: boolean;
  enum: any[];
  readonly ui: SFUISchemaItem;

  constructor() {
    this.ui = { widget: 'string' };
  }


}
