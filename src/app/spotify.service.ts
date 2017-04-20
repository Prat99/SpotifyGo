import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SpotifyService {
   private searchUrl:string;
   private artistUrl:string;
   private albumUrl:string;
   
  constructor(private http: Http) { }

  getData(str: string)
  {
       this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&type=artist';
    return this.http.get(this.searchUrl).map(
       res  => res.json()
    );
  }

  getArtist(id: string)
  {
     this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
    return this.http.get(this.artistUrl).map(
       res  => res.json()
    );
  }

  getAlbums(artistId:string)
  {
    this.albumUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
    return this.http.get(this.albumUrl).map(
       res  => res.json()
    );
  }

   getAlbum(id:string)
  {
    this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;
    return this.http.get(this.albumUrl).map(
       res  => res.json()
    );
  }
    
}
