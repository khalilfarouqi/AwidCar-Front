import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brande } from '../enums/Brande.enum';
import { Fuel } from '../enums/Fuel.enum';
import { GearBox } from '../enums/GearBox.enum';
import { Style } from '../enums/Style.enum';
import { CarService } from '../service/car.service';
import { ImmatriculationService } from '../service/immatriculation.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ImmatriculationPopupComponent } from '../immatriculation-popup/immatriculation-popup.component';
import { Immatriculation } from '../models/Immatriculation';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-car-editeur',
  templateUrl: './car-editeur.component.html',
  styleUrls: ['./car-editeur.component.scss']
})
export class CarEditeurComponent implements OnInit {
  formData: FormGroup;
  
  constructor(private fb: FormBuilder, 
    private carService: CarService, 
    private immatriculationService: ImmatriculationService, 
    private router: Router, 
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {
    this.formData = this.fb.group({
      name: ['', Validators.required],
      brande: ['', Validators.required],
      mileage: [0, Validators.required],
      model: [0, Validators.required],
      immatriculation: [0, Validators.required],
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
      immatriculation: [0, Validators.required],
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
  
  MethodePost() {
    const formDataValue = this.formData.value;
  
    this.immatriculationService.getLastCarId().subscribe((result) => {
      formDataValue.immatriculation = result;
      const postData = {
        ...formDataValue,
        immatriculation: {
          id: result,
        }
      };
  
      this.carService.postData(postData)
        .pipe(
          catchError((error) => {
            if (error.status === 400) {
              this.showErrorAlert(error.error);
            }
            throw error;
          })
        )
        .subscribe(
          () => {
            this.router.navigate(['/car']);
          },
          (error) => {
            // Handle other error cases here if needed
          }
        );
    });
  }
  
  showErrorAlert(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['error-alert'],
    });
  }
  
  openImmatriculationPopup(): Promise<Immatriculation> {
    const dialogRef = this.dialog.open(ImmatriculationPopupComponent, {
      width: '250px',
      data: {}
    });
    return dialogRef.afterClosed().toPromise();
  }

  brandes = Object.values(Brande);
  fuels = Object.values(Fuel);
  gearboxs = Object.values(GearBox);
  styles = Object.values(Style);
}
