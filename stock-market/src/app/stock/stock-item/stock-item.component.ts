import { Component, OnInit } from '@angular/core';

import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stocks: Array<Stock>;
  public stockClasses;

  constructor() { }

  ngOnInit(): void {
      this.stocks = [new Stock(
          'Test Stock Company',
          'TSC',
          85,
          80
      ), new Stock(
          'Second Stock Company',
          'SSC',
          10,
          20
      ), new Stock(
          'Last Stock Company',
          'LSC',
          876,
          765
      )];
  }

  toggleFavorite(index:number) {
      this.stocks[index].favorite = !this.stocks[index].favorite;
  }

  trackStockByCode(index: number, stock:Stock) {
      return stock.code;
  }

}
