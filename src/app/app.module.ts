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


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    CalendarComponent,
    CascadeselectComponent,
    CheckboxComponent,
    ChipsComponent,
    ColorpickerComponent
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
    ColorPickerModule
  ],
  providers: [
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
