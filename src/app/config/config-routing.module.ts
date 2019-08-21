import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormConfigComponent } from './form-config/form-config.component';


const routes: Routes = [
  { path: '', component: FormConfigComponent, data: { title: '表单配置'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
