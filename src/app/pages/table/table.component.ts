import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  products: Product[] = [];
  columns = ['No', 'Referencia', 'Precio', 'Descripción', 'Imagenes'];
  total = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;
        this.total = this.products
          .map((product) => product.price)
          .reduce((price, total) => price + total, 0);
      });
  }
}
