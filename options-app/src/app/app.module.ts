import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Adicione suas importações de componentes aqui

@NgModule({
  declarations: [
    AppComponent,
    // Liste seus componentes aqui
  ],
  imports: [
    BrowserModule,
    // Outros módulos que seu app possa precisar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }