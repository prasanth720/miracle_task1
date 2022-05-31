import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { HtmlScreenComponent } from './html-screen/html-screen.component';
import { AddPurchaseOrderComponent } from './add-purchase-order/add-purchase-order.component';
import {CardModule} from 'primeng/card';
import {InputMaskModule} from 'primeng/inputmask';
import { SharedModule, Header, Footer, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { Dialog, DialogModule } from 'primeng/dialog';
import { ConfirmDialog, ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { FocusTrapModule } from 'primeng/focustrap';
import { CheckboxModule } from 'primeng/checkbox';
import { TreeTableModule } from 'primeng/treetable';
import { TreeModule } from 'primeng/tree';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import { PurchaseComponent } from './purchase/purchase.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {FormsModule,ReactiveFormsModule }  from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import {PaginatorModule} from 'primeng/paginator';
import {SidebarModule} from 'primeng/sidebar';
import {MultiSelectModule} from 'primeng/multiselect';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import {TooltipModule} from 'primeng/tooltip';
import { UsersService } from './users.service';
@NgModule({
  declarations: [
      HtmlScreenComponent, 
          AddPurchaseOrderComponent,
           PurchaseComponent,
           EditComponent],
  imports: [
    CommonModule,
    MatListModule,
    CardModule,
    TabMenuModule,
    DropdownModule,
    TableModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    InputTextModule,
    FormsModule,
    PaginatorModule,
    SidebarModule,
    ReactiveFormsModule,
    MultiSelectModule,
    AccordionModule,
    CalendarModule,
    MenubarModule,
    TabViewModule,
    PanelModule,
    InputNumberModule,
    CheckboxModule,
    FocusTrapModule,
    TreeTableModule,
    TreeModule,
    InputMaskModule,
    RadioButtonModule,
    ListboxModule,
    CardModule,
    ButtonModule,
    TooltipModule
  ],
  exports:[
   
  ],
  providers: [ MessageService,UsersService]
})
export class UsersModule { }
