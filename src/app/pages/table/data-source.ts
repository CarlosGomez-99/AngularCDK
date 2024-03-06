import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from 'src/app/models/product.model';

export class DataSourceProduct extends DataSource<Product> {
  data = new BehaviorSubject<Product[]>([]);

  connect(): Observable<Product[]> {
    return this.data;
  }

  init(data: Product[]) {
    this.data.next(data);
  }

  getTotal() {
    return this.data.value
      .map((product) => product.price)
      .reduce((price, total) => price + total, 0);
  }

  update(id: Product['id'], changes: Partial<Product>) {
    const products = this.data.getValue();
    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex !== -1) {
      products[productIndex] = { ...products[productIndex], ...changes };
      this.data.next(products);
    }
  }

  disconnect() {}
}
