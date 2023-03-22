import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TakePhotoService } from './services/take-photo.service';
import Swal from 'sweetalert2'
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private img: WebcamImage = {} as WebcamImage;

   public codeForm: FormGroup = this.fb.group({
    studentCode: ['', [Validators.required]]
   }) 

   constructor (
    private photoServie: TakePhotoService,
    private fb: FormBuilder
   ) { }
 
 

   public inputError(){
      return this.codeForm.controls['studentCode'].errors && this.codeForm.controls['studentCode'].touched 
   }

   public captureImg(event: WebcamImage){
      this.img = event;
   }

   public saveImg(){
    this.photoServie.takeSnapshot()
    
    this.photoServie.enviarImg(this.img.imageAsBase64, this.codeForm.controls['studentCode'].value)
        .subscribe({
          next: (res: any) => {
            this.codeForm.reset()
            Swal.fire('Foto tomada con éxito', '', 'success');
          }
        })
   }
}
