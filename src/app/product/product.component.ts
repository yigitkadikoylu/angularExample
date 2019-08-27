import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { Product } from './product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})

export class ProductComponent implements OnInit {

  title = 'Ürün Listesi';
  filterText = '';
  products: Product[];
  showPrice = false;

  constructor(private alertifyService: AlertifyService,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
    this.productService.getProducts(params["categoryId"]).subscribe((data) => {
        this.products = data;
      });
    });
  }

  addToCart(product) {
    this.alertifyService.success(product.name);
  }

  changeMore(id: number, value: boolean) {
    this.products = this.products.map(item => {
      if (item.id === id)  {
        item = {
          ...item,
          showPrice: value
        };
      }
      return item;
    });
  }
}
