import {Component, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatIcon} from "@angular/material/icon";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatDivider} from "@angular/material/divider";
import {TableUserComponent} from "../components/table-user/table-user.component";
import {ShowUserComponent} from "../components/table-user/show-user/show-user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIcon, MatToolbar, MatIconButton, MatButton, RouterLink, MatMenuTrigger, MatMenu, MatMenuItem, NgOptimizedImage, MatSlideToggle, MatToolbarRow, MatDivider, RouterLinkActive, TableUserComponent, ShowUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent   {
  title = 'untitled2';
  menu: any;
  protected readonly TableUserComponent = TableUserComponent;
}
