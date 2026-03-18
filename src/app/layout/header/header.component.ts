import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LogoutConfirmDialogComponent } from 'src/app/shared/logout-confirm-dialog/logout-confirm-dialog.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>()


  constructor(public router: Router, public authService: AuthService, private dialog: MatDialog) { }

  



  ngOnInit(): void {


  }


  isActive(route: string): boolean {
    return this.router.url === route;
  }


logout() {
  const dialogRef = this.dialog.open(LogoutConfirmDialogComponent, {
    disableClose: true // prevent closing by clicking outside
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  });
}
goToContact() {
  this.router.navigate(['/contact']);
}
}
