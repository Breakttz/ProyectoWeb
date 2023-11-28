import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { NormativasComponent } from './pages/normativas/normativas.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ComoayudarComponent } from './pages/comoayudar/comoayudar.component';
import { SobrenosotrosComponent } from './pages/sobrenosotros/sobrenosotros.component';

import { ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { PerfilusuarioComponent } from './pages/perfilusuario/perfilusuario.component';
import { AuthGuard } from './auth.guard';
import { PerfilnormalComponent } from './components/perfilnormal/perfilnormal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    LoginComponent,
    RegistrarseComponent,
    NormativasComponent,
    NoticiasComponent,
    ComoayudarComponent,
    SobrenosotrosComponent,
    PerfilusuarioComponent,
    PerfilnormalComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // No debes importar NgModule aquí
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
