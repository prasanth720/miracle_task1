import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    RouterModule
  ],
  exports:[
    HeaderComponent, FooterComponent, SidebarComponent
  ]
})
export class LayoutModule { }
