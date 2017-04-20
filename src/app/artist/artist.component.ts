import {Component, OnInit } from '@angular/core';
import {SpotifyService } from '../spotify.service';
import {ActivatedRoute} from '@angular/router';
import {AlbumComponent} from '../album/album.component';


import {Artist} from '../artist';
import {Album} from '../album';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
 private id:string;
 private artist: Artist[];
 private albums: Album[];
  constructor(private myartist: SpotifyService, private activated: ActivatedRoute) 
  {
    this.id = activated.snapshot.params['id'];
   }

  ngOnInit() {
     this.myartist.getArtist(this.id).subscribe(
       artist =>{
            this.artist = artist;
       }
     );

      this.myartist.getAlbums(this.id).subscribe(
       albums =>{
            this.albums = albums.items;
            console.log(this.albums);
       }
     );
   } // end of onInit

}
