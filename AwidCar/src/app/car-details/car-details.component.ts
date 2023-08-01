import { Component, OnInit } from '@angular/core';
import { CarService } from '../service/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  
  cars: any = [];
  router: any;
  
  starList: string[] = [];

  constructor(private carService: CarService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getCarById(params["id"]);
     })
  }

  public getCarById(id :number){
    this.carService.getCarById(id).subscribe((result) => { 
      this.cars = result; 

      for(let i=1; i<=5; i++) {
        if(i <= this.cars.rate) {
          this.starList.push("bi bi-star");
        } else {
          this.starList.push("far fa-star-half");
        }
      }

      console.log(result)
    })
  }

}
