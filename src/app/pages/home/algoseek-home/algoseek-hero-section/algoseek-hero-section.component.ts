import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomepageApiService } from '../../../../services/homePageService/homePageService.service';
import { heroContent } from '../../../../core/interfaces/homePageInterface';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-algoseek-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './algoseek-hero-section.component.html',
  styleUrls: ['./algoseek-hero-section.component.scss'],
})
export class AlgoseekHeroSectionComponent implements OnInit, OnDestroy{
  private readonly destroy$ = new Subject<void>();

  constructor(private homePageService: HomepageApiService) {}
  sentences: string[] = [
    "Trading is exciting, data is grinding",
    "Math is neat, data is messy",
    "Coding is breezy, data is stuffy"
  ];
  words: string[] = ["Trading", "Math", "Coding"];

  currentSentence: string = '';
  currentWord: string = '';
  index: number = 0;
  charIndex: number = 0;
  typeSpeed: number = 150;
  eraseSpeed: number = 75;
  wordElement: HTMLElement | null = null;

  private typeTimeout: any;
  private eraseTimeout: any;
  private sentenceTimeout: any;

  ngOnInit(): void {
    this.showSentenceAndWord();
  }

  ngOnDestroy(): void {
    clearTimeout(this.typeTimeout);
    clearTimeout(this.eraseTimeout);
    clearTimeout(this.sentenceTimeout);
  }

  showSentenceAndWord() {
    this.currentSentence = this.sentences[this.index];
    console.log(this.currentSentence);
    this.currentWord = '';
    this.typeWord();
  }

  typeWord() {
    if (this.charIndex < this.words[this.index].length) {
      this.currentWord += this.words[this.index].charAt(this.charIndex);
      this.charIndex++;
      this.typeTimeout = setTimeout(() => this.typeWord(), this.typeSpeed);
    } else {
      setTimeout(() => this.eraseWord(), 1500);
    }
  }

  eraseWord() {
    if (this.charIndex > 0) {
      this.currentWord = this.words[this.index].substring(0, this.charIndex - 1);
      this.charIndex--;
      this.eraseTimeout = setTimeout(() => this.eraseWord(), this.eraseSpeed);
    } else {
      this.currentSentence = ''; 
      this.currentWord = '';
      this.index = (this.index + 1) % this.words.length;
      this.sentenceTimeout = setTimeout(() => this.showSentenceAndWord(), 500);
    }
  }
}
