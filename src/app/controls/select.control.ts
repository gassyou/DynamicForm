import { ControlInterface } from './contol.interface';
import { SFUISchemaItem, SFSelectWidgetSchema } from '@delon/form';

export class SelectControl implements ControlInterface {
  key: string;
  title: string;
  type: string;
  isRequired: boolean;
  enum: any[];
  readonly ui: SFUISchemaItem;

  constructor() {
    this.ui = { widget: 'select' };
  }


}
