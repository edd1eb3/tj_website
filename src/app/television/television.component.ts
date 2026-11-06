import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Video {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
  thumbnail: string;
}

interface VideoResponse {
  videos: Video[];
}

@Component({
  selector: 'app-television',
  standalone: false,
  templateUrl: './television.component.html',
  styleUrl: './television.component.css'
})
export class TelevisionComponent implements OnInit {
  videos: Video[] = [];
  selectedVideo: Video | null = null;
  loading: boolean = true;
  error: string = '';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.loadVideos();
  }

  loadVideos(): void {
    this.loading = true;
    this.error = '';
    
    this.http.get<VideoResponse>('videos.json')
      .subscribe(
        (data: VideoResponse) => {
          console.log('Videos loaded successfully:', data);
          this.videos = data.videos;
          if (this.videos.length > 0) {
            this.selectedVideo = this.videos[0];
          }
          this.loading = false;
        },
        (error) => {
          console.error('Error loading videos:', error);
          this.error = 'Failed to load videos. Please check the browser console.';
          this.loading = false;
        }
      );
  }

  selectVideo(video: Video): void {
    this.selectedVideo = video;
  }

  getYoutubeEmbedUrl(youtubeId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${youtubeId}`);
  }
}
