import { Component, OnInit, Input } from '@angular/core';
import { Order } from "../../shared/interfaces";

@Component({
  selector: 'app-histiry-list',
  templateUrl: './histiry-list.component.html',
  styleUrls: ['./histiry-list.component.less']
})
export class HistiryListComponent implements OnInit {

  @Input() orders: Order[];

  constructor() { }

  ngOnInit(): void {
  }

}
