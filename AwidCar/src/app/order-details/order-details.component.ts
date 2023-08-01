import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  
  orders: any = [];
  router: any;

  constructor(private orderService: OrderService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getOrderById(params["id"]);
     })
  }

  public getOrderById(id :number){
    this.orderService.getOrderById(id).subscribe((result) => { 
      this.orders = result;
    })
  }

}
