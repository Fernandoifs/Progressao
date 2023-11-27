import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DadosComponent } from './pages/dados/dados.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'}, //rota padrao
  {path:'home',component:HomeComponent},
  {path:'dados',component:DadosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
