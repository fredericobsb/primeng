import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
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
import { InputnumberComponent } from './inputnumber/inputnumber.component';
import { InputswitchComponent } from './inputswitch/inputswitch.component';
import { InputtextComponent } from './inputtext/inputtext.component';
import { InvalidstateComponent } from './invalidstate/invalidstate.component';
import { KeyfilterComponent } from './keyfilter/keyfilter.component';
import { KnobComponent } from './knob/knob.component';
import { ListboxComponent } from './listbox/listbox.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { PasswordComponent } from './password/password.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { RatingComponent } from './rating/rating.component';
import { SliderComponent } from './slider/slider.component';
import { SplitbuttonComponent } from './splitbutton/splitbutton.component';
import { TablecrudComponent } from './tablecrud/tablecrud.component';
import { TextareaComponent } from './textarea/textarea.component';

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
  {path:'inputmask', component: InputmaskComponent},
  {path:'inputswitch', component: InputswitchComponent},
  {path:'inputtext', component: InputtextComponent},
  {path:'textarea', component: TextareaComponent},
  {path:'inputnumber', component: InputnumberComponent},
  {path:'invalidstate', component:InvalidstateComponent},
  {path:'knob', component:KnobComponent},
  {path:'button', component:ButtonComponent},
  {path:'splitbutton', component:SplitbuttonComponent},
  {path:'tablecrud', component:TablecrudComponent},
  {path:'keyfilter', component:KeyfilterComponent},
  {path:'listbox', component:ListboxComponent},
  {path:'multiselect', component:MultiselectComponent},
  {path:'password', component:PasswordComponent},
  {path:'radiobutton', component:RadiobuttonComponent},
  {path:'rating', component:RatingComponent},
  {path:'slider', component:SliderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
