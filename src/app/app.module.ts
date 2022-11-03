import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteslistComponent } from './quoteslist/quoteslist.component';
import { SentimentpageComponent } from './sentimentpage/sentimentpage.component';
import { StockquoteService } from './shared/stockquote.service';

@NgModule({
  declarations: [
    AppComponent,
    QuoteslistComponent,
    SentimentpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [StockquoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
