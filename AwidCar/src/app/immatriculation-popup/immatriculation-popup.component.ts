import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Series } from '../enums/Series.enum';
import { ImmatriculationService } from '../service/immatriculation.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-immatriculation-popup',
  templateUrl: './immatriculation-popup.component.html',
  styleUrls: ['./immatriculation-popup.component.scss']
})
export class ImmatriculationPopupComponent {
  immatriculationForm = new FormGroup({
    immatriculation: new FormControl('')
  });

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<ImmatriculationPopupComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private immatriculationService: ImmatriculationService,
    private snackBar: MatSnackBar) {
    this.formData = this.fb.group({
      carNumber: [0, Validators.required],
      series: ['', Validators.required],
      prefectureRef: [0, Validators.required]
    });
  }
 
  formData: FormGroup;
  errorMessage: string | null = null;

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  MethodePost() {
    const selectedSeries = this.formData.value.series;
    const convertedSeries = this.immatriculationService.convertArabicToLatin(selectedSeries);
    this.immatriculationService.postData({
      carNumber: this.formData.value.carNumber,
      series: convertedSeries,
      prefectureRef: {
        id: this.formData.value.prefectureRef
      }
    }).subscribe(
      () => {
        this.dialogRef.close();
      },
      (error) => {
        if (error.status === 400) {
          
        } else {
          this.dialogRef.disableClose = false;
        }
      }
    );
    this.dialogRef.disableClose = true;
  }

  disableSelect = new FormControl(false);

  series = Object.values(Series);
}
