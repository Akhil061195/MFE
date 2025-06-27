import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component'; // adjust path as needed

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent], // ✅ Import LayoutComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
