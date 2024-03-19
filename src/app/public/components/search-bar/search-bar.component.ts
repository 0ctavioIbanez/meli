import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  term: string = '';
  @Input() placeholder: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((param) => {
      this.term = param['search'];
    })
  }

  onType({ value }: HTMLInputElement) {
    this.router.navigate([],{
      queryParams: {
        search: value
      }
    })
    
  }
}
