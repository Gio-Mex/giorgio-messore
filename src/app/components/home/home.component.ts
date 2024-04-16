import { Component } from '@angular/core';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
import { faCircleUp } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  digital: any;
  faReadme = faReadme;
  faUp = faCircleUp;

  constructor() {}

  ngAfterViewChecked() {
    setTimeout(() => {
      this.showElement('.digital', () => {
        setTimeout(() => {
          this.showElement('.heroP');
        }, 1500);
      });
    }),
      1000;
  }

  ngAfterViewInit() {
    this.fadeIn();
  }

  private showElement(selector: string, callback?: () => void) {
    const element = document.querySelector(selector);
    if (element) {
      element.classList.add('show');
    }
    if (callback) {
      callback();
    }
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
