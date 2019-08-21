import { ControlInterface } from './contol.interface';
import { SFUISchemaItem, SFDateWidgetSchema } from '@delon/form';

export class DateControl implements ControlInterface {
  key: string;
  title: string;
  type: string;
  isRequired: boolean;
  enum: any[];
  readonly ui: SFUISchemaItem;

  constructor() {
    this.ui = { widget: 'date' };
  }

}
