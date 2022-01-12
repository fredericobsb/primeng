import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CascadeselectComponent } from './cascadeselect/cascadeselect.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { ColorpickerComponent } from './colorpicker/colorpicker.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {path:'formularios', component: FormularioComponent},
  {path:'calendar', component: CalendarComponent},
  {path:'cascadeselect', component: CascadeselectComponent},
  {path:'checkbox', component: CheckboxComponent},
  {path:'chips', component: ChipsComponent},
  {path:'colorpicker', component: ColorpickerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
