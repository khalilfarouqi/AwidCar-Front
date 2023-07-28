import { Component} from '@angular/core';
import { Brande } from '../enums/Brande.enum';
import { Fuel } from '../enums/Fuel.enum';
import { GearBox } from '../enums/GearBox.enum';
import { Style } from '../enums/Style.enum';
import { Car } from '../models/Car';
import { CarService } from '../service/car.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-editeur',
  templateUrl: './car-editeur.component.html',
  styleUrls: ['./car-editeur.component.scss']
})
export class CarEditeurComponent {

  formData: Car = { 
    name: '', 
    Brande: Brande.ALFAROMEO, 
    Matricule: '', 
    Mileage: 0, 
    Model: 0, 
    HorsPower: 0, 
    Consumption: 0, 
    fuel: Fuel.DIESEL,
    Bluetooth:false,
    AirBag: false,
    gearBox: GearBox.AUTOMATIC,
    Seat: 0,
    Door: 0,
    Style: Style.COUPE,
    bootSize: 0,
    Price: 0,
    Rate: 0,
    CDM: false,
    ProtectionVol: false,
    RespoCivile: false,
    BrisGlacePneus: false,
    photo: 0 };
  
    carList: any = [];
  constructor(private carService: CarService,private router: Router, private route:ActivatedRoute) {}

  onFormSubmit() {
    this.carService.addCar(this.formData).subscribe(
      response => {
        console.log('Form submitted successfully:', response);
      },
      error => {
        console.error('Error submitting form:', error);
      }
    );
  }

  MethodePost(){
    this.carService.postData(this.formData).subscribe((item) => {
      console.log('salam')
      console.log(this.formData)
      this.carList = [item,...this.carList]
      this.router.navigate(["Admin/Car"])
    })
  }

  brandes = Object.values(Brande);
  fuels = Object.values(Fuel);
  gearboxs = Object.values(GearBox);
  styles = Object.values(Style);

}
