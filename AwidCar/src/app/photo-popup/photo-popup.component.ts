import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PhotoPopupService } from '../service/photo-popup.service';
import { Photo } from '../models/Photo';

@Component({
  selector: 'app-photo-popup',
  templateUrl: './photo-popup.component.html',
  styleUrls: ['./photo-popup.component.scss']
})
export class PhotoPopupComponent {
  formData: FormGroup;
  photoData: { [key: string]: string | File } = {};

  constructor(private fb: FormBuilder, private photoPopupService: PhotoPopupService) {
    this.formData = this.fb.group({});

    for (let i = 1; i <= 4; i++) {
      this.formData.addControl(`photo${i}`, this.fb.control(''));
      this.formData.addControl(`photo${i}URL`, this.fb.control(''));
    }
  }

  MethodePost() {
    const photoData: Photo = {
      photo1: '',
      photo2: '',
      photo3: '',
      photo4: ''
    };
  
    for (let i = 1; i <= 4; i++) {
      const photoControl = `photo${i}`;
      const photoURLControl = `photo${i}URL`;
  
      if (this.formData.get(photoControl)?.value) {
        photoData[photoControl as keyof Photo] = this.formData.get(photoControl)?.value;
      }
  
      if (this.formData.get(photoURLControl)?.value) {
        photoData[photoControl as keyof Photo] = this.formData.get(photoURLControl)?.value;
      }
    }
  
    this.photoPopupService.postData(photoData).subscribe((response) => {
      console.log('Response from server:', response);
    });
  }
  

  onFileChange(event: Event, photoControlName: string) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const selectedFile = inputElement.files[0];
      this.formData.get(photoControlName)?.setValue(selectedFile);
    }
  }
  
}
