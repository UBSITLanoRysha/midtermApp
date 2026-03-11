import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.interface';
import { ProductService } from '../services/productService';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  getProduct(p: Product): void {
    this.router.navigate(['/plist', p.id, 'details']);
  }
}