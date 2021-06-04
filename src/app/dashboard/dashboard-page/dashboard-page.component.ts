import { DasboardService } from './../../dashbord/dasboard.service';
import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private dasboardService: DasboardService) { }

  ngOnInit(): void {
    this.fetchStocks();
  }
  async fetchStocks(): Promise<void> {
    this.stocks = await this.dasboardService.getStocks();
    console.log(this.stocks);

  }

}

