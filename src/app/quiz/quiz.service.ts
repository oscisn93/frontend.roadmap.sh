import { Injectable } from '@angular/core';
import { QUIZZES } from './mock.quizzes';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  getQuizzes() {
    return QUIZZES;
  }
  getQuiz(handle: string) {
    return QUIZZES.filter(quiz => quiz.title === handle)[0];
  }
}
