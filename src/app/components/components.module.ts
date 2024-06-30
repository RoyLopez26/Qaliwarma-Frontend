import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import { MenuComponent } from './menu/menu.component';
import {MenubarModule} from "primeng/menubar";
import {TableModule} from "primeng/table";
import {MultiSelectModule} from "primeng/multiselect";
import {DropdownModule} from "primeng/dropdown";
import {SliderModule} from "primeng/slider";
import {ProgressBarModule} from "primeng/progressbar";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TagModule} from "primeng/tag";
import {DialogModule} from "primeng/dialog";
import {ToolbarModule} from "primeng/toolbar";
import {CalendarModule} from "primeng/calendar";
import {PanelModule} from "primeng/panel";
import {AccordionModule} from "primeng/accordion";
import {FloatLabelModule} from "primeng/floatlabel";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {MenuModule} from "primeng/menu";
import {CardModule} from "primeng/card";
import {ImageModule} from "primeng/image";
import { DistribucionComponent } from './distribucion/distribucion.component';
import {DetalleDistribucionComponent} from "./distribucion/detalleDistribucion.component";

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    MenubarModule,
    TableModule,
    MultiSelectModule,
    DropdownModule,
    SliderModule,
    ProgressBarModule,
    ToastModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TagModule,
    DialogModule,
    ToolbarModule,
    CalendarModule,
    PanelModule,
    AccordionModule,
    FloatLabelModule,
    ConfirmDialogModule,
    MenuModule,
    CardModule,
    ImageModule
  ],
  exports: [
    MenuComponent,
    DistribucionComponent,
    DetalleDistribucionComponent
  ],
  declarations: [
    MenuComponent,
    DistribucionComponent,
    DetalleDistribucionComponent
  ],
  providers: [
    MessageService,
  ]
})
export class ComponentsModule { }
