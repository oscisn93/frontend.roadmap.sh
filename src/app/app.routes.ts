import { Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';

export const routes: Routes = [
  { path: 'quiz/:handle', component: QuizComponent },
];
