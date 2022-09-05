import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {CardModule} from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CardModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
