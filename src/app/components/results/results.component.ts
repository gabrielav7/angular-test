import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() results: any;

  constructor() { }

  columnDefs = [
    { headerName: "Avatar Url", field: "avatar_url" }, 
    { headerName: "Login", field: "login", sort: 'desc' }, 
    { headerName: "Type", field: "type" }];

  rowData = []

  defaultColDef = {
    sortable: true,
    resizable: true,
    filter: true
  };

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChange) {
    if (this.results !== undefined || this.results.length) {
      this.rowData = this.results.items;
    }
  }
}
