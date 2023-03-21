import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TakePhotoService {

  constructor(
    private http: HttpClient
  ) { }


  enviarImg(){
    this.http.post('​http://localhost:5000/api/imageSave', {
      img: '',
      codigo: '1152069'
     })
  }
}
