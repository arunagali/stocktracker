import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteslistComponent } from './quoteslist/quoteslist.component';
import { SentimentpageComponent } from './sentimentpage/sentimentpage.component';

const routes: Routes = [
  {path:'', redirectTo:'/quotesList', pathMatch:'full'},
  {path:'quotesList', component:QuoteslistComponent},
  {path:'sentimentpage/:symbol', component:SentimentpageComponent},
  {path:'**', redirectTo:'/quotesList', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
