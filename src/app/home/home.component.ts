import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import {Artist} from '../artist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
   private results: Artist[];
   private searchstr:string ='';

 constructor(private myserv: SpotifyService) { }
   search()
   {
      this.myserv.getData(this.searchstr).subscribe(
        data => {
          this.results = data.artists.items;
          
        }
     )
   }

}
