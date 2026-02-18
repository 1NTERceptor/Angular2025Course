import { Component } from '@angular/core';
import { UserInterface } from '../interface/user.interface';
import { RoleEnum } from '../enum/role.enum';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.less'
})
export class UsersComponent {
  users: UserInterface[] = [
  {
    name: 'John',
    surname: 'Doe',
    role: RoleEnum.admin,
    email: 'test@test.pl',
    startDate: '2023-01-01',
    salary: 5000
  },
  {
    name: 'Jane',
    surname: 'Smith',
    role: RoleEnum.user,
    email: 'jane.smith@example.com',
    startDate: '2023-02-01',
    salary: 4000
  },
  {
    name: 'Monika',
    surname: 'Kowalski',
    role: RoleEnum.user,
    email: 'monika.kowalski@example.com',
    startDate: '2023-03-01',
    salary: 4500
  }
  ]

  displayedColumns: string[] = ['name', 'surname', 'role', 'email', 'salary', 'startDate'];
  dataSource = new MatTableDataSource(this.users);
  roleEnum = RoleEnum;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(){
    this.users.length ? console.log('Mamy użytkowników') : console.log('Brak użytkowników');
  }
}
