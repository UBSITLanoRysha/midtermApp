import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navi } from './comps/navi/navi';
import { Products } from '../app/products/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navi, Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('midtermApp');
}
