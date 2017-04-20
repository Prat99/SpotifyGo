import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';


const App_routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'artist/:id', component:ArtistComponent},
    {path:'album/:id', component: AlbumComponent}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(App_routes);