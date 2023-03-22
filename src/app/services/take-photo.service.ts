import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TakePhotoService {

  baseUrl = 'http://localhost:5000/api/imageSave' 
  trigger = new BehaviorSubject<boolean>(false);
  constructor(
    private http: HttpClient
  ) { }

  
  takeSnapshot(){
    this.trigger.next(true)
    return this.trigger.asObservable();
  }

  enviarImg(imgBase64: string, studentCode: string){
    const body = {
      imgBase64,
      studentCode
    }
    return this.http.post(this.baseUrl, body)
  }
}
