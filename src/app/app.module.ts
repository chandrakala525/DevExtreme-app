import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxButtonModule, DxTabPanelModule, DxTabsModule, DxTextBoxModule, DxSelectBoxModule } from 'devextreme-angular';
import { DxDataGridModule, DxListModule, DxNavBarModule, DxGalleryModule, DxPopoverModule, DxPopupModule, DxTemplateModule  } from "devextreme-angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { PopupComponent } from './components/about/popup/popup.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ProductComponent,
    ContactComponent,
    PopupComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    DxListModule,
    DxNavBarModule,
    DxGalleryModule,
    DxPopoverModule,
    DxPopupModule,
    DxTemplateModule,
    DxTabsModule,
    DxTabPanelModule,
    DxTextBoxModule,
    DxSelectBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
