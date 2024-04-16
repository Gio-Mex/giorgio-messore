import { Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  faEnvelope = faEnvelope;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

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
      threshold: 0,
    });
    elements.forEach((element) => {
      observer.observe(element);
    })
    
  }
}

