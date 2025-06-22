import { Component, OnInit } from '@angular/core';
import { mobileProducts } from '../consts/product';
import { product } from '../models/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
productsarr : Array<product> = mobileProducts
  constructor() { }

  ngOnInit(): void {
  }

}
