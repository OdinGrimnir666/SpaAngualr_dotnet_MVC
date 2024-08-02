import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";
import {GroupUserService} from "../../services/group-user.service";
import {UserRequestService} from "../../services/user-request.service";
import {AlertService} from "../../services/alert.service";
import {ModelAddUser} from "../../Entity/Services/models/User";
import {HttpClientModule} from "@angular/common/http";
import {MatTreeModule} from "@angular/material/tree";

@Component({
  selector: 'app-add-group',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    NgForOf,
    HttpClientModule,
    MatTreeModule
  ],
  templateUrl: './add-group.component.html',
  styleUrl: './add-group.component.css',
  providers: [GroupUserService, UserRequestService, AlertService]
})


export class AddGroupComponent {
  nameGroup: string|any;


  constructor ( private groupUserService: GroupUserService, private alert:AlertService){

  }
  handleButtonClick() {
    if (!this.Check())
    {
      return;
    }
    console.log(this.nameGroup)

    this.groupUserService.AddGroup(this.nameGroup.toString()).subscribe({
      next: (group) => {
        this.alert.showAutoCloseSuccess("Успішно додали группу "   + group.groupName)
      },
      error: (error) => {
        console.error(error.toString());
        this.alert.showAutoCloseError("Помилка")
      }
    });
  }
  private Check() : boolean
  {

    if(this.nameGroup == "")
    {

      this.alert.showAutoCloseError("Ім'я не може бути порожнім")
      return false;
    }
    return  true;

  }
}
