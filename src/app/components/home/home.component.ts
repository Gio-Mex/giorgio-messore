import { Component } from '@angular/core';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleUp } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  digital: any;
  faCircle = faCircle;
  faUp = faCircleUp;

  constructor() {}

  ngAfterViewInit() {
    this.fadeIn();
  }

  fadeIn(): void {
    const elements = document.querySelectorAll('.watch');
    const func = (elements: any) => {
      elements.forEach((element: any) => {
        if (element.isIntersecting) {
          element.target.classList.add('in-page');
        } else {
          element.target.classList.remove('in-page');
        }
      });
    };
    const observer = new IntersectionObserver(func, {
      threshold: 0.5,
    });
    elements.forEach((element) => {
      observer.observe(element);
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
