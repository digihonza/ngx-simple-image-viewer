# NgxSimpleImageViewer

Simple image viewer for Angular which enables image rotation and zoom.

## Installation

`npm install ngx-simple-image-viewer --save`

import **NgxSimpleImageViewer** in your module.

## Usage
Html:
```html
<ngx-simple-image-viewer [fileObservable]="image$" [fileName]="fileName"></ngx-simple-image-viewer>
```

Typescript:
```typescript
constructor(private http: HttpClient) { }

image$: Observable<Blob> = this.http.get<Blob>('https://i.imgur.com/CS1ZP9h.jpeg'), {responseType: 'blob' as 'json'});
fileName = 'sample-image.jpg';
```

## Dependencies
- Angular (>=13.3.0)
- primeicons (>=5.0.0)