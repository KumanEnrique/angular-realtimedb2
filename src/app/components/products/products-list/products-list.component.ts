import { Component, OnInit } from '@angular/core';

import {ProductsService} from '../../../services/products.service'
import {Products} from '../../../models/products'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productsArray:Products[]
  constructor(
    public productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().snapshotChanges()
      .subscribe((item)=>{
        this.productsArray = []
        item.forEach(element =>{
          let x = element.payload.toJSON()
          x['$key'] = element.key
          console.log(x)
          this.productsArray.push(x as Products)
        })
      })
  }

  deleteProduct($key:string){
    this.productService.deleteProduct($key)
  }
  updateProduct(product: Products){
    this.productService.selectedProduct = Object.assign({},product)
  }
}
