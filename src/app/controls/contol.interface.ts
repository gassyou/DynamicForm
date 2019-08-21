import { SFUISchemaItem, SFSchema } from '@delon/form';

export interface ControlInterface {
  key: string;
  title: string;
  type: string;
  isRequired: boolean;
  enum: any[];
  readonly ui: SFUISchemaItem;
}
