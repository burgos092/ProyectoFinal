import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email === 'santiagoburgos@gmail.com' && this.password === '1234') {
      // Guardar información del usuario en localStorage
      localStorage.setItem('user', JSON.stringify({ email: this.email }));
      this.router.navigate(['/']); // Redirigir al home o ruta principal
    } else {
      alert('Invalid credentials'); // Mostrar alerta si las credenciales no son válidas
    }
  }
}