import { Routes } from '@angular/router';
import { WhishlistComponent } from './pages/whishlist/whishlist.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'whishlist', component: WhishlistComponent, pathMatch: 'full'}
];
        