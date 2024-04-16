import { Component } from '@angular/core';
import { faCircleUp } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  faUp = faCircleUp;

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
      threshold: 0.4,
    });
    elements.forEach((element) => {
      observer.observe(element);
    })
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
