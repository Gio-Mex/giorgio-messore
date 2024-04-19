import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  closeOffcanvas() {
    document
      .querySelector('.offcanvas')
      ?.setAttribute('data-bs-dismiss', 'offcanvas');
  }
}
