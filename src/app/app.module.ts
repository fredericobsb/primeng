import { NgModule } from '@angular/core';
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
import { ConfirmationService, MessageService } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { TablecrudComponent } from './tablecrud/tablecrud.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {RatingModule} from 'primeng/rating';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';//ToolBarModule
import { ProductService } from './tablecrud/product.service';
import {SliderModule} from 'primeng/slider';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ProgressBarModule} from 'primeng/progressbar';
import {MessageModule} from 'primeng/message';
import {KeyFilterModule} from 'primeng/keyfilter';
import { KeyfilterComponent } from './keyfilter/keyfilter.component';
import { ListboxComponent } from './listbox/listbox.component';
import {ListboxModule} from 'primeng/listbox';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { PasswordComponent } from './password/password.component';
import { DividerModule } from "primeng/divider";
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { RatingComponent } from './rating/rating.component';
import { SliderComponent } from './slider/slider.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import { SelectbuttonComponent } from './selectbutton/selectbutton.component';
import { TooglebuttonComponent } from './tooglebutton/tooglebutton.component';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { TreeselectComponent } from './treeselect/treeselect.component';
import { NodeServiceTreeSelect } from './treeselect/nodeServiceTreeSelect';
import { TreecheckboxComponent } from './treecheckbox/treecheckbox.component';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import { DataviewComponent } from './dataview/dataview.component';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import { ProductServiceDataView } from './dataview/productservicedataview';
import { OrderlistComponent } from './orderlist/orderlist.component';
import {OrderListModule} from 'primeng/orderlist';
import { ProductServiceOrderList } from './orderlist/productserviceorderlist';
import { OrgchartComponent } from './orgchart/orgchart.component';
import {OrganizationChartModule} from 'primeng/organizationchart';
import { PaginatorComponent } from './paginator/paginator.component';
import {PaginatorModule} from 'primeng/paginator';
import { PicklistComponent } from './picklist/picklist.component';
import {PickListModule} from 'primeng/picklist';
import { ProductServicePickList } from './picklist/productservicepicklist';
import { CardComponent } from './card/card.component';
import {CardModule} from 'primeng/card';
import { DividerComponent } from './divider/divider.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import {FieldsetModule} from 'primeng/fieldset';
import { PanelComponent } from './panel/panel.component';
import { MenuModule } from 'primeng/menu';
import { SpliterComponent } from './spliter/spliter.component';
import { SplitterModule } from "primeng/splitter";
import { ScrollpanelComponent } from './scrollpanel/scrollpanel.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabviewComponent } from './tabview/tabview.component';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';
import { ConfirmpopupComponent } from './confirmpopup/confirmpopup.component';
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { DinamicdialogComponent } from './dinamicdialog/dinamicdialog.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { CommonModule } from '@angular/common';
import { ProductlistdemoComponent } from './dinamicdialog/productlistdemo/productlistdemo.component';
import { ProductServiceDinamicDialog } from './dinamicdialog/productlistdemo/productservicedinamicdialog';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipModule } from 'primeng/tooltip';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MegamenuComponent } from './megamenu/megamenu.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { StepsModule } from 'primeng/steps';
import { Step1Component } from './step/step1/step1.component';
import { Step2Component } from './step/step2/step2.component';
import { Step3Component } from './step/step3/step3.component';
import { Step4Component } from './step/step4/step4.component';
import { TicketService } from './step/step1/ticketService';
import { TreeModule } from 'primeng/tree';
import { TabmenuComponent } from './tabmenu/tabmenu.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { TieredmenuComponent } from './tieredmenu/tieredmenu.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MensagensComponent } from './mensagens/mensagens.component';

import {MessagesModule} from 'primeng/messages';
import { ToastComponent } from './toast/toast.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import {CarouselModule} from 'primeng/carousel';
import { ProductServiceCarrousel } from './carrousel/productservicecarrousel';





/**
 AVISO DE QUANDO VOCE ESQUECEU DE IMPORTAR O MODULO NO ng.module.ts:
  Can't bind to 'cancel' since it isn't a known property of 'p-rating'
  --> ta reclamando que voce nao importou o RatingModule
 */

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
    SplitbuttonComponent,
    TablecrudComponent,
    KeyfilterComponent,
    ListboxComponent,
    MultiselectComponent,
    PasswordComponent,
    RadiobuttonComponent,
    RatingComponent,
    SliderComponent,
    SelectbuttonComponent,
    TooglebuttonComponent,
    TreeselectComponent,
    TreecheckboxComponent,
    DataviewComponent,
    OrderlistComponent,
    OrgchartComponent,
    PaginatorComponent,
    PicklistComponent,
    CardComponent,
    DividerComponent,
    FieldsetComponent,
    PanelComponent,
    SpliterComponent,
    ScrollpanelComponent,
    TabviewComponent,
    ToolbarComponent,
    ConfirmdialogComponent,
    ConfirmpopupComponent,
    DinamicdialogComponent,
    ProductlistdemoComponent,
    SidebarComponent,
    TooltipComponent,
    FileuploadComponent,
    BreadcrumbComponent,
    MegamenuComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    TabmenuComponent,
    TieredmenuComponent,
    MensagensComponent,
    ToastComponent,
    CarrouselComponent
    
    
    
   
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
    ConfirmDialogModule,
    TableModule,
    DialogModule,
    RatingModule,
    FileUploadModule,
    ToolbarModule,
    ProgressBarModule,
    ContextMenuModule,
    SliderModule,
    KeyFilterModule,
    MessageModule,
    ListboxModule,
    DividerModule,
    SelectButtonModule,
    ToggleButtonModule,
    TriStateCheckboxModule,
    DataViewModule,
    PanelModule,
    OrderListModule,
    OrganizationChartModule,
    PaginatorModule,
    PickListModule,
    CardModule,
    FieldsetModule,
    MenuModule,
    SplitterModule,
    ScrollPanelModule,
    TabViewModule,
    ConfirmPopupModule,
    DynamicDialogModule,//imports
    CommonModule,
    SidebarModule,
    TooltipModule,
    BreadcrumbModule,
    MegaMenuModule,
    StepsModule,
    TreeModule,
    TabMenuModule,
    TieredMenuModule,
    CarouselModule
  
  ],
  providers: [
    CountryService,
    NodeService, // SEM ELE: injection error -> null provider for NodeService.
    MessageService,
    ProductService,
    ConfirmationService,
    NodeServiceTreeSelect,
    ProductServiceDataView,
    ProductServiceOrderList,
    ProductServicePickList,
    ConfirmationService,
    DialogService,
    ProductServiceDinamicDialog,
    TicketService,
    MessagesModule,
    ProductServiceCarrousel
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    ProductlistdemoComponent
  ]
})
export class AppModule { }
