import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout-confirm-dialog',
  templateUrl: './logout-confirm-dialog.component.html',
  styleUrls: ['./logout-confirm-dialog.component.scss']
})
export class LogoutConfirmDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<LogoutConfirmDialogComponent>) { }

  ngOnInit(): void {
  }

  onYes(){
    this.dialogRef.close(true)
  }

  onNo(){
    this.dialogRef.close(false)
  }

}
