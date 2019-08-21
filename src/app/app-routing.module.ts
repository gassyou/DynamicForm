import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
          { path: '', redirectTo: 'config', pathMatch: 'full' },
          { path: 'form', loadChildren: './form/form.module#DynamicFormModule' },
          { path: 'config', loadChildren: './config/config.module#ConfigModule' },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
