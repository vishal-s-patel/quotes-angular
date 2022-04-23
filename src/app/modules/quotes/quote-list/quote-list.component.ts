import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuotesService } from 'src/app/shared/services/qoutes/quotes.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  quotes: any[] = [];
  user: string = '';

  constructor(
    private quotesService: QuotesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    this.user = user ? JSON.parse(user) : '';
    this.getQuotes();
  }

  getQuotes() {
    this.quotesService.getQuotesList().subscribe({
      next: (response) => {
        console.log(response)
        this.quotes = response.data;
      }
    })
  }

  deleteQuote(id: string) {
    this.quotesService.deletePost(id).subscribe({
      next: (response) => {
        this.quotes = this.quotes.filter(quote => quote._id !== id);
      }
    })
  }

  editQuote(quote: any) {
    localStorage.setItem('quote', JSON.stringify(quote));
    this.router.navigateByUrl('quotes/create/' + quote._id);
  }
}
