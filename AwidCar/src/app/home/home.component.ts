import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clients: any = [];
  cars: any = [];
  orders: any = [];

  constructor(
    private orderService: OrderService,
    private clientService: ClientService) { }

  ngOnInit(): void {
    //this.getClient();
    this.getOrder();
  }

  public getClient(){
    this.clientService.getAllClient()
    .subscribe((result) => {
      this.clients = result;
      console.log(result)
    })
  }

  public getOrder(){
    this.orderService.getAllOrder()
    .subscribe((result) => {
      this.orders = result;
      console.log(result)
    })
  }
}
