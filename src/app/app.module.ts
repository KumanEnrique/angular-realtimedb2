import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import {AngularFireModule} from '@angular/fire'
import {AngularFireDatabaseModule} from '@angular/fire/database'
import {environment} from '../environments/environment'

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductComponent } from './components/products/product/product.component';
import {ProductsService} from './services/products.service'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductsComponent,
    ProductsListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
