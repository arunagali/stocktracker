import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sentiment } from '../shared/sentiment';
import { StockquoteService } from '../shared/stockquote.service';

@Component({
  selector: 'app-sentimentpage',
  templateUrl: './sentimentpage.component.html',
  styleUrls: ['./sentimentpage.component.css']
})
export class SentimentpageComponent implements OnInit {
 public sentimentData:Sentiment[] = [];
 public symbol: string;
  public fromDate: string;
  public toDate: string;
  public symbolName: string;
  public dataStatus: boolean = false;

  constructor(private _quote: StockquoteService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params =>{
        this.symbol = params.get('symbol');
    }))
    this.getDates();
    this.getSentimentData();
  }

  getDates(){
    let todayDate = new Date().toISOString().slice(0, 10);
    let date = new Date(todayDate);
    date.setMonth(date.getMonth() - 3);
    this.toDate = todayDate;
    this.fromDate = date.toISOString().slice(0, 10);
  }

  getSentimentData(){
    this.dataStatus = true;
    this._quote.getSentiment(this.symbol, this.fromDate, this.toDate).subscribe((data: any) =>{
    this.dataStatus = false;
    this.sentimentData = data.data;
    this.symbolName = data.symbol;
  })

  }

  getMonthName(val: number){
    let months = [];
    let todayDate = new Date().toISOString().slice(0, 10);
    let date = new Date(todayDate);
    date.setMonth( val- 1);
    return months[val] = date.toLocaleString('en-US', {
      month: 'long',
    });
  }
}
