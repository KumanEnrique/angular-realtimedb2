import { Injectable } from '@angular/core';

import {Products} from '../models/products'
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productList: AngularFireList<any>
  selectedProduct: Products = new Products()
  constructor(public firebase:AngularFireDatabase) { }
  getProducts(){
    return this.productList = this.firebase.list('products')
  }
  addProduct(product:Products){
    this.productList.push({
      name: product.name,
      category:product.category,
      location:product.location,
      price:product.price
    })
  }
  deleteProduct($key:string){
    this.productList.remove($key)
  }
  updateProduct(product:Products){
    this.productList.update(product.$key,{
      name: product.name,
      category:product.category,
      location:product.location,
      price:product.price
    })
  }
}
//min 16