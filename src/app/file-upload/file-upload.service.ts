import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private readonly URL = 'http://localhost:3000/upload';
  constructor(private http: HttpClient) { }

  upload(file) {
    return this.http.post(this.URL, file, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      map(event => {
        // switch (event) {
        //     case HttpEventType.UploadProgress:
        //         const progress = Math.round(100 * event.loaded / event.total);
        //         return { status: 'progress', message: progress };

        //     case HttpEventType.Response:
        //         return event.body;
        //     default:
        //         return `Unhandled event: ${event.type}`;
        // }
        return event;
      })
    )
  }
}