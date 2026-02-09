import { Component } from '@angular/core';
import { UserInterface } from '../interface/user.interface';
import { RoleEnum } from '../enum/role.enum';

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
}
