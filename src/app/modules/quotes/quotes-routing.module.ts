import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { QuoteListComponent } from './quote-list/quote-list.component';

const routes: Routes = [
    {
        path: '',
        component: QuoteListComponent
    },
    {
        path: 'create',
        component: CreateQuoteComponent
    },
    {
        path: 'create/:id',
        component: CreateQuoteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class QuotesRoutingModule { }