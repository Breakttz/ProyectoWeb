import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.sass']
})
export class RegistrarseComponent {
  miFormulario: FormGroup;
  submitted = false; // Nueva propiedad para rastrear si se ha enviado el formulario

  constructor(private formBuilder: FormBuilder) {
    this.miFormulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      rut: ['', [Validators.required, this.validarRut]],
      region: ['', Validators.required],
      comuna: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasenya: ['', [Validators.required, Validators.minLength(6), this.pwcheck]],
      confirmarContrasenya: ['', Validators.required],
    });
  }

  // Método personalizado para validar el RUT
  private validarRut(control: { value: string; }) {
    const rut = control.value;

    if (rut.length !== 10) {
      return { validarRut: true };
    }

    const suma = rut.split('').reverse().reduce((acc: number, digit: string, i: number) => {
      return acc + parseInt(digit) * (i % 6 + 2);
    }, 0);

    const dv = 11 - (suma % 11);

    if (dv === 11) {
      return { validarRut: false };
    }

    const verif = rut.slice(-1).toUpperCase();

    if (dv === 10) {
      return { validarRut: verif === 'K' };
    } else {
      return { validarRut: parseInt(verif) === dv };
    }
  }

  // Método personalizado para verificar la fortaleza de la contraseña
  private pwcheck(control: { value: string; }) {
    const contrasenya = control.value;

    const hasNumber = /\d/.test(contrasenya);
    const hasUpper = /[A-Z]/.test(contrasenya);
    const hasLower = /[a-z]/.test(contrasenya);

    return (hasNumber && hasUpper && hasLower) ? null : { pwcheck: true };
  }

  // Método para manejar la presentación del formulario
  enviarFormulario() {
    this.submitted = true; // Establece submitted en true cuando se envía el formulario

    if (this.miFormulario.valid) {
      // Realiza la lógica de envío si el formulario es válido
    }
  }
}
