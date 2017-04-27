import { NgModule }         from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }        from './home.component';
import { InterestsComponent }   from './interests.component';
import { PortfolioComponent }   from './portfolio.component';

const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'home',  component: HomeComponent},
    {path:'interests', component: InterestsComponent},
    {path:'portfolio',     component: PortfolioComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
