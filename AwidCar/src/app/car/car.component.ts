import { Component, OnInit } from '@angular/core';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  cars: any = [];

  constructor(private carService: CarService) { 
  }

  ngOnInit(): void {
    this.getCar();
  }

  public getCar(){
    this.carService.getAllCar().subscribe((result) => { 
      this.cars = result; 
      console.log(result) 
    })
  }

  public getCarById(id :number){
    this.carService.getCarById(id).subscribe((result) => { 
      this.cars = result; 
      console.log(result) 
    })
  }

  DeleteCar(id :number){
    this.carService.deleteCar(id).subscribe(
      data =>{console.log(data);
    })
    this.getCar();
  }

}
