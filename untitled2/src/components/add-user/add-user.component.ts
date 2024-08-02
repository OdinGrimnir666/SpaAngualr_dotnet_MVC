import {ChangeDetectionStrategy, ChangeDetectorRef, Component, NgModule, OnInit} from '@angular/core';
import {MatSelect, MatSelectModule} from "@angular/material/select";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormControl, FormsModule, NgModel, ReactiveFormsModule} from "@angular/forms";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {UserRequestService} from "../../services/user-request.service";
import {GroupUserService} from "../../services/group-user.service";
import {HttpClientModule} from "@angular/common/http";
import {GroupUser} from "../../Entity/Services/models/GroupUser";
import {MatCheckbox} from "@angular/material/checkbox";
import {NgForOf, NgIf} from "@angular/common";
import {ModelAddUser, User} from "../../Entity/Services/models/User";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ MatInputModule, MatSelectModule, MatButton, FormsModule, MatCardHeader, MatCardContent,
    MatCard, HttpClientModule, MatCheckbox, NgIf, ReactiveFormsModule, NgForOf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
  providers: [GroupUserService,UserRequestService,AlertService]},

)
export class AddUserComponent implements OnInit {
  userName: any;
  email : string = ""
  userEmail: string= "";
  group: GroupUser[] | undefined;

  toppings = new FormControl<GroupUser[]>([]);
  constructor ( private groupUserService: GroupUserService,private userRequestService: UserRequestService, private alert:AlertService){

  }

  InitialGroup() {
    this.groupUserService.GetGroup().subscribe({
      next: (group) => {

        console.log(group);
        this.group = group;
        console.log(this.group);
      },
      error: (error) => {
        console.error(error.toString());
      }
    });
  }
  handleButtonClick() {
    if (!this.Check())
    {
      return;
    }
    let idGroups =  this.toppings.value?.map(x=>x.idGroup)
    let user = new ModelAddUser(this.userName, this.email,idGroups)
    console.log(user)
    this.userRequestService.AddUser(user).subscribe({
      next: (group) => {
        this.alert.showAutoCloseSuccess("Успішно додали користувача "   + user.userName)
      },
      error: (error) => {
        console.error(error.toString());
        this.alert.showAutoCloseError("Помилка")
      }
    });
  }

  private Check() : boolean
  {

    if(this.userName == "")
    {

      this.alert.showAutoCloseError("Ім'я не може бути порожнім")
      return false;
    }
    if(this.email == "")
    {
      this.alert.showAutoCloseError("Пошта не може бути пистим ")
      return false;
    }
    if (!this.toppings.value || this.toppings.value.length === 0) {
      this.alert.showAutoCloseError("Категория не может быть пустой");
      return false;
    }
    return  true;

  }

  async ngOnInit(){
     this.InitialGroup();
  }





}
