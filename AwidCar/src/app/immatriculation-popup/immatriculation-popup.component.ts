import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Series } from '../enums/Series.enum';

@Component({
  selector: 'app-immatriculation-popup',
  templateUrl: './immatriculation-popup.component.html',
  styleUrls: ['./immatriculation-popup.component.scss']
})
export class ImmatriculationPopupComponent {
  immatriculationForm = new FormGroup({
    immatriculation: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<ImmatriculationPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
 
  onNoClick(): void {
    this.dialogRef.close();
  }

  disableSelect = new FormControl(false);

  series = Object.values(Series);


}
