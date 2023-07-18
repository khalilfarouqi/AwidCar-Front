import { Component, OnInit } from '@angular/core';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  cars: any = [];
  router: any;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCar();
  }

  public getCar(){
    this.carService.getAllCar()
    .subscribe((result) => {
      this.cars = result;
      console.log(result)
    })
  }

  public addNewCar(){
    this.carService.addCar(this.cars).subscribe((item) => {
      this.cars = [item,...this.cars]
      this.router.navigate(["/car"])
    })
  }

}
