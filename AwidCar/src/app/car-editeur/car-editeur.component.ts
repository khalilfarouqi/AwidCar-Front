import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brande } from '../enums/Brande.enum';
import { Fuel } from '../enums/Fuel.enum';
import { GearBox } from '../enums/GearBox.enum';
import { Style } from '../enums/Style.enum';
import { CarService } from '../service/car.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ImmatriculationPopupComponent } from '../immatriculation-popup/immatriculation-popup.component';

@Component({
  selector: 'app-car-editeur',
  templateUrl: './car-editeur.component.html',
  styleUrls: ['./car-editeur.component.scss']
})
export class CarEditeurComponent implements OnInit {
  
  formData: FormGroup;
  
  constructor(private fb: FormBuilder, private carService: CarService, private router: Router, public dialog: MatDialog) {
    this.formData = this.fb.group({
      name: ['', Validators.required],
      brande: ['', Validators.required],
      mileage: [0, Validators.required],
      model: [0, Validators.required],
      horsPower: [0, Validators.required],
      consumption: [0, Validators.required],
      fuel: ['', Validators.required],
      bluetooth: [false, Validators.required],
      airBag: [false, Validators.required],
      gearBox: ['', Validators.required],
      seat: [0, Validators.required],
      door: [0, Validators.required],
      style: ['', Validators.required],
      bootSize: [0, Validators.required],
      price: [0, Validators.required],
      rate: [0, Validators.required],
      cdm: [false, Validators.required],
      protectionVol: [false, Validators.required],
      respoCivile: [false, Validators.required],
      brisGlacePneus: [false, Validators.required]
    });
  }
  
  ngOnInit() {
    this.formData = this.fb.group({
      name: ['', Validators.required],
      brande: ['', Validators.required],
      mileage: [0, Validators.required],
      model: [0, Validators.required],
      horsPower: [0, Validators.required],
      consumption: [0, Validators.required],
      fuel: ['', Validators.required],
      bluetooth: [false, Validators.required],
      airBag: [false, Validators.required],
      gearBox: ['', Validators.required],
      seat: [0, Validators.required],
      door: [0, Validators.required],
      style: ['', Validators.required],
      bootSize: [0, Validators.required],
      price: [0, Validators.required],
      rate: [0, Validators.required],
      cdm: [false, Validators.required],
      protectionVol: [false, Validators.required],
      respoCivile: [false, Validators.required],
      brisGlacePneus: [false, Validators.required]
    });
  }
  
  MethodePost(){
    this.carService.postData(this.formData.value).subscribe((item) => {
      this.router.navigate(["/car"])
    })
  }
  
  openImmatriculationPopup(): void {
    const dialogRef = this.dialog.open(ImmatriculationPopupComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The immatriculation was submitted:', result);
    });
 }
  
  brandes = Object.values(Brande);
  fuels = Object.values(Fuel);
  gearboxs = Object.values(GearBox);
  styles = Object.values(Style);

}
