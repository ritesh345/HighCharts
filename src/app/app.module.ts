import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { LinechartComponent } from './linechart/linechart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { ColumnComponent } from './column/column.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatIconModule} from '@angular/material/icon';
import { Barchart1Component } from './barchart1/barchart1.component';
import { Barchart2Component } from './barchart2/barchart2.component';
import {MatCardModule} from '@angular/material/card';
import { TofixedComponent } from './tofixed/tofixed.component';

@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    PiechartComponent,
    BarchartComponent,
    ColumnComponent,
    SidebarComponent,
    Barchart1Component,
    Barchart2Component,
    TofixedComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HighchartsChartModule,
         BrowserAnimationsModule,
         MatGridListModule,
         MatIconModule,
         MatCardModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
