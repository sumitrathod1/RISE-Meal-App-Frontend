import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(
    private auth: AuthService,
    public dialogRef: MatDialogRef<LogoutComponent>
  ) {}

  ngOnInit(): void {}

  Logout() {
    this.auth.signOut();
    this.closeForm();
  }

  closeForm() {
    this.dialogRef.close();
  }
}
