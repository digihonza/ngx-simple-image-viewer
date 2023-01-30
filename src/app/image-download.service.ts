import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageDownloadService {

  constructor(private http: HttpClient) { }

  downloadFileBlob(url: string): Observable<Blob> {
    return this.http.get<Blob>(url, {responseType: 'blob' as 'json'});
  }
}
