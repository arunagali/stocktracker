import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuoteData } from '../shared/quote-data';
import { StockquoteService } from '../shared/stockquote.service';

@Component({
  selector: 'app-quoteslist',
  templateUrl: './quoteslist.component.html',
  styleUrls: ['./quoteslist.component.css']
})
export class QuoteslistComponent implements OnInit {
  public formGroup: FormGroup;
  public quotesList: QuoteData[] = [];
  public quoteStatus: boolean = true;

 stockArray=[];
  constructor(private _stockquote: StockquoteService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      symbol: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(5),
      ]),
    });
    
    this.quotesList = localStorage.getItem('quotesData')
      ? JSON.parse(localStorage.getItem('quotesData'))
      : [];
  }
  quotesDataDetails(){
     this.companyName();
  }

   companyName(){
    this.quoteStatus = false;
    this._stockquote.getCompanyName(this.formGroup.value.symbol).subscribe((data:any) =>{
      let list = {
        description: data.result[0].description,
        symbol: data.result[0].symbol
      };
      this.quotesData(list);
    })
  }

  quotesData(list){
     this._stockquote.getQuoteData(this.formGroup.value.symbol).subscribe((data) =>{
      this.quoteStatus = true;
      this.quotesList.push({...list, ...data});
     localStorage.setItem('quotesData',JSON.stringify(this.quotesList));
   })
   this.formGroup.reset();
}

deleteStock(index,str){
  this.quotesList.splice(index, 1);
  localStorage.setItem('quotesData',JSON.stringify(this.quotesList));
}
}
