import { Component, OnInit } from '@angular/core';
import { ImageDownloadService } from './image-download.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-simple-image-viewer-app';

  image$ = this.imageDownloadService.downloadFileBlob('https://i.imgur.com/CS1ZP9h.jpeg');
  
  constructor(private imageDownloadService: ImageDownloadService) {}

  ngOnInit(): void {    
  }


}
