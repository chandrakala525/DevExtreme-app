import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxButtonModule, DxTabPanelModule } from 'devextreme-angular';
import { DxDataGridModule, DxListModule, DxNavBarModule, DxGalleryModule, DxPopoverModule, DxPopupModule, DxTemplateModule  } from "devextreme-angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
    DxTabPanelModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
