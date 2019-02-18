import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxButtonModule, DxTabPanelModule, DxTextBoxModule  } from 'devextreme-angular';
import { DxDataGridModule, DxListModule, DxNavBarModule, DxGalleryModule, DxPopoverModule, DxPopupModule, DxTemplateModule  } from "devextreme-angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ProductComponent,
    ContactComponent
    
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
    DxTabPanelModule,
    DxTextBoxModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
