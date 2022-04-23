import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { QuotesService } from 'src/app/shared/services/qoutes/quotes.service';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {

  user: string = '';
  isEdit: boolean = false;
  quoteId: any = '';
  quoteForm = new FormGroup({
    quote: new FormControl('', Validators.required)
  })

  constructor(
    private quotesService: QuotesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    this.user = user ? JSON.parse(user) : '';

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.isEdit = true;
        this.quoteId = paramMap.get('id') ? paramMap.get('id') : '';
        const raw = localStorage.getItem('quote');
        const post: any = raw ? JSON.parse(raw) : {};
        if (post) {
          this.quoteForm.controls["quote"].setValue(post.quote)
        }
      }
      else {
        this.isEdit = false;
      }
    });
  }

  onSubmit() {
    if (this.quoteForm.valid && this.user) {
      if (this.isEdit) {
        this.quotesService.updatePost(this.quoteId, this.quoteForm.value).subscribe({
          next: (response) => {
            localStorage.removeItem('quote');
            this.router.navigateByUrl('/quotes');
          }
        })
      } else {
        this.quotesService.addPost({ ...this.quoteForm.value, user: this.user }).subscribe({
          next: (response) => {
            console.log(response)
            this.router.navigateByUrl('/quotes');
          }
        })
      }

    }
  }

}
