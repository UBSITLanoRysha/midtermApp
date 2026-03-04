import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';  // ✅ ADD THIS!

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],  // ✅ ADD THESE!
  templateUrl: './navi.html',
  styleUrl: './navi.css'
})
export class Navi {
}