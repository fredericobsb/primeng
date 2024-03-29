import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonComponent } from './button/button.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CardComponent } from './card/card.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CascadeselectComponent } from './cascadeselect/cascadeselect.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { ColorpickerComponent } from './colorpicker/colorpicker.component';
import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';
import { ConfirmpopupComponent } from './confirmpopup/confirmpopup.component';
import { DataviewComponent } from './dataview/dataview.component';
import { DinamicdialogComponent } from './dinamicdialog/dinamicdialog.component';
import { DividerComponent } from './divider/divider.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { EditorComponent } from './editor/editor.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
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
import { MegamenuComponent } from './megamenu/megamenu.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrgchartComponent } from './orgchart/orgchart.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PanelComponent } from './panel/panel.component';
import { PasswordComponent } from './password/password.component';
import { PicklistComponent } from './picklist/picklist.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { RatingComponent } from './rating/rating.component';
import { ScrollpanelComponent } from './scrollpanel/scrollpanel.component';
import { SelectbuttonComponent } from './selectbutton/selectbutton.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SliderComponent } from './slider/slider.component';
import { SplitbuttonComponent } from './splitbutton/splitbutton.component';
import { SpliterComponent } from './spliter/spliter.component';
import { Step1Component } from './step/step1/step1.component';
import { Step2Component } from './step/step2/step2.component';
import { Step3Component } from './step/step3/step3.component';
import { Step4Component } from './step/step4/step4.component';
import { TablecrudComponent } from './tablecrud/tablecrud.component';
import { TabmenuComponent } from './tabmenu/tabmenu.component';
import { TabviewComponent } from './tabview/tabview.component';
import { TextareaComponent } from './textarea/textarea.component';
import { TieredmenuComponent } from './tieredmenu/tieredmenu.component';
import { ToastComponent } from './toast/toast.component';
import { TooglebuttonComponent } from './tooglebutton/tooglebutton.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TreecheckboxComponent } from './treecheckbox/treecheckbox.component';
import { TreeselectComponent } from './treeselect/treeselect.component';


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
  {path:'selectButton', component:SelectbuttonComponent},
  {path:'tooglebutton', component:TooglebuttonComponent},
  {path:'treeselect', component:TreeselectComponent},
  {path:'tristatecheckbox', component:TreecheckboxComponent},
  {path:'dataview', component:DataviewComponent},
  {path:'orderlist', component:OrderlistComponent},
  {path:'orgchart', component:OrgchartComponent},
  {path:'paginator', component:PaginatorComponent},
  {path:'picklist', component:PicklistComponent},
  {path:'card', component:CardComponent},
  {path:'divider', component:DividerComponent},
  {path:'fieldset', component:FieldsetComponent},
  {path:'panel', component:PanelComponent},
  {path:'spliter', component:SpliterComponent},
  {path:'scrollpanel', component:ScrollpanelComponent},
  {path:'tabview', component:TabviewComponent},
  {path:'toolbar', component:ToolbarComponent},
  {path:'confirmdialog', component:ConfirmdialogComponent},
  {path:'confirmpopup', component:ConfirmpopupComponent},
  {path:'dinamicdialog', component:DinamicdialogComponent},
  {path:'sidebar', component:SidebarComponent},
  {path:'tooltip', component:TooltipComponent},
  {path:'upload', component:FileuploadComponent},
  {path:'breadcrumb', component:BreadcrumbComponent},
  {path:'megamenu', component:MegamenuComponent},
  {path:'breadcrumb', component:BreadcrumbComponent},
  {path:'step', component:Step1Component},
  {path:'step2', component:Step2Component},
  {path:'step3', component:Step3Component},
  {path:'step4', component:Step4Component},
  {path:'tabmenu', component:TabmenuComponent},
  {path:'tieredmenu', component:TieredmenuComponent},
  {path:'mensagens', component:MensagensComponent},
  {path:'toast', component:ToastComponent},
  {path:'carrousel', component:CarrouselComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
