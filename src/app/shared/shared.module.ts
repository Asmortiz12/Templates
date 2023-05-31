import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BraadcrumbsComponent } from './braadcrumbs/braadcrumbs.component';
import { SharedComponent } from './shared.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BraadcrumbsComponent,
    SharedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BraadcrumbsComponent,
    SharedComponent
  ],
})
export class SharedModule { }
