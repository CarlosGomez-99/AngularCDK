import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { DataSourceProduct } from './data-source';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  products = new DataSourceProduct();
  columns = [
    'No',
    'Referencia',
    'Precio',
    'Descripción',
    'Imagenes',
    'Acciones',
  ];
  total = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products.init(data);
        this.total = this.products.getTotal();
      });
  }

  editProduct(product: Product) {
    this.products.update(product.id, { price: 200 });
  }

  deleteProduct(product: Product) {
    this.products.data.next(
      this.products.data.value.filter((p) => p.id !== product.id)
    );
    this.total = this.products.getTotal();
  }
}
