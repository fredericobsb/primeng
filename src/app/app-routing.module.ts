import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CascadeselectComponent } from './cascadeselect/cascadeselect.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { ColorpickerComponent } from './colorpicker/colorpicker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { EditorComponent } from './editor/editor.component';
import { FloatlabelComponent } from './floatlabel/floatlabel.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InputgroupComponent } from './inputgroup/inputgroup.component';
import { InputmaskComponent } from './inputmask/inputmask.component';

const routes: Routes = [
  {path:'formularios', component: FormularioComponent},
  {path:'calendar', component: CalendarComponent},
  {path:'cascadeselect', component: CascadeselectComponent},
  {path:'checkbox', component: CheckboxComponent},
  {path:'chips', component: ChipsComponent},
  {path:'colorpicker', component: ColorpickerComponent},
  {path: 'dropdown', component: DropdownComponent},
  {path:'editor',component: EditorComponent},
  {path:'floatlabel',component: FloatlabelComponent},
  {path:'inputgroup', component: InputgroupComponent},
  {path:'inputmask', component: InputmaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
