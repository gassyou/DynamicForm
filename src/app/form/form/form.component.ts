import { Component, OnInit } from '@angular/core';
import { SFSchema } from '@delon/form';
import { FormConfigService } from 'src/app/form-config.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  title = 'AutoFormEngine';
  schema: SFSchema = {};
  constructor( private configService: FormConfigService) { }

  ngOnInit() {
    this.schema = this.configService.form.getForm();
  }

}
