import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { DataSourceProduct } from './data-source';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs';

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
  input = new FormControl('', { nonNullable: true });

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products.init(data);
        this.total = this.products.getTotal();
      });
    this.input.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      this.findProduct(value);
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

  findProduct(query: string) {
    this.products.findProduct(query);
  }
}
