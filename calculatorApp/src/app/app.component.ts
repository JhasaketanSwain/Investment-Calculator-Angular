import { Component } from '@angular/core';
import type { InvestmentInput, resultsData } from './investment-input.model';
import { InvestmentCalculatorService } from './investment-calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculatorApp';

  // resultsData?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // } [];

  resultData! : resultsData[];

constructor(private myService:InvestmentCalculatorService){}

//   onCalculateInvestmentResults(data: InvestmentInput) {
//   {
//     const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
//     const annualData = [];
//     let investmentValue = initialInvestment;

//     for(let i=0; i<duration; i++) {
//       const year = i+1;
//       const interestEarnedInYear = investmentValue * (expectedReturn / 100);
//       investmentValue += interestEarnedInYear + annualInvestment;
//       const totalInterest = investmentValue - annualInvestment * year - initialInvestment;

//       annualData.push({
//         year: year,
//         interest: interestEarnedInYear,
//         valueEndOfYear: investmentValue,
//         annualInvestment: annualInvestment,
//         totalInterest: totalInterest,
//         totalAmountInvested: initialInvestment + annualInvestment * year,
//       });
//     }
//     // return annualData;
//     console.log(annualData);
//     this.resultsData = annualData;
    
//   }
// }

onCalculate(data:InvestmentInput){
  this.resultData = this.myService.onCalculateInvestmentResults(data);
  console.log(this.resultData);
  
}
}