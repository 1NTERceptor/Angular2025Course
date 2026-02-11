import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [  
    UsersComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
