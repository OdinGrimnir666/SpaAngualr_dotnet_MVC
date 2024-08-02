import {Component, Input} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow,
  MatRowDef,
  MatTable, MatTextColumn
} from "@angular/material/table";
import {User} from "../../../Entity/Services/models/User";
import {MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelTitle} from "@angular/material/expansion";
import {NgForOf} from "@angular/common";
import {MatNestedTreeNode, MatTree, MatTreeNode} from "@angular/material/tree";

@Component({
  selector: 'app-show-user',
  standalone: true,
  imports: [
    MatTable,
    MatCell,
    MatHeaderCell,
    MatColumnDef,
    MatCellDef,
    MatHeaderCellDef,
    MatRowDef,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRow,
    MatTextColumn,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    NgForOf,
    MatExpansionModule,
    MatTree,
    MatNestedTreeNode,
    MatTreeNode
  ],
  templateUrl: './show-user.component.html',
  styleUrl: './show-user.component.css'
})
export class ShowUserComponent  {
  @Input() Users: User[]|undefined| any;
  displayedColumns: string[] = ['Id', 'username', 'email','group'];

  constructor() {
    console.log(this.Users);
  }

  getCategoryKeys(user: User): string[] {
    return user.userGroups.map(x=>x.groupName);
  }





}
