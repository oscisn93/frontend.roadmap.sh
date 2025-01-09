import { Component, input, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { Quiz } from './mock.quizzes';

@Component({
  selector: 'app-quiz',
  // templateUrl: './quiz.component.html',
  template: `
    <div class="content">
      <h1 class="main-title">{{ quiz$.title }}</h1>
      <div>
        <p>This quiz has {{ quiz$.questions.length }} questions.</p>
        <p>Ready to begin?</p>
        <button>Click Here</button>
      </div>
    </div>
  `,
})
export class QuizComponent implements OnInit {
  handle = input.required<string>();
  quiz$!: Quiz;
  constructor(private quizService: QuizService) {}
  ngOnInit(): void {
    this.quiz$ = this.quizService.getQuiz(this.handle());
  }
}
