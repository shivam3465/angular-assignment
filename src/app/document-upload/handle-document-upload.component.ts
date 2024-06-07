import { CommonModule } from '@angular/common';
import {
  Component,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-handle-document-upload',
  templateUrl: './handle-document-upload.component.html',
  styleUrls: ['./handle-document-upload.css'],
  standalone: true,
  imports: [CommonModule],
})
export class HandleDocumentUpload {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @Output() changeStep = new EventEmitter<number>();

  photo: string | null = null;
  showVideo = false;
  stream: MediaStream | null = null;

  capturePhoto() {
    const constraints = { video: true };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        this.stream = stream;
        this.videoElement.nativeElement.srcObject = stream;
        this.showVideo = true;
      })
      .catch((error) => {
        console.error('Error accessing the camera:', error);
      });
  }

  takePhoto() {
    const video = this.videoElement.nativeElement;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    if (context) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      this.photo = canvas.toDataURL('image/png');
    }

    this.stopVideo();
    this.showVideo = false;
  }

  uploadPhoto() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.click();

    fileInput.onchange = () => {
      const file = fileInput.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.photo = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
  }
  
  tryAgain() {
    this.photo = null;
  }

  stopVideo() {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
    }
  }

  uploadToDatabase() {
    alert('Photo uploaded successfully');
    this.photo = null;
    this.changeTheStep(1);
  }
  changeTheStep(step: number) {
    this.changeStep.emit(step);
  }
  ngOnDestroy() {
    this.stopVideo();
  }
}
