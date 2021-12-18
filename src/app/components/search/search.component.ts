import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() resultEvent = new EventEmitter<any>();

  constructor(private httpClient: HttpClient) { }

  results: any = [];
  showError: boolean = false;
  modelValue: string = "";
  searchInput: string = "";
  
  subscription: any;

  ngOnInit(): void { }

  onSubmit(value: any) {
    this.subscription =
      this.httpClient.get<any>('https://api.github.com/search/users?q=' + value + '%20in:login').subscribe(data => {
      this.results = data;
      this.resultEvent.emit(this.results);
      this.showError = this.results.total_count === 0 ? true : false;
      this.searchInput = value;
    })    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
