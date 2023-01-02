import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { TodosPageComponent } from './components/todos-page/todos-page.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { FiltersComponent } from './components/filters/filters.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    AppRoutingModule,
    CheckboxModule,
    ButtonModule
  ],
  declarations: [
    AppComponent,
    TodosPageComponent,
    TodosComponent,
    TodoComponent,
    FiltersComponent
  ],
  providers: [
    { provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}
  ],
  exports: [
    TodosComponent,
    FiltersComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
