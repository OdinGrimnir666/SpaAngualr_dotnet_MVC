import { Routes } from '@angular/router';
import {AddUserComponent} from "../components/add-user/add-user.component";
import {AppComponent} from "./app.component";
import {TableUserComponent} from "../components/table-user/table-user.component";
import {AddGroupComponent} from "../components/add-group/add-group.component";

export const routes: Routes = [
  {path: 'add/user',component: AddUserComponent },
 {path: '',component:  TableUserComponent},
  {path: 'add/group',component:  AddGroupComponent},
];
