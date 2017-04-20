import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import {ActivatedRoute} from '@angular/router';
import {Album} from '../album';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  private id: string;
  private album: any[];

  constructor(private albumservice: SpotifyService, activated: ActivatedRoute) { 
         this.id = activated.snapshot.params['id'];
  }

  ngOnInit() {
     this.albumservice.getAlbum(this.id).subscribe(
       
          album1 => {
                         this.album = album1;
          console.log(this.album);
          }
     );
  }

}