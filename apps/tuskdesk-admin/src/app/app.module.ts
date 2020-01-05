import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { UiShellModule } from "@myorg/ui-shell";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    UiShellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
