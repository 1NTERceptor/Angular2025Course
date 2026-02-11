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
  users: UserInterface[] = [{
    name: 'John',
    surname: 'Doe',
    role: RoleEnum.admin,
    email: 'teest@test.pl'
  },
  {
    name: 'Jane',
    surname: 'Smith',
    role: RoleEnum.user,
    email: 'jane.smith@example.com'
  },
  {
    name: 'Monika',
    surname: 'Kowalski',
    role: RoleEnum.user,
    email: 'monika.kowalski@example.com'
  }
  ]

  displayedColumns: string[] = ['name', 'surname', 'role', 'email'];
  dataSource = new MatTableDataSource(this.users);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
