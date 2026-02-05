import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
//import type { InvestmentInput } from './investment-input.model';
import { InvestmentResults } from './investment-results/investment-results';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, UserInput, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // protected readonly title = signal('invest_calc');
  // resultsData = signal< | undefined>(undefined); 
}
