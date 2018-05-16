import {AfterViewInit, Component} from '@angular/core';
import {VideoService} from "./service/video.service";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Video Host App';
  videoUrl3: string = "/videos/2";
  videoUrl4: string = "/videos/1";

  constructor(private videoService: VideoService) {

  }

  ngOnInit() {
    if(!environment.production) {
      let host:string = "http://localhost:8080";
      this.videoUrl3 = host.concat( this.videoUrl3);
      this.videoUrl4 = host.concat( this.videoUrl4);
    }
  }

  ngAfterViewInit() {
    let player3 = videojs('my-video3');

    let player4 = videojs('my-video4');

  }

}
