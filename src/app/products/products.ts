import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.interface';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})

export class Products {
  products: Product[] = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 50000, stock: 5, status: 'Available', description: 'Gaming laptop' },
  { id: 2, name: 'Phone', category: 'Electronics', price: 20000, stock: 0, status: 'Out of Stock', description: 'Android smartphone' },
  { id: 3, name: 'Keyboard', category: 'Accessories', price: 1500, stock: 10, status: 'Available', description: 'Mechanical keyboard' },
  { id: 4, name: 'Mouse', category: 'Accessories', price: 800, stock: 3, status: 'Limited', description: 'Wireless mouse' },
  { id: 5, name: 'Monitor', category: 'Electronics', price: 9000, stock: 7, status: 'Available', description: '24 inch monitor' },
  { id: 6, name: 'Headset', category: 'Accessories', price: 1200, stock: 2, status: 'Limited', description: 'Gaming headset' },
  { id: 7, name: 'Printer', category: 'Office', price: 7000, stock: 0, status: 'Out of Stock', description: 'Inkjet printer' },
  { id: 8, name: 'Tablet', category: 'Electronics', price: 15000, stock: 4, status: 'Available', description: '10 inch tablet' },
  { id: 9, name: 'Speaker', category: 'Audio', price: 2000, stock: 8, status: 'Available', description: 'Bluetooth speaker' },
  { id: 10, name: 'Webcam', category: 'Accessories', price: 1800, stock: 6, status: 'Available', description: 'HD webcam' }
  ];

  selectedProduct: Product | null = null;
  showModal: boolean = false;

  viewProductDetails(product: Product) {
    this.selectedProduct = product;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
