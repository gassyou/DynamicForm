import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ControlInterface } from 'src/app/controls/contol.interface';
import { InputControl } from 'src/app/controls/input.control';
import { InputNumberControl } from 'src/app/controls/input-number.control';
import { DateControl } from 'src/app/controls/date.control';
import { RadioControl } from 'src/app/controls/radio.control';
import { SelectControl } from 'src/app/controls/select.control';
import { FormConfigService } from 'src/app/form-config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-config',
  templateUrl: './form-config.component.html',
  styleUrls: ['./form-config.component.less']
})
export class FormConfigComponent implements OnInit {

  selectedValue;
  grid = 1;

  configForm: FormGroup;

  formItems: ControlInterface[] = [];

  constructor(
    private fb: FormBuilder,
    private configService: FormConfigService,
    private route: Router
    ) { }

  ngOnInit() {

    this.configForm = this.fb.group({
      key: [null, [Validators.required]],
      name: [null, [Validators.required]],
      type: [null, [Validators.required]],
      required: [true, [Validators.required]],
      widget: [null, [Validators.required]],
      option: [null]
    });

    this.formItems = this.configService.form.controls;
  }

  addControl() {
    if (!this.configForm.valid) {
      return;
    }

    let control: ControlInterface;

    if (this.configForm.controls.widget.value === 'input') {
      control = new InputControl();
    }

    if (this.configForm.controls.widget.value === 'numberInput') {
      control = new InputNumberControl();
    }

    if (this.configForm.controls.widget.value === 'date') {
      control = new DateControl();
    }

    if (this.configForm.controls.widget.value === 'radio') {
      control = new RadioControl();
      const option = this.configForm.controls.option.value;
      control.enum = JSON.parse( option ? option.replace(/\s+/g, '') : [] );
    }

    if (this.configForm.controls.widget.value === 'select') {
      control = new SelectControl();
      const option = this.configForm.controls.option.value;
      control.enum = JSON.parse( option ? option.replace(/\s+/g, '') : [] );
    }

    control.key = this.configForm.controls.key.value;
    control.title = this.configForm.controls.name.value;
    control.type = this.configForm.controls.type.value;
    control.isRequired = this.configForm.controls.required.value;

    this.formItems.push(control);
    this.configForm.reset();
    this.configForm.controls.required.setValue(true);

  }

  showForm() {
    this.configService.form.grid = this.grid;
    this.configService.form.controls = this.formItems;
    this.route.navigate(['form']);
  }

  delete(e: ControlInterface) {
    const index = this.formItems.indexOf(e);
    this.formItems.splice(index, 1);
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.formItems, event.previousIndex, event.currentIndex);
  }

}
