import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  isVisible = false;
  loopNum = 0;
  isDeleting = false;
  text = '';
  delta = 300 - Math.random() * 100;
  index = 1;
  toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  period = 2000;

  constructor() { }

  ngOnInit(): void {
    this.tick(); 
  }

  handleVisibility(isVisible: boolean) {
    this.isVisible = this.isVisible;
  }

  tick() {
    const ticker = setInterval(() => {
      let i = this.loopNum % this.toRotate.length;
      let fullText = this.toRotate[i];
      let updatedText = this.isDeleting ? fullText.substring(0, this.text.length - 1) : fullText.substring(0, this.text.length + 1);

      this.text = updatedText;

      if (this.isDeleting) {
        this.delta /= 2;
      }

      if (!this.isDeleting && updatedText === fullText) {
        this.isDeleting = true;
        this.index -= 1;
        this.delta = this.period;
      } else if (this.isDeleting && updatedText === '') {
        this.isDeleting = false;
        this.loopNum += 1;
        this.index = 1;
        this.delta = 500;
      } else {
        this.index += 1;
      }
    }, this.delta);

    // Cleanup on component destroy
    return () => clearInterval(ticker);
  }
}
