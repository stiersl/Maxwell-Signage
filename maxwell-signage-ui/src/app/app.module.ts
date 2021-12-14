import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecordingComponent } from './recording/recording.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
