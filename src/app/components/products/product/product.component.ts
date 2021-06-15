import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {Products} from '../../../models/products'
import {ProductsService} from '../../../services/products.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    public productService:ProductsService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts()
    this.resetForm()
  }

  onSubmit(form: NgForm){
    if(form.value.$key == null){
      this.productService.addProduct(form.value)
    }else{
      this.productService.updateProduct(form.value)
    }
    return false
  }
  resetForm(form?:NgForm){
    if(form != null){
      form.reset()
      this.productService.selectedProduct = new Products()
    }
  }
}
