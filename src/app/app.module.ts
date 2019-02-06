import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutes } from './app.routes';
import { RootComponent } from './root/root.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [RootComponent, SearchComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
