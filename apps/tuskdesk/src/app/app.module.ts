import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiShellModule } from "@myorg/ui-shell";
import { HttpClientModule } from '@angular/common/http';
import { TypeOrmModule } from '@nestjs/typeorm';



@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    UiShellModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
