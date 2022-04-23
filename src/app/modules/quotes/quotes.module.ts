import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { QuotesRoutingModule } from './quotes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateQuoteComponent,
    QuoteListComponent
  ],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    ReactiveFormsModule
  ]
})
export class QuotesModule { }
