import { Component } from '@angular/core';

import {
MatInputModule
} from '@angular/material/input';

@Component({
  selector: 'navigation-root',
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  imports: [MatInputModule]
})
  
export class NavigationComponent {
    value = '';

  onKey(event: any) {
    this.value = event.target.value;
  }
}
