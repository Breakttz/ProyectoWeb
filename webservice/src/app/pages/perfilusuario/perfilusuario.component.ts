import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-perfilusuario',
  templateUrl: './perfilusuario.component.html',
  styleUrls: ['./perfilusuario.component.sass']
})
export class PerfilusuarioComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data: any) => {
        // Inicializa la propiedad 'editing' en false para cada usuario
        this.users = data.map((user: any) => ({ ...user, editing: false }));
      },
      (error: any) => {
        console.error('Error al cargar usuarios', error);
      }
    );
  }

  editUser(user: any): void {
    // Alterna la propiedad 'editing' entre true y false
    user.editing = !user.editing;
  }

  deleteUser(userId: string): void {
    this.userService.deleteUser(userId).subscribe(
      () => {
        console.log('Usuario eliminado con éxito');
        this.loadUsers();
      },
      (error: any) => {
        console.error('Error al eliminar usuario', error);
      }
    );
  }

  // Corrige esta función, se ingresó incorrectamente en tu código
  toggleEditMode(user: any): void {
    user.editing = !user.editing;
  }

  saveUser(user: any): void {
    this.userService.updateUser(user._id, user).subscribe(
      (data: any) => {
        console.log('Usuario actualizado con éxito', data);
        user.editing = false;
      },
      (error: any) => {
        console.error('Error al actualizar usuario', error);
      }
    );
  }
}
