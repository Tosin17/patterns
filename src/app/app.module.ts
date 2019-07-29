import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { TaskComponent } from './constructor/task.component';
import { FactoryComponent } from './factory/factory.component';
import { SingletonComponent } from './singleton/singleton.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    FactoryComponent,
    SingletonComponent,
    DecoratorComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
