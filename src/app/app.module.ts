import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './formulario/countryService';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule } from 'primeng/calendar';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import { CascadeselectComponent } from './cascadeselect/cascadeselect.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CheckboxModule } from 'primeng/checkbox';
import {ChipsModule} from 'primeng/chips';
import { ButtonModule } from 'primeng/button';
import { ChipsComponent } from './chips/chips.component';
import { ColorpickerComponent } from './colorpicker/colorpicker.component';
import { ColorPickerModule } from "primeng/colorpicker";
import { DropdownComponent } from './dropdown/dropdown.component';
import {DropdownModule} from 'primeng/dropdown';
import { EditorComponent } from './editor/editor.component';
import {EditorModule} from 'primeng/editor';
import { FloatlabelComponent } from './floatlabel/floatlabel.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { InputMaskModule } from 'primeng/inputmask';
import {InputNumberModule} from 'primeng/inputnumber';
import { InputgroupComponent } from './inputgroup/inputgroup.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputmaskComponent } from './inputmask/inputmask.component';
import { InputswitchComponent } from './inputswitch/inputswitch.component';
import { InputSwitchModule } from "primeng/inputswitch";
import {InputTextModule} from 'primeng/inputtext';
import { InputtextComponent } from './inputtext/inputtext.component';
import { TextareaComponent } from './textarea/textarea.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { InputnumberComponent } from './inputnumber/inputnumber.component';
import { InvalidstateComponent } from './invalidstate/invalidstate.component';
import { TreeSelectModule } from 'primeng/treeselect';
import { NodeService } from './invalidstate/nodeService';
import {PasswordModule} from 'primeng/password';
import { KnobComponent } from './knob/knob.component';
import {KnobModule} from 'primeng/knob';
import { RippleModule } from 'primeng/ripple';
import { ButtonComponent } from './button/button.component';
import { SplitbuttonComponent } from './splitbutton/splitbutton.component';
import { MessageService } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    CalendarComponent,
    CascadeselectComponent,
    CheckboxComponent,
    ChipsComponent,
    ColorpickerComponent,
    DropdownComponent,
    EditorComponent,
    FloatlabelComponent,
    InputgroupComponent,
    InputmaskComponent,
    InputswitchComponent,
    InputtextComponent,
    TextareaComponent,
    InputnumberComponent,
    InvalidstateComponent,
    KnobComponent,
    ButtonComponent,
    SplitbuttonComponent
    
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    AutoCompleteModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CalendarModule, //calendar
    CascadeSelectModule, //casade select
    CheckboxModule, //checkbox
    ChipsModule,//chjips
    ButtonModule,// chips
    ColorPickerModule,
    DropdownModule,
    EditorModule,
    MultiSelectModule,
    InputMaskModule,
    InputNumberModule,
    RadioButtonModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    TreeSelectModule,
    PasswordModule,
    KnobModule,
    RippleModule,
    SplitButtonModule,
    ToastModule,
    
    
  ],
  providers: [
    CountryService,
    NodeService, // SEM ELE: injection error -> null provider for NodeService.
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
