import {Component, OnInit} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {UserRequestService} from "../../services/user-request.service";
import {MatFormField} from "@angular/material/form-field";
import {MatDatepicker, MatDatepickerToggle} from "@angular/material/datepicker";
import {FormsModule} from "@angular/forms";
import {ShowUserComponent} from "./show-user/show-user.component";
import {User} from "../../Entity/Services/models/User";
import {NgIf} from "@angular/common";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-table-user',
  standalone: true,
  imports: [HttpClientModule, MatFormField, MatDatepicker, MatDatepickerToggle, FormsModule, ShowUserComponent, NgIf, MatPaginator,FormsModule],
  templateUrl: './table-user.component.html',
  styleUrl: './table-user.component.css',
  providers: [UserRequestService]
})
export class TableUserComponent implements OnInit{
  Users: User[] | undefined
  countUsers: number= 0;
  pages: number = 0;


  public constructor(private userRequestService: UserRequestService) {

  }

  private  GetUser(pages:number) {
    this.userRequestService.GetUser(pages).subscribe({
      next: (user) => {


        console.log(user);



        if (user.length % 10 !== 0) {
          console.log(user.length % 10 !== 0)
          let countAdd = 10 - (user.length % 10); // Определяем, сколько элементов нужно добавить
          for (let i = 0; i < countAdd; i++) {
            const newUser: User = {
              Id: 0, // Присваиваем уникальный ID
              userName: '',
              email: '',
              userGroups: []
            };
            user.push(newUser)
          }
        }
        this.Users = user;
        console.log(this.Users);
      },
      error: (error) => {
        console.error(error.toString());
      }
    });
  }



  private  GetCountUser() {
    this.userRequestService.GetCountUser().subscribe({
      next: (number) => {
        console.log(number);
        this.countUsers = number.count;
      },
      error: (error) => {
        console.error(error.toString());
      }
    });
  }

  onPaginatorChange(page: PageEvent) {
     this.pages = page.pageIndex;
     this.GetUser(this.pages);
  }

   ngOnInit() {
     this.GetUser(0);
     this.GetCountUser();
  }
}
