import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders: any = [];

  constructor(private orderService: OrderService){}

  ngOnInit(): void {
    this.getOrder();
  }
  
  public getOrder(){
    this.orderService.getAllOrder().subscribe((result) => {
      this.orders = result;
      console.log(result)
    })
  }

}
