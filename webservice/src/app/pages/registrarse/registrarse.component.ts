import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/pages/registrarse/registrarse.service'; // Asegúrate de importar la ruta correcta

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.sass']
})
export class RegistrarseComponent {
  miFormulario: FormGroup;
  submitted = false;
  
  // Agrega el servicio en el constructor
  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.miFormulario = this.formBuilder.group({
      nameusuario: ['', Validators.required],
      rut: ['', Validators.required,],
      region: ['', Validators.required],
      comuna: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberPreference:['', Validators.required],
    });
  }

  enviarFormulario() {
    this.submitted = true;
  
    if (this.miFormulario.valid) {
      console.log("valido");
      this.apiService.enviarDatos(this.miFormulario.value).subscribe(
        (data) => {
          console.log('Respuesta del servidor:', data);
  
          // Abre una nueva pestaña del navegador y redirige a la página del perfil de usuario
          window.open('/perfil-usuario', '_blank');
        },
        (error) => {
          console.error('Error del servidor:', error);
          // Manejar el error del servidor si es necesario
        }
      );
    } else {
      console.log("invalido");
    }
  }
}
