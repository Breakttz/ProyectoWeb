import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { NormativasComponent } from './pages/normativas/normativas.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ComoayudarComponent } from './pages/comoayudar/comoayudar.component';
import { SobrenosotrosComponent } from './pages/sobrenosotros/sobrenosotros.component';
import { PerfilusuarioComponent } from './pages/perfilusuario/perfilusuario.component';
import { AuthGuard } from './auth.guard';
import { PerfilnormalComponent } from './components/perfilnormal/perfilnormal.component';
const routes: Routes = [
  { path: '', component: InicioComponent }, // Ruta por defecto
  {path: 'login', component:LoginComponent},
  {path: 'registrarse', component:RegistrarseComponent},
  {path: 'normativas', component:NormativasComponent},  
  {path: 'noticias', component:NoticiasComponent},
  {path: 'comoayudar', component:ComoayudarComponent},
  {path: 'sobrenosotros',component:SobrenosotrosComponent}, // Agrega más rutas según tus necesidades
  { path: 'perfil', component: PerfilusuarioComponent, canActivate: [AuthGuard] },
  {path: 'perfil2', component:PerfilnormalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
