import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './constructor/task.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { FactoryComponent } from './factory/factory.component';
import { SingletonComponent } from './singleton/singleton.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


const routes: Routes = [
  { path: '', component: TaskComponent },
  { path: 'decorator', component: DecoratorComponent },
  { path: 'factory', component: FactoryComponent },
  { path: 'singleton', component: SingletonComponent },
  { path: 'file-upload', component: FileUploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
