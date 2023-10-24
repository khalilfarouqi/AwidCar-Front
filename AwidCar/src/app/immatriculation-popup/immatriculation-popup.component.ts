import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Series } from '../enums/Series.enum';
import { ImmatriculationService } from '../service/immatriculation.service';

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
    private immatriculationService: ImmatriculationService) {
    this.formData = this.fb.group({
      carNumber: [0, Validators.required],
      series: ['', Validators.required],
      prefectureRef: [0, Validators.required]
    });
  }
 
  formData: FormGroup;

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  MethodePost(){
    const selectedSeries = this.formData.value.series;
    const convertedSeries = this.immatriculationService.convertArabicToLatin(selectedSeries);
    this.immatriculationService.postData({
      carNumber: this.formData.value.carNumber,
      series: convertedSeries,
      prefectureRef: {
        id: this.formData.value.prefectureRef
      }
    }).subscribe();
  }

  disableSelect = new FormControl(false);

  series = Object.values(Series);
}
