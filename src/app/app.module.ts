import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ProfileHomeComponent } from './pages/profile-home/profile-home.component';
import { AppointmentPageComponent } from './pages/appointment-page/appointment-page.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {A11yModule} from '@angular/cdk/a11y';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProfileHomeComponent,
    AppointmentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    DragDropModule,  
    MatFormFieldModule,
    MatDatepickerModule,
    A11yModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    NgxMaterialTimepickerModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
