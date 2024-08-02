import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private snackBar: MatSnackBar) {}

  showAutoCloseError(message: string): void {
    const config: MatSnackBarConfig = {
      duration: 10000,
      verticalPosition: 'top',
      panelClass: ['error-snackbar','wide-snackbar']
    };
    this.snackBar.open(message, 'Закрыть', config);
  }

  showAutoCloseSuccess(message: string): void {
    const config: MatSnackBarConfig = {
      duration: 10000,
      verticalPosition: 'top',
      panelClass: ['success-snackbar','wide-snackbar','green-snackbar']
    };
    this.snackBar.open(message, 'Закрыть',config)
  }
}
